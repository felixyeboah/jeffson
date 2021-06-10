import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ActiveLink from "@components/ActiveLink";

const Navbar = ({ onOpen }) => {
  const { pathname } = useRouter();

  return (
    <nav className="flex items-center justify-between px-6 sm:px-10 absolute w-full text-gray-300 py-10 z-40">
      {pathname !== "/books" ? (
        <Link href="/" passHref>
          <a>
            <div className="font-black w-14 h-14 rounded-full bg-gradient-to-tr to-yellow-400 via-red-500 from-pink-500 flex items-center justify-center text-2xl">
              FY
            </div>
          </a>
        </Link>
      ) : (
        <ActiveLink href="/" passHref>
          <a>
            <div className="font-bold w-14 h-14 rounded-full bg-bgBlack text-gray-300 flex items-center justify-center text-2xl">
              FY
            </div>
          </a>
        </ActiveLink>
      )}

      <button className="block sm:hidden" onClick={onOpen}>
        <img src="/humberger.svg" alt="Humberger" />
      </button>

      <ul className="flex items-center uppercase text-sm text-gray-400 hidden sm:flex">
        <ActiveLink href="/" passHref activeClassName="active-link">
          <a className="hover:text-gray-100">
            <li className="sm:px-6 font-medium">Home</li>
          </a>
        </ActiveLink>
        <ActiveLink href="/blog" passHref activeClassName="active-link">
          <a className="hover:text-gray-100">
            <li className="sm:px-6 font-medium">Blog</li>
          </a>
        </ActiveLink>
        <ActiveLink href="/bookmarks" passHref activeClassName="active-link">
          <a className="hover:text-gray-100">
            <li className="sm:px-6 font-medium">Bookmarks</li>
          </a>
        </ActiveLink>
        <ActiveLink href="/projects" passHref activeClassName="active-link">
          <a className="hover:text-gray-100">
            <li className="sm:px-6 font-medium">Projects</li>
          </a>
        </ActiveLink>
        <ActiveLink href="/books" passHref activeClassName="active-link">
          <a className="hover:text-gray-100">
            <li className="sm:px-6 font-medium">Books</li>
          </a>
        </ActiveLink>
        <ActiveLink href="/uses" passHref activeClassName="active-link">
          <a className="hover:text-gray-100">
            <li className="sm:px-6 font-medium">uses</li>
          </a>
        </ActiveLink>
      </ul>
    </nav>
  );
};

export default Navbar;
