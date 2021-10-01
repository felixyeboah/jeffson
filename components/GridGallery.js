import React from "react";
import Image from "next/image";

const GridGallery = () => {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
        <div className="sm:h-100 bg-gray-100 sm:col-span-4 p-6 bg-bgLight rounded-sm">
          <div className="block sm:hidden">
            <Image
              src="/images/homepage.png"
              alt="complete farmer website"
              width={155}
              height={249}
              layout="responsive"
              className="rounded-md"
            />
          </div>

          <div className="hidden sm:block">
            <Image
              src="/images/cf-website.png"
              alt="complete farmer website"
              width={711}
              height={450}
              layout="responsive"
              className="rounded-md"
            />
          </div>
        </div>
        <div className="grid sm:col-span-2 gap-2">
          <div className="bg-bgLight rounded-sm p-2">
            <img
              className="h-full w-full object-scale-down rounded-md"
              src="/images/curatedbyculture.jpg"
              alt=""
            />
          </div>
          <div className="bg-bgLight rounded-sm p-2">
            <img
              className="h-full w-full object-scale-down rounded-md"
              src="/images/eae.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 mt-2">
        <div className="grid sm:col-span-2 gap-2">
          <div className="bg-bgLight rounded-sm p-2">
            <img
              className="h-full w-full object-scale-down rounded-md"
              src="/images/xparf.png"
              alt=""
            />
          </div>
          <div className="bg-bgLight rounded-sm p-2">
            <img
              className="h-full w-full object-scale-down rounded-md"
              src="/images/number12.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="sm:h-100 bg-gray-100 sm:col-span-4 p-6 bg-bgLight rounded-sm">
          <div className="hidden sm:block">
            <Image
              src="/images/digifarmer.jpg"
              alt="digital farmer Dashboard"
              width={711}
              height={450}
              layout="responsive"
              className="rounded-md"
            />
          </div>

          <div className="block sm:hidden">
            <Image
              src="/images/dashboard.png"
              alt="complete farmer website"
              width={155}
              height={249}
              layout="responsive"
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GridGallery;
