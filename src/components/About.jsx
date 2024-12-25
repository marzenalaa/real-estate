import { motion } from "framer-motion";
import { about } from "../constants";
import Button from "./Button";
import Title from "./Title";
import AboutStats from "./AboutStats";

const About = () => {
  return (
    <motion.section
      initial={{
        opacity: 0,
        x: 100,
      }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container flex flex-col items-center justify-center mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <Title
        heading={about.heading}
        subHeading={about.subHeading}
        text={about.text}
      />
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={about.img}
          alt={about.imgAlt}
          className="w-full sm:w-1/2 max-w-lg"
        />
        <div className="flex flex-col items-center md:items-start mt-10 gap-4 text-gray-700">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            {about.stats.map((stat, index) => (
              <AboutStats stat={stat} key={index} />
            ))}
          </div>

          <p className="my-10 max-w-lg leading-relaxed text-midnightMirage">
            {about.aboutText}
          </p>
          <Button
            title="Learn More"
            href="#"
            className="bg-bonusBlue text-white"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default About;
