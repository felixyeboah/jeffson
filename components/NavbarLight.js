import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ActiveLink from '@components/ActiveLink';
import { HiMail } from 'react-icons/hi';

const NavbarLight = ({ onOpen }) => {
  const { pathname } = useRouter();

  return (
    <nav className='flex items-center justify-between px-6 sm:px-10 absolute w-full text-gray-300 py-10 z-40'>
      {pathname !== '/books' ? (
        <Link href='/' passHref>
          <a>
            <div className='font-black w-14 h-14 rounded-full bg-gradient-to-tr to-yellow-400 via-red-500 from-pink-500 flex items-center justify-center text-2xl'>
              FY
            </div>
          </a>
        </Link>
      ) : (
        <Link href='/' passHref>
          <a>
            <div className='font-bold w-14 h-14 rounded-full bg-bgBlack text-gray-300 flex items-center justify-center text-2xl'>
              FY
            </div>
          </a>
        </Link>
      )}

      <button className='block sm:hidden' onClick={onOpen}>
        <img src='/humberger.svg' alt='Humberger' />
      </button>

      <ul className='hidden items-center uppercase text-sm text-gray-600 sm:flex'>
        <ActiveLink href='/' passHref activeClassName='active-class'>
          <a className='hover:text-gray-800'>
            <li className='sm:px-6 font-medium'>Home</li>
          </a>
        </ActiveLink>
        <ActiveLink href='/blog' passHref activeClassName='active-class'>
          <a className='hover:text-gray-800'>
            <li className='sm:px-6 font-medium'>Blog</li>
          </a>
        </ActiveLink>
        <ActiveLink href='/bookmarks' passHref activeClassName='active-class'>
          <a className='hover:text-gray-800'>
            <li className='sm:px-6 font-medium'>Bookmarks</li>
          </a>
        </ActiveLink>
        <ActiveLink href='/projects' passHref activeClassName='active-class'>
          <a className='hover:text-gray-800'>
            <li className='sm:px-6 font-medium'>Projects</li>
          </a>
        </ActiveLink>
        <ActiveLink href='/books' passHref activeClassName='active-class'>
          <a className='hover:text-gray-800'>
            <li className='sm:px-6 font-medium'>Books</li>
          </a>
        </ActiveLink>
        <ActiveLink href='/uses' passHref activeClassName='active-class'>
          <a className='hover:text-gray-800'>
            <li className='sm:px-6 font-medium'>uses</li>
          </a>
        </ActiveLink>
      </ul>

      <a
        className='hidden sm:flex items-center space-x-3 text-gray-600 '
        href='mailto:me@felixyeboah.dev?subject=Contacting you about a project!"'
      >
        <HiMail className='mr-2' />
        Send me an email
      </a>
    </nav>
  );
};

export default NavbarLight;
