import React from "react";
import Project from "@components/Project";
import { getAllPostsForProjects } from "../lib/api";
import { NextSeo } from "next-seo";

const Projects = ({ allProjects }) => {
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
              url: "https://i.imgur.com/oBTjOr0.png",
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
        {allProjects.map((project) => (
          <Project key={project._id} project={project} />
        ))}
      </div>
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
