import Button from "./Button";
import Navbar from "./Navbar";
import { header } from "../constants";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Header = () => {
  const { heading, text, buttons } = header;
    useEffect(() => {
    const preloadImage = new Image();
    preloadImage.src = "/header_img.png";
  }, []);
  return (
    <section
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/header_img.png')" }}
      role="img"
      aria-label="A beautiful scenic view of a real estate property"
      id="Header"
    >
      <Navbar />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto text-center text-white py-4 px-6 md:px-20 lg:px-32"
      >
        <h1 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">
          {heading}
        </h1>
        <p className="text-white text-lg my-8 max-w-2xl mx-auto">{text}</p>
        <div className="space-x-6 mt-16">
          {buttons.map((btn, i) => (
            <Button key={i} {...btn} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Header;
