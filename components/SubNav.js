import React from "react";
import { Link } from "react-scroll";

const SubNav = ({ isSticky, element }) => {
  return (
    <ul
      ref={element}
      className={`flex uppercase py-6 text-gray-500 ${
        isSticky
          ? "fixed top-0 z-30 w-full bg-darkBlue left-0 sm:px-64"
          : "relative"
      }`}
    >
      <li className="sm:pr-6 cursor-pointer group relative">
        <Link activeClass="active" to="articles" spy={true} smooth={true}>
          Articles
        </Link>
      </li>

      <li className="sm:px-6 cursor-pointer relative group">
        <Link activeClass="active" to="inspirations" spy={true} smooth={true}>
          Inspirationers
        </Link>
      </li>

      <li className="sm:px-6 cursor-pointer relative group">
        <Link activeClass="active" to="websites" spy={true} smooth={true}>
          Websites
        </Link>
      </li>

      <li className="sm:px-6 cursor-pointer relative group">
        <Link activeClass="active" to="videos" spy={true} smooth={true}>
          Videos
        </Link>
      </li>

      <li className="sm:px-6 cursor-pointer relative group">
        <Link activeClass="active" to="podcasts" spy={true} smooth={true}>
          Podcasts
        </Link>
      </li>
    </ul>
  );
};

export default SubNav;
