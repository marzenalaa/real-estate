import { useEffect, useState } from "react";
import { projects, assets } from "../constants";
import { motion } from "framer-motion";
import Title from "./Title";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { projectsData } = projects;
  const { left_arrow, right_arrow } = assets;
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardToShow, setCardToShow] = useState(1);

  useEffect(() => {
    const updateCardToShow = () => {
      if (window.innerWidth > 1024) {
        setCardToShow(projectsData.length);
      } else {
        setCardToShow(1);
      }
    };
    updateCardToShow();
    window.addEventListener("resize", updateCardToShow);
    return () => window.removeEventListener("resize", updateCardToShow);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
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
      className="container mx-auto py-14 px-6 md:px-20 lg:px-32 w-full overflow-hidden"
      id="Projects"
    >
      <Title
        heading={projects.heading}
        subHeading={projects.subHeading}
        text={projects.text}
      />
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={handlePrev}
          className="p-3 bg-gray-300 rounded mr-2 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Previous Project"
        >
          <img src={left_arrow} alt="Previous" />
        </button>
        <button
          onClick={handleNext}
          className="p-3 bg-gray-300 rounded mr-2 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Next Project"
        >
          <img src={right_arrow} alt="Next" />
        </button>
      </div>
      <div className="overflow-hidden">
        <div
          className="flex sm:gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(activeIndex * 100) / cardToShow}%)`,
          }}
        >
          {projects.projectsData.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
