import React from "react";
import Project from "@components/Project";
import { getAllPostsForProjects } from "../lib/api";
import { NextSeo } from "next-seo";
import ProjectCard from "@components/projectCard";

const Projects = ({ allProjects }) => {
  const data = {
    date: "October 01, 2021",
    title: "Culture Curations",
    description:
      "Culture Management Group LLC is an experiential production company that prioritizes celebration of Africa’s diverse culture and the vibrant work of African creatives & entrepreneurs.",
    image: "/images/curatedbyculture.jpg",
    technologies: [
      "React",
      "Next",
      "Express",
      "Chakra UI",
      "Axios",
      "React Query",
      "React Slick",
    ],
    fonts: ["Poppins"],
    backgroundcolor: "curated",
    datecolor: "gray-400",
    headingcolor: "white",
    contentcolor: "gray-300",
  };
  return (
    <>
      <NextSeo
        title="Projects | Felix Yeboah"
        description="List of all my projects."
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://jeffson.dev/projects",
          title: "Projects | Felix Yeboah",
          description: "List of all my projects.",
          images: [
            {
              url: "https://i.imgur.com/JiEadoT.png",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
          ],
          site_name: "jeffson.dev",
        }}
        twitter={{
          handle: "@jaeyholic",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <div className="">
        <ProjectCard project={data} />
        {allProjects.map((project) => (
          <Project key={project._id} project={project} />
        ))}
      </div>
      <footer className="w-full pt-6 sm:pt-28 pb-5 sm:pb-10 px-4 sm:px-72">
        <p className="flex items-center">
          &copy; {new Date().getFullYear()}. Felix Yeboah{" "}
          <span className="text-3xl px-2">&middot;</span> All rights reserved.
        </p>
      </footer>
    </>
  );
};

export async function getStaticProps({ preview = false }) {
  const allProjects = await getAllPostsForProjects(preview);
  return {
    props: { allProjects, preview },
  };
}

export default Projects;
