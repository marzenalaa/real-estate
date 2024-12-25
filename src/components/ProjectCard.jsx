const ProjectCard = ({ project }) => {
  return (
    <div className="relative flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-8">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-auto object-cover rounded-lg mb-4"
      />
      <div className="absolute left-0 right-0 bottom-0 text-center text-bitBlack">
        <div className="inline-block bg-white w-3/4 px-1 py-2 shadow-lg rounded-lg">
          <h2 className="text-xl sm:text-lg font-semibold">{project.title}</h2>
          <p className="text-midnightMirage text-sm">
            {project.price} |{" "}
            <span className="text-midnightMirage text-sm">
              {project.location}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
