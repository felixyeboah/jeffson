import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const ScrollToTop = ({ showScroll, scrollTop }) => {
  return (
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
  );
};

export default ScrollToTop;
