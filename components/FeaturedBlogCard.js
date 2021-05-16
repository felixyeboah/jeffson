import React from "react";
import { imageBuilder } from "../lib/sanity";
import moment from "moment";
import Link from "next/link";

const FeaturedBlogCard = ({ post }) => {
  const image = imageBuilder.image(post?.coverImage).url();

  return (
    <Link href={`/blog/${post?.slug}`} passHref>
      <a>
        <div className="grid grid-cols-6 gap-12">
          <div className="col-span-4">
            <img className="rounded-xl" src={image} alt={post.title} />
          </div>
          <div className="col-span-2">
            <p className="text-sm text-gray-500">
              {moment(post.date).format("LL")}
            </p>
            <h3 className="sm:text-6xl mt-6 font-bold">{post.title}</h3>
            <p className="text-gray-600 mt-10">{post.excerpt}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default FeaturedBlogCard;
