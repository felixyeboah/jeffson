import 'styles/globals.css';
import Navbar from '@components/Navbar';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import NavbarLight from '@components/NavbarLight';
import MobileMenu from '@components/MobileMenu';
import {HiMail} from "react-icons/hi";
import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
import { init } from 'lib/ga';

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const [showScroll, setShowScroll] = React.useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset < 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
  }, []);

  React.useEffect(() => {
    init(process.env.NEXT_PUBLIC_G);
  }, []);

  return (
    <div className='antialiased font-sans relative'>
      {pathname === '/blog' ||
      pathname === '/books' ||
      pathname === '/blog/[slug]' ? (
        <NavbarLight onOpen={onOpen} />
      ) : (
        <Navbar onOpen={onOpen} />
      )}
      <AnimatePresence>
        {isOpen && <MobileMenu onClose={onClose} />}
      </AnimatePresence>

      <main className="relative">
        <Component {...pageProps} />

        <ul className="fixed left-12 bottom-0 flex items-center justify-center flex-col text-white sm:text-2xl hidden md:block">
          <a href='mailto:me@felixyeboah.dev' target='_blank' className="block"><li className="mb-6"><HiMail /></li></a>
          <a href='https://github.com/jaeyholic' target='_blank' className="block"><li className="mb-6"><FaGithub /></li></a>
          <a
              href='https://www.linkedin.com/in/felixyeboahjefferson/'
              target='_blank' className="block"
          ><li className="mb-6"><FaLinkedin /></li></a>
          <a
              href='https://twitter.com/sudocode_'
              target='_blank' className="block"
          ><li className="mb-6"><FaTwitter /></li></a>
          <li className="border-l h-16 ml-2" />
        </ul>


        <AnimatePresence>
          {showScroll && (
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ...transition },
              }}
              exit={{
                opacity: 0,
                y: 200,
                transition: { duration: 0.6, ...transition },
              }}
              className='fixed bottom-6 right-4'
            >
              <button onClick={scrollTop}>
                <img src='/backtotop.svg' alt='Back to top' />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default MyApp;
