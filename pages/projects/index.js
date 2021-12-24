import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { getAllPostsForProjects } from '../../lib/api';
import { NextSeo } from 'next-seo';
import { ArrowButton, ArrowLink } from '@components/ArrowButton';
import { motion } from 'framer-motion';
import useDeviceDetect from 'hooks/useDeviceDetect';
import Image from 'next/image';

export const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Projects = ({ allProjects }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const { isMobile } = useDeviceDetect();

  const handleClick = (direction) => {
    setCurrentSlide((prevState) => {
      return (allProjects.length + prevState + direction) % allProjects.length;
    });
  };

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
      <div className='bg-slate-700 min-h-screen text-gray-100 overflow-hidden'>
        <div className='px-6 sm:px-20 pt-28'>
          <div className='flex items-center justify-between mb-10'>
            <div className='space-y-2'>
              <h3 className='font-bold text-4xl sm:text-6xl'>Projects</h3>
              <p className='font-medium sm:text-xl text-gray-400'>
                All the projects I worked on or assisted in a way.
              </p>
            </div>
            <div className='hidden sm:flex items-center space-x-3 sm:space-x-6'>
              <div>
                <ArrowButton direction='left' onClick={() => handleClick(-1)} />
              </div>
              <div>
                <ArrowButton
                  direction='right'
                  onClick={() => handleClick(+1)}
                />
              </div>
            </div>
          </div>
          <motion.div
            animate={{
              x: `-${isMobile ? 24 * currentSlide : 72 * currentSlide}rem`,
              transition: { ...transition },
            }}
            className='block sm:flex items-start sm:justify-between space-y-6 sm:space-y-0'
          >
            {allProjects.map((project) => (
              <div
                key={project._id}
                className='min-w-[24rem] sm:min-w-[70rem] sm:mr-10'
              >
                <div className='block sm:flex items-start justify-between h-[10rem] sm:h-[4rem]'>
                  <div className='w-[22.5rem] sm:w-[50rem] sm:space-y-4'>
                    <h3 className='font-bold text-2xl sm:text-4xl'>
                      {project.title}
                    </h3>
                    <p className='font-medium sm:text-xl line-clamp-2'>
                      <BlockContent
                        blocks={project?.body}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                        dataset='production'
                      />
                    </p>
                  </div>

                  <div className='flex items-center justify-between mt-4 sm:mt-0 relative'>
                    <ArrowLink href={`/projects/${project.slug}`}>
                      <p>learn more</p>
                      <div className='focus-ring absolute z-10 inset-0 left-0 right-0 rounded-lg md:-left-12 md:-right-12 lg:left-0 lg:right-0' />
                    </ArrowLink>
                  </div>
                </div>

                <div className='block w-[21rem] sm:w-[1120px] sm:h-[640px] overflow-hidden mt-14 sm:mt-20'>
                  <Image
                    width='100%'
                    height='100%'
                    layout='responsive'
                    className='w-full h-full object-scale-down object-left-top'
                    src={project.coverImage}
                    alt={project.title}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
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
