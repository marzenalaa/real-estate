import { testimonials } from "../constants";
import { motion } from "framer-motion";
import Title from "./Title";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const { heading, subHeading, text, testimonialsData } = testimonials;
  return (
    <motion.section
      initial={{
        opacity: 0,
        x: 100,
      }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-14 lg:px-32 w-full overflow-hidden"
      id="Testimonials"
    >
      <Title heading={heading} subHeading={subHeading} text={text} />
      <div className="flex flex-wrap justify-center gap-8 py-4">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <TestimonialCard testimonial={testimonial} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials;
