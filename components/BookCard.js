import React from "react";
import { imageBuilder } from "../lib/sanity";
import BlockContent from "@sanity/block-content-to-react";

const BookCard = ({ book }) => {
  const image = imageBuilder.image(book?.coverImage).url();

  return (
    <a href={book.url} target="_blank" rel="noreferrer">
      <div>
        <div className="flex items-center justify-end relative w-full">
          <div className="w-3/5 sm:w-full relative z-30 mr-2 sm:mr-0">
            <h4 className="font-serif font-bold sm:text-2xl">{book.title}</h4>
            <p className="text-sm text-gray-500">{book.name}</p>
            <div className="text-sm text-gray-500 max-h-28 overflow-hidden mt-2 block sm:hidden">
              <BlockContent
                blocks={book?.body}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                dataset="production"
              />
            </div>
          </div>
          <div className="h-56">
            <img
              className="w-full h-full object-scale-down"
              src={image}
              alt={book.title}
            />
          </div>
        </div>
        <div className="text-sm text-gray-500 max-h-16 overflow-hidden mt-2 hidden sm:block">
          <BlockContent
            blocks={book?.body}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            dataset="production"
          />
        </div>
      </div>
    </a>
  );
};

export default BookCard;
