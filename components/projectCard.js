import React from "react";
import moment from "moment";

const ProjectCard = ({ project }) => {
  return (
    <div className={`bg-${project.backgroundcolor} sm:p-32`}>
      <div className="grid sm:grid-cols-6 px-4 sm:px-0 pt-32 sm:py-0 sm:pb-0">
        <div className="sm:col-span-4">
          <div className="sm:w-4/5 sm:mb-20">
            <p className={`text-${project.datecolor} mb-6`}>
              {moment(project.date).format("LL")}
            </p>
            <h2
              className={`text-5xl sm:text-7xl text-${project.headingcolor} font-black mb-10`}
            >
              {project.title}
            </h2>
            <p className={`sm:text-xl text-${project.contentcolor}`}>
              <p>{project.description}</p>
            </p>
          </div>
          <div className="hidden sm:block">
            <img src={project.image} alt={project.title} />
          </div>
        </div>

        <div className="sm:col-span-1" />
        <div className="sm:col-span-1 mt-6 sm:mt-0">
          <div>
            <h5
              className={`text-${project.headingcolor} font-bold sm:text-2xl`}
            >
              Technologies
            </h5>
            <ul className={`text-${project.contentcolor} font-medium mt-2`}>
              {project.technologies.map((item) => (
                <li className="py-1" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h5
              className={`text-${project.headingcolor} font-bold sm:text-2xl`}
            >
              Fonts
            </h5>
            <ul className={`text-${project.contentcolor} font-medium mt-2`}>
              {project.fonts.map((item) => (
                <li className="py-1" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="block sm:hidden mt-10">
        <img src={project.image} alt={project.title} />
      </div>
    </div>
  );
};

export default ProjectCard;
