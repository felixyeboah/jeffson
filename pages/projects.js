import React from 'react';
import Project from '@components/Project';
import { getAllPostsForProjects } from '../lib/api';
import { NextSeo } from 'next-seo';

const Projects = ({ allProjects }) => {
  return (
    <>
      <NextSeo
        title='Projects | Felix Yeboah'
        description='List of all my projects.'
        canonical='https://www.canonical.ie/'
        openGraph={{
          url: 'https://jeffson.dev/projects',
          title: 'Projects | Felix Yeboah',
          description: 'List of all my projects.',
          images: [
            {
              url: 'https://i.imgur.com/JiEadoT.png',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
          ],
          site_name: 'jeffson.dev',
        }}
        twitter={{
          handle: '@jaeyholic',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <div className=''>
        {allProjects.map((project) => (
          <Project key={project._id} project={project} />
        ))}
      </div>
      <footer className='w-full pt-6 sm:pt-28 pb-5 sm:pb-10 px-4 sm:px-72'>
        <p className='flex items-center'>
          &copy; {new Date().getFullYear()}. Felix Yeboah{' '}
          <span className='text-3xl px-2'>&middot;</span> All rights reserved.
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
