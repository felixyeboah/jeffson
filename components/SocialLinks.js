import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const SocialLinks = () => {
  return (
    <ul className='fixed left-12 bottom-0 sm:flex items-center justify-center flex-col text-white sm:text-2xl hidden'>
      <a href='mailto:me@felixyeboah.dev' target='_blank' className='block'>
        <li className='mb-6'>
          <HiMail />
        </li>
      </a>
      <a href='https://github.com/jaeyholic' target='_blank' className='block'>
        <li className='mb-6'>
          <FaGithub />
        </li>
      </a>
      <a
        href='https://www.linkedin.com/in/felixyeboahjefferson/'
        target='_blank'
        className='block'
      >
        <li className='mb-6'>
          <FaLinkedin />
        </li>
      </a>
      <a href='https://twitter.com/sudocode_' target='_blank' className='block'>
        <li className='mb-6'>
          <FaTwitter />
        </li>
      </a>
      <li className='border-l h-16 ml-2' />
    </ul>
  );
};

export default SocialLinks;
