import "styles/globals.css";
import Navbar from "@components/Navbar";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import NavbarLight from "@components/NavbarLight";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const [showScroll, setShowScroll] = React.useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset < 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <div className="antialiased font-sans relative">
      {pathname === "/blog" ||
      pathname === "/books" ||
      pathname === "/blog/[slug]" ? (
        <NavbarLight />
      ) : (
        <Navbar />
      )}
      <main>
        <Component {...pageProps} />

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
              className="fixed bottom-6 right-4"
            >
              <button onClick={scrollTop}>
                <img src="/backtotop.svg" alt="Back to top" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default MyApp;
