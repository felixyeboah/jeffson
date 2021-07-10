import React from "react";
import { imageBuilder } from "lib/sanity";
import {
  getAllPostsForHome,
  getAllPostsWithSlug,
  getPostAndMorePosts,
} from "lib/api";
import BlockContent from "@sanity/block-content-to-react";
import { NextSeo } from "next-seo";
import moment from "moment";
import DarkBlockCard from "@components/DarkBlockCard";

const Blog = ({ post, posts }) => {
  const image = imageBuilder.image(post?.coverImage).url();

  const filteredPost = posts?.filter((item) => item._id !== post._id);
  console.log("more posts", filteredPost);

  return (
    <>
      <NextSeo
        title={post?.title}
        description={post?.excerpt}
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://jeffson.dev",
          title: post?.title,
          description: post?.excerpt,
          images: [
            {
              url: image,
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
          ],
          site_name: "SiteName",
        }}
        twitter={{
          handle: "@jaeyholic",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />

      <div className="bg-blogBg">
        <div className="pt-40 sm:pt-56 pb-32 sm:pb-40 px-4 sm:px-72 min-h-screen">
          <div className="grid sm:grid-cols-2 gap-10">
            <div>
              <h2 className="text-6xl sm:text-8xl font-bold">{post?.title}</h2>
              <div className="flex items-center mt-6">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-tr from-purple-500 via-red-500 to-pink-500 rounded-full">
                  <img
                    className="rounded-full w-14 h-14 object-cover border"
                    src={post?.author?.avatar}
                    alt={post?.author?.name}
                  />
                </div>
                <div className="ml-4">
                  <p className="font-bold sm:text-lg">{post?.author?.name}</p>
                  <p className="text-gray-500 text-sm">
                    {moment(post?.date).format("LL")}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <img className="rounded-lg" src={image} alt={post?.title} />
            </div>
          </div>

          <div>
            <div className="prose prose-md sm:prose-lg mt-20 mx-auto">
              <BlockContent
                blocks={post?.body}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                dataset="production"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-gray-200 pt-20 sm:pt-32 px-4 sm:px-80">
          <div>
            <h2 className="font-bold mb-10 sm:mb-16 text-3xl sm:text-5xl">
              More Posts
            </h2>

            <div className="grid sm:grid-cols-3 sm:gap-10">
              {filteredPost.map((post) => (
                <DarkBlockCard key={post._id} post={post} />
              ))}
            </div>
          </div>
          <footer className="w-full pt-6 sm:pt-32 pb-5 sm:pb-10 text-gray-200">
            <p className="flex items-center">
              &copy; {new Date().getFullYear()}. Felix Yeboah{" "}
              <span className="text-3xl px-2">&middot;</span> All rights
              reserved.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  const posts = await getAllPostsForHome(preview);
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
      posts,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  };
}

export default Blog;
