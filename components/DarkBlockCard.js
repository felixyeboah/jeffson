import React from "react";
import { imageBuilder } from "../lib/sanity";
import Link from "next/link";
import moment from "moment";

const DarkBlockCard = ({ post }) => {
  const image = imageBuilder.image(post?.coverImage).url();

  return (
    <Link href={`/blog/${post?.slug}`} passHref>
      <a>
        <div className="block">
          <div className="sm:col-span-4">
            <img
              className="rounded-xl h-48 sm:h-64 w-full object-cover"
              src={image}
              alt={post.title}
            />
          </div>
          <div className="mt-3 text-white">
            <p className="text-xs sm:text-sm text-gray-400">
              {moment(post.date).format("LL")}
            </p>
            <h3 className="text-2xl sm:text-3xl mt-3 font-bold">
              {post.title}
            </h3>
            <p className="text-gray-300 mt-5 text-sm sm:text-md line-clamp-3">
              {post.excerpt}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default DarkBlockCard;
