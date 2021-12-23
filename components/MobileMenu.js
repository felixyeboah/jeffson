import React from 'react';
import Link from 'next/link';
import ActiveLink from '@components/ActiveLink';
import { motion } from 'framer-motion';

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const MobileMenu = ({ onClose }) => {
  return (
    <motion.div
      className='bg-white fixed inset-0 min-h-screen w-full py-10 px-6 z-50'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.6, ...transition } }}
      exit={{ opacity: 0 }}
    >
      <div className='flex items-center justify-between'>
        <Link href='/' passHref>
          <a>
            <div className='font-black w-14 h-14 rounded-full bg-gradient-to-tr to-yellow-400 via-red-500 from-pink-500 flex items-center justify-center text-2xl text-white'>
              FY
            </div>
          </a>
        </Link>

        <button onClick={onClose}>
          <img src='/close.svg' alt='Close' />
        </button>
      </div>

      <ul className='uppercase text-gray-400 font-bold text-4xl mt-16'>
        <ActiveLink activeClassName='active-class' href='/' passHref>
          <a onClick={onClose}>
            <li className='py-4'>Home</li>
          </a>
        </ActiveLink>
        <ActiveLink activeClassName='active-class' href='/blog' passHref>
          <a onClick={onClose}>
            <li className='py-4'>Blog</li>
          </a>
        </ActiveLink>
        <ActiveLink activeClassName='active-class' href='/bookmarks' passHref>
          <a onClick={onClose}>
            <li className='py-4'>Bookmarks</li>
          </a>
        </ActiveLink>
        <ActiveLink activeClassName='active-class' href='/projects' passHref>
          <a onClick={onClose}>
            <li className='py-4'>Projects</li>
          </a>
        </ActiveLink>
        <ActiveLink activeClassName='active-class' href='/books' passHref>
          <a onClick={onClose}>
            <li className='py-4'>Books</li>
          </a>
        </ActiveLink>
        <ActiveLink activeClassName='active-class' href='/uses' passHref>
          <a onClick={onClose}>
            <li className='py-4'>Uses</li>
          </a>
        </ActiveLink>
      </ul>
    </motion.div>
  );
};

export default MobileMenu;
