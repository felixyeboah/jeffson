import React from "react";
import { getAllPostsForHome } from "../../lib/api";
import FeaturedBlogCard from "@components/FeaturedBlogCard";
import { NextSeo } from "next-seo";

const Index = ({ allPosts }) => {
  return (
    <>
      <NextSeo
        title="The Index | Felix Yeboah"
        description="All the posts "
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://jeffson.dev/bookmarks",
          title: "The Index | Felix Yeboah",
          description: "Bookmarks of my daily activities on the web.",
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
      <div className="blog-background sm:py-40 sm:px-56 min-h-screen bg-blogBg">
        <div className="text-center border-b border-black w-4/5 overflow-hidden mx-auto">
          <h2 className="font-black sm:text-12xl uppercase">The Index</h2>
        </div>

        <div className="sm:pt-20 sm:px-32">
          {allPosts
            .filter((e) => e.category === "featured")
            .map((post) => (
              <FeaturedBlogCard key={post._id} post={post} />
            ))}
        </div>
      </div>
    </>
  );
};

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
  };
}

export default Index;
