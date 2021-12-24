import ProjectHeader from '@components/headers/Project';
import {
  getAllPostsForProjects,
  getAllProjectsWithSlug,
  getProjectAndMoreProjects,
} from 'lib/api';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import BlockContent from '@sanity/block-content-to-react';
import React from 'react';
import Link from 'next/link';

const Portfolio = ({ project, moreProjects }) => {
  return (
    <>
      <NextSeo
        title={project?.title}
        description={project?.title}
        canonical='https://www.canonical.ie/'
        openGraph={{
          url: 'https://jeffson.dev',
          title: project?.title,
          description: project?.title,
          images: [
            {
              url: project?.coverImage,
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
          ],
          site_name: 'SiteName',
        }}
        twitter={{
          handle: '@jaeyholic',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <div className='pt-40 sm:pt-64 px-5 sm:px-32 overflow-hidden'>
        <ProjectHeader project={project} />
        <div className='block w-[21rem] sm:w-[1500px] h-[200px] sm:h-[850px] overflow-hidden mt-16 sm:mt-28'>
          <Image
            width='100%'
            height='100%'
            layout='responsive'
            className='w-full h-full object-scale-down object-left-top'
            src={project.coverImage}
            alt={project.title}
          />
        </div>

        <div className='font-medium sm:text-2xl sm:px-32 mt-14 sm:mt-28'>
          <BlockContent
            blocks={project?.body}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            dataset='production'
          />
        </div>

        <div className='flex items-start justify-between my-20 sm:my-32 sm:px-32'>
          <div className='w-1/2 sm:w-[33rem] space-y-6 mr-3 sm:mr-0'>
            <p className='sm:text-xl text-gray-500'>Previous Project</p>
            <Link href={`/projects/${moreProjects[0]?.slug}`} passHref>
              <a className='text-lg sm:text-6xl font-extrabold hover:text-orange-500 transition-all duration-700 ease-out-expo'>
                {moreProjects[0]?.title}
              </a>
            </Link>
          </div>
          <div className='w-1/2 sm:w-[33rem] space-y-6'>
            <p className='sm:text-xl text-gray-500'>Next Project</p>
            <Link href={`/projects/${moreProjects[1]?.slug}`} passHref>
              <a className='text-lg sm:text-6xl font-extrabold hover:text-orange-500 transition-all duration-700 ease-out-expo'>
                {moreProjects[1]?.title}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps({ params, preview = false }) {
  const data = await getProjectAndMoreProjects(params.slug, preview);
  const projects = await getAllPostsForProjects(preview);

  return {
    props: {
      preview,
      project: data?.post || null,
      moreProjects: data?.morePosts || null,
      projects,
    },
  };
}

export async function getStaticPaths() {
  const allProjects = await getAllProjectsWithSlug();
  return {
    paths:
      allProjects?.map((project) => ({
        params: {
          slug: project.slug,
        },
      })) || [],
    fallback: true,
  };
}

export default Portfolio;
