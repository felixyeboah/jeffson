import React from "react";
import moment from "moment";
import Link from "next/link";
import { imageBuilder } from "../lib/sanity";

const BlogCard = ({ post }) => {
  const image = imageBuilder.image(post?.coverImage).url();

  return (
    <Link href={`/blog/${post?.slug}`} passHref>
      <a className="block sm:h-98 overflow-hidden">
        <div className="block">
          <div className="sm:col-span-4">
            <img
              className="rounded-xl h-48 sm:h-64 w-full object-cover"
              src={image}
              alt={post.title}
            />
          </div>
          <div className="sm:mt-3">
            <p className="text-xs sm:text-sm text-gray-500">
              {moment(post.date).format("LL")}
            </p>
            <h3 className="text-2xl sm:text-3xl mt-3 font-bold">
              {post.title}
            </h3>
            <p className="text-gray-600 mt-5 text-sm sm:text-md line-clamp-3">
              {post.excerpt}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BlogCard;
