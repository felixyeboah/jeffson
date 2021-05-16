import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ActiveLink from "@components/ActiveLink";

const NavbarLight = () => {
  const { pathname } = useRouter();

  return (
    <nav className="flex items-center justify-between sm:px-10 absolute w-full text-gray-300 py-10 z-40">
      {pathname !== "/books" ? (
        <Link href="/" passHref>
          <a>
            <div className="font-black w-14 h-14 rounded-full bg-gradient-to-tr to-yellow-400 via-red-500 from-pink-500 flex items-center justify-center text-2xl">
              J
            </div>
          </a>
        </Link>
      ) : (
        <Link href="/" passHref>
          <a>
            <div className="font-bold w-14 h-14 rounded-full bg-bgBlack text-gray-300 flex items-center justify-center text-2xl">
              J
            </div>
          </a>
        </Link>
      )}
      <ul className="flex items-center uppercase text-sm text-gray-600">
        <ActiveLink href="/" passHref activeClassName="active-class">
          <a className="hover:text-gray-800">
            <li className="sm:px-6 font-medium">Home</li>
          </a>
        </ActiveLink>
        <ActiveLink href="/blog" passHref activeClassName="active-class">
          <a className="hover:text-gray-800">
            <li className="sm:px-6 font-medium">Blog</li>
          </a>
        </ActiveLink>
        <ActiveLink href="/bookmarks" passHref activeClassName="active-class">
          <a className="hover:text-gray-800">
            <li className="sm:px-6 font-medium">Bookmarks</li>
          </a>
        </ActiveLink>
        <ActiveLink href="/projects" passHref activeClassName="active-class">
          <a className="hover:text-gray-800">
            <li className="sm:px-6 font-medium">Projects</li>
          </a>
        </ActiveLink>
        <ActiveLink href="/books" passHref activeClassName="active-class">
          <a className="hover:text-gray-800">
            <li className="sm:px-6 font-medium">Books</li>
          </a>
        </ActiveLink>
        <ActiveLink href="/uses" passHref activeClassName="active-class">
          <a className="hover:text-gray-800">
            <li className="sm:px-6 font-medium">uses</li>
          </a>
        </ActiveLink>
      </ul>
    </nav>
  );
};

export default NavbarLight;
