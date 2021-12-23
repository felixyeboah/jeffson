import 'styles/globals.css';
import Navbar from '@components/Navbar';
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import NavbarLight from '@components/NavbarLight';
import MobileMenu from '@components/MobileMenu';
import { init } from 'lib/ga';
import { Provider } from '@lyket/react';
import SocialLinks from '@components/SocialLinks';
import ScrollToTop from '@components/ScrollToTop';

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
    <Provider
      apiKey='pt_b6b86192cdd7b181ac51dab7eac556'
      theme={{
        colors: {
          background: '#b8fff3',
          text: 'violet',
          primary: 'rgba(255, 224, 138, 0.4)',
        },
      }}
    >
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

        <main className='relative'>
          <AnimatePresence initial={false} exitBeforeEnter>
            <Component {...pageProps} />
          </AnimatePresence>

          <SocialLinks />
          <ScrollToTop scrollTop={scrollTop} showScroll={showScroll} />
        </main>
      </div>
    </Provider>
  );
}

export default MyApp;
