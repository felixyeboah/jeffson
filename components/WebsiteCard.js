import React from "react";
import { imageBuilder } from "../lib/sanity";

const WebsiteCard = ({ item }) => {
  const image = imageBuilder.image(item?.coverImage).url();

  return (
    <a href={item.url} target="_blank" rel="noreferrer">
      <div className="bg-cardBg hover:bg-cardBgHover h-80 sm:h-72 relative rounded-md">
        <img
          className="rounded-tr-md rounded-tl-md"
          src={image}
          alt={item.name}
        />
        <div className="p-3">
          <h4 className="font-medium">{item.title}</h4>
          <p className="text-sm text-gray-500 absolute bottom-4">{item.name}</p>
        </div>
      </div>
    </a>
  );
};

export default WebsiteCard;
