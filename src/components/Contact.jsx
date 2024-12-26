import { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import Title from "./Title";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR KEY");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("");
        toast.success("Form Submitted Successfully!");
        event.target.reset();
      } else {
        toast.error("An error occurred, please try again.");
      }
    } catch (error) {
      toast.error("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{
        opacity: 0,
        x: -100,
      }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container text-center py-14 px-8 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <Title
        heading="Contact"
        subHeading=" With Us"
        text="Ready to Make a Move? Let's Build Your Future Together"
      />
      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto text-gray-800 pt-8"
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="Name"
              id="name"
              required
              className="w-full border border-gray-300 rounded p-3 mt-3"
              aria-label="Your Name"
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            <label htmlFor="email">Your E-mail</label>
            <input
              type="email"
              name="Email"
              id="email"
              required
              className="w-full border border-gray-300 rounded p-3 mt-3"
              aria-label="Your Email"
            />
          </div>
        </div>
        <div className="my-6 text-left">
          <label htmlFor="message">Message</label>
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            name="Message"
            id="message"
            required
            aria-label="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-bonusBlue text-white py-2 px-12 mb-10 rounded-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : result || "Send Message"}
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
