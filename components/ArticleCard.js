import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import { imageBuilder } from "../lib/sanity";

const ArticleCard = ({ bookmark }) => {
  const image = imageBuilder.image(bookmark?.coverImage).url();
  return (
    <a href={bookmark.url} rel="noreferrer" target="_blank">
      <div className="bg-cardBg hover:bg-cardBgHover sm:p-6 rounded-md sm:h-64 overflow-hidden relative">
        <h2 className="text-2xl font-bold sm:mb-3">{bookmark.title}</h2>
        <div className="max-h-12 overflow-hidden text-gray-400">
          <BlockContent
            blocks={bookmark?.body}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            dataset="production"
          />
        </div>
        <div className="absolute bottom-6">
          <div className="flex items-center">
            <div>
              <img
                className="w-8 h-8 rounded-full object-cover"
                src={image}
                alt={bookmark.title}
              />
            </div>
            <div className="ml-2 text-sm text-gray-500">{bookmark.name}</div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ArticleCard;
