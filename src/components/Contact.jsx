import { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "49089f19-b151-4ef7-8e28-5f913a7fbec6");

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
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };
  return (
    <section
      className="container text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-center">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 under font-medium">
          With Us
        </span>
      </h1>
      <p className="text-gray-700 max-w-80 text-center mb-8 mx-auto">
        Ready to Make a Move? Let's Build Your Future Together.
      </p>

      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto text-gray-800 pt-8"
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              type="text"
              name="Name"
              required
              className="w-full border border-gray-300 rounded p-3 mt-3"
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your E-mail
            <input
              type="email"
              name="Email"
              required
              className="w-full border border-gray-300 rounded p-3 mt-3"
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Message
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            name="Message"
            required
          ></textarea>
        </div>
        <button className="bg-blue-600 text-white py-2 px-12 mb-10 rounded">
          {result ? result : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
