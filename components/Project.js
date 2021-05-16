import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import { imageBuilder } from "lib/sanity";
import moment from "moment";

const Project = ({ project }) => {
  const image = imageBuilder.image(project?.coverImage).url();
  return (
    <div className={`bg-${project.backgroundcolor} sm:p-32`}>
      <div className="grid grid-cols-6">
        <div className="col-span-4">
          <div className="sm:w-4/5 sm:mb-20">
            <p className={`text-${project.datecolor} mb-6`}>
              {moment(project.date).format("LL")}
            </p>
            <h2
              className={`text-7xl text-${project.headingcolor} font-black mb-10`}
            >
              {project.title}
            </h2>
            <p className={`sm:text-xl text-${project.contentcolor}`}>
              <BlockContent
                blocks={project?.body}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                dataset="production"
              />
            </p>
          </div>
          <div>
            <img src={image} alt={project.title} />
          </div>
        </div>

        <div className="col-span-1" />
        <div className="col-span-1 ">
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
    </div>
  );
};

export default Project;
