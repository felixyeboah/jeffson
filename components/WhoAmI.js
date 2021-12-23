import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const WhoAmI = () => {
  return (
    <div className='text-gray-400'>
      <h4 className='text-2xl sm:text-3xl text-white font-black mb-2 sm:mb-0'>
        Who am I?
      </h4>
      <p className='py-2 sm:py-4 sm:text-lg'>
        A self-taught Software Developer and UI/UX Designer from Accra, Ghana. I
        write code to solve problems. I am super passionate about design,
        development, traveling, and a fanatic of all things digital.
      </p>
      <p className='py-2 sm:py-4 sm:text-lg'>
        I have been very fortunate to be able to do all as a career. I consider
        myself a learner, a life-long learner.
      </p>
      <p className='py-2 sm:py-4 sm:text-lg'>
        I like to turn great designs into meaningful and intuitive interfaces
        that are simple and easy to use and can improve people's lives.
      </p>
      <p className='py-2 sm:py-4 sm:text-lg'>
        I feel honored to have worked with extraordinary people, startups, and
        companies that helped to improve not only my skills but also my life.
      </p>
      <div className='flex items-center flex-wrap mt-4 text-2xl md:hidden'>
        <a href='mailto:me@felixyeboah.dev' target='_blank'>
          <HiMail className='mr-6' />
        </a>
        <a href='https://github.com/jaeyholic' target='_blank'>
          <FaGithub className='mr-6' />
        </a>
        <a
          href='https://www.linkedin.com/in/felixyeboahjefferson/'
          target='_blank'
        >
          <FaLinkedin className='mr-6' />
        </a>
        <a href='https://twitter.com/sudocode_' target='_blank'>
          <FaTwitter className='mr-6' />
        </a>
      </div>
    </div>
  );
};

export default WhoAmI;
