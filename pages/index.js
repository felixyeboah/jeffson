import { getAllPostsForHome } from "lib/api";
import GridGallery from "@components/GridGallery";
import moment from "moment";
import { NextSeo } from "next-seo";

export default function Home({ allPosts }) {
  return (
    <div className="bg-bgBlack min-h-screen text-gray-100 home-background sm:pt-56">
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
              url: "https://i.imgur.com/oBTjOr0.png",
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

      <header className="text-9xl font-bold tracking-tighter sm:px-80">
        <h1>A Software Developer &amp;</h1>
        <h1>A Design Minded</h1>
      </header>

      <main className="sm:px-72 sm:py-24">
        <GridGallery />
        <div className="sm:mt-40 sm:mb-28">
          <div className="grid grid-cols-2 gap-14">
            <div>
              <h2 className="text-8xl text-white font-bold">
                I build beautiful interfaces &amp; experiences
              </h2>
            </div>

            <div className="text-gray-400">
              <h4 className="sm:text-3xl text-white font-black">Who am I?</h4>
              <p className="sm:py-4 sm:text-lg">
                A self-taught Software Developer and UI/UX Designer from Accra,
                Ghana. I write code to solve problems. I am super passionate
                about design, development, traveling, and a fanatic of all
                things digital.
              </p>
              <p className="sm:py-4 sm:text-lg">
                I have been very fortunate to be able to do all as a career. I
                consider myself a learner, a life-long learner.
              </p>
              <p className="sm:py-4 sm:text-lg">
                I like to turn great designs into meaningful and intuitive
                interfaces that are simple and easy to use and can improve
                people's lives.
              </p>
              <p className="sm:py-4 sm:text-lg">
                I feel honored to have worked with extraordinary people,
                startups, and companies that helped to improve not only my
                skills but also my life.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 w-full" />

        <div className="sm:my-20">
          <h4 className="sm:text-4xl sm:mb-16">Recent Posts</h4>

          <div className="grid grid-cols-3 gap-10">
            {allPosts.map((post) => (
              <div key={post._id}>
                <div className="h-56">
                  <img
                    className="h-full w-full object-cover"
                    src={post.coverImage}
                    alt={post.title}
                  />
                  <div className="mt-4">
                    <p className="text-gray-400 text-sm">
                      {moment(post.date).format("LL")}
                    </p>
                    <h5 className="sm:text-3xl mt-2 text-gray-300">
                      {post.title}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
  };
}
