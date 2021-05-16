import React from "react";

const GridGallery = () => {
  return (
    <>
      <div className="grid grid-cols-6 gap-2">
        <div className="h-100 bg-gray-100 col-span-4 p-6 bg-bgLight rounded-sm">
          <img
            className="h-full w-full object-scale-down"
            src="/images/cf-website.png"
            alt="complete farmer website"
          />
        </div>
        <div className="grid col-span-2 gap-2">
          <div className="bg-bgLight rounded-sm p-2">
            <img
              className="h-full w-full object-scale-down"
              src="/images/eae.jpg"
              alt=""
            />
          </div>
          <div className="bg-bgLight rounded-sm p-2">
            <img
              className="h-full w-full object-scale-down"
              src="/images/xparf.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-2 mt-2">
        <div className="grid col-span-2 gap-2">
          <div className="bg-bgLight rounded-sm p-2">
            <img
              className="h-full w-full object-scale-down"
              src="/images/ntetsia.png"
              alt=""
            />
          </div>
          <div className="bg-bgLight rounded-sm p-2">
            <img
              className="h-full w-full object-scale-down"
              src="/images/number12.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="h-100 bg-gray-100 col-span-4 p-6 bg-bgLight rounded-sm">
          <img
            className="h-full w-full object-scale-down"
            src="/images/digifarmer.png"
            alt="complete farmer website"
          />
        </div>
      </div>
    </>
  );
};

export default GridGallery;
