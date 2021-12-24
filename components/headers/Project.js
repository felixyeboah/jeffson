import moment from 'moment';
import React from 'react';
import {ArrowLink} from "@components/ArrowButton";

const ProjectHeader = ({ project }) => {
  const url = project ? project?.url : "/"
  return (
    <div className='block sm:flex items-start justify-between'>
      <div className='sm:w-[45rem] sm:space-y-20'>
        <h3 className='font-extrabold text-4xl sm:text-7xl'>
          {project?.title}
        </h3>
        <div className='sm:w-48 flex items-center justify-between mt-4 sm:mt-0 relative'>
          <ArrowLink to={url}>
            <p>visit url</p>
            <div className='focus-ring absolute z-10 inset-0 left-0 right-0 rounded-lg md:-left-12 md:-right-12 lg:left-0 lg:right-0' />
          </ArrowLink>
        </div>
      </div>
      <div className='sm:w-[35rem] grid sm:grid-cols-2 gap-10 sm:gap-20 mt-16 sm:mt-0'>
        <div className='sm:w-80 space-y-4'>
          <p className='uppercase text-gray-500 text-sm sm:text-lg'>Client</p>
          <p className='text-lg sm:text-xl'>{project?.client}</p>
        </div>
        <div className='sm:w-80 space-y-4'>
          <p className='uppercase text-gray-500 text-sm sm:text-lg'>Date</p>
          <p className='text-lg sm:text-xl'>
            {moment.utc(project?.date).format('LL')}
          </p>
        </div>
        <div className='sm:w-70 space-y-4'>
          <p className='uppercase text-gray-500 text-sm sm:text-lg'>Fonts</p>
          <ul className='flex flex-wrap'>
            {project?.fonts?.map((font) => (
              <li key={font} className='text-lg sm:text-xl'>
                {font},{' '}
              </li>
            ))}
          </ul>
        </div>
        <div className='sm:w-70 space-y-4'>
          <p className='uppercase text-gray-500 text-sm sm:text-lg'>
            Technologies
          </p>
          <ul className='flex flex-wrap'>
            {project?.technologies?.map((tech) => (
              <li key={tech} className='text-lg sm:text-xl'>
                {tech},{' '}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
