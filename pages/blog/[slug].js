import React from "react";
import { imageBuilder } from "lib/sanity";
import { getAllPostsWithSlug, getPostAndMorePosts } from "lib/api";
import BlockContent from "@sanity/block-content-to-react";
import { NextSeo } from "next-seo";
import moment from "moment";

const Blog = ({ post }) => {
  const image = imageBuilder.image(post?.coverImage).url();
  console.log("post", post);
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

      <div className="sm:pt-56 sm:pb-40 sm:px-72 bg-blogBg min-h-screen">
        <div className="grid grid-cols-2 gap-10">
          <div>
            <h2 className="sm:text-8xl font-bold">{post.title}</h2>
            <div className="flex items-center mt-6">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-tr from-purple-500 via-red-500 to-pink-500 rounded-full">
                <img
                  className="rounded-full w-14 h-14 object-cover border"
                  src={post.author.avatar}
                  alt={post.author.name}
                />
              </div>
              <div className="ml-4">
                <p className="font-bold sm:text-lg">{post.author.name}</p>
                <p className="text-gray-500 text-sm">
                  {moment(post.date).format("LL")}
                </p>
              </div>
            </div>
          </div>

          <div>
            <img className="rounded-lg" src={image} alt={post.title} />
          </div>
        </div>

        <div>
          <div className="prose prose-lg mt-20 mx-auto">
            <BlockContent
              blocks={post?.body}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              dataset="production"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
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
