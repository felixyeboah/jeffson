import { getAllPostsForHome } from "lib/api";
import GridGallery from "@components/GridGallery";
import moment from "moment";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function Home({ allPosts }) {
  return (
    <>
      <NextSeo
        title="Felix Yeboah"
        description="A self-taught Software Developer & Design-Minded, focused on building beautiful interfaces & experiences."
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://jeffson.dev",
          title: "Felix Yeboah",
          description:
            "A self-taught Software Developer & Design-Minded, focused on building beautiful interfaces & experiences.",
          images: [
            {
              url: "https://i.imgur.com/JiEadoT.png",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
          ],
          site_name: "jeffson.dev",
        }}
        twitter={{
          handle: "@jaeyholic",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <div className="bg-bgBlack min-h-screen text-gray-100 home-background pt-40 sm:pt-56">
        <header className="sm:text-9xl font-bold tracking-tighter px-10 sm:px-80 hidden sm:block">
          <h1>A Software Developer &amp;</h1>
          <h1>Design Minded</h1>
        </header>

        <header className="text-6xl font-bold tracking-tighter px-10 sm:px-80 block sm:hidden">
          <h1>A Software Developer &amp; Design Minded</h1>
        </header>

        <main className="sm:px-72 py-20 sm:py-24">
          <GridGallery />
          <div className="mt-20 sm:mt-40 sm:mb-28 px-4 sm:px-0">
            <div className="grid sm:grid-cols-2 gap-14">
              <div>
                <h2 className="text-5xl sm:text-8xl text-white font-bold">
                  I build beautiful interfaces &amp; experiences
                </h2>
              </div>

              <div className="text-gray-400">
                <h4 className="text-2xl sm:text-3xl text-white font-black mb-2 sm:mb-0">
                  Who am I?
                </h4>
                <p className="py-2 sm:py-4 sm:text-lg">
                  A self-taught Software Developer and UI/UX Designer from
                  Accra, Ghana. I write code to solve problems. I am super
                  passionate about design, development, traveling, and a fanatic
                  of all things digital.
                </p>
                <p className="py-2 sm:py-4 sm:text-lg">
                  I have been very fortunate to be able to do all as a career. I
                  consider myself a learner, a life-long learner.
                </p>
                <p className="py-2 sm:py-4 sm:text-lg">
                  I like to turn great designs into meaningful and intuitive
                  interfaces that are simple and easy to use and can improve
                  people's lives.
                </p>
                <p className="py-2 sm:py-4 sm:text-lg">
                  I feel honored to have worked with extraordinary people,
                  startups, and companies that helped to improve not only my
                  skills but also my life.
                </p>
                <div className="flex items-center flex-wrap mt-4 text-2xl block md:hidden">
                  <a href="mailto:me@felixyeboah.dev" target="_blank">
                    <HiMail className="mr-6" />
                  </a>
                  <a href="https://github.com/jaeyholic" target="_blank">
                    <FaGithub className="mr-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/felixyeboahjefferson/"
                    target="_blank"
                  >
                    <FaLinkedin className="mr-6" />
                  </a>
                  <a href="https://twitter.com/sudocode_" target="_blank">
                    <FaTwitter className="mr-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 w-full my-16 sm:my-0" />

          <div className="mb-16 sm:mb-0 sm:my-20 px-4 sm:px-0">
            <h4 className="text-2xl sm:text-4xl mb-10 sm:mb-16">
              Recent Posts
            </h4>

            <div className="grid sm:grid-cols-3 gap-32 sm:gap-10">
              {allPosts.slice(0, 3).map((post) => (
                <Link href={`/blog/${post.slug}`} passHref>
                  <a>
                    <div key={post._id}>
                      <div className="h-56">
                        <img
                          className="h-full w-full object-cover rounded-md"
                          src={post.coverImage}
                          alt={post.title}
                        />
                        <div className="mt-4">
                          <p className="text-gray-400 text-xs sm:text-sm">
                            {moment(post.date).format("LL")}
                          </p>
                          <h5 className="text-xl sm:text-3xl mt-2 text-gray-300">
                            {post.title}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </main>

        <footer className="w-full pt-6 sm:pt-28 pb-5 sm:pb-10 px-4 sm:px-72">
          <p className="flex items-center">
            &copy; {new Date().getFullYear()}. Felix Yeboah{" "}
            <span className="text-3xl px-2">&middot;</span> All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
  };
}
