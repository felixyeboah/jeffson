import React from "react";
import { NextSeo } from "next-seo";
import { getAllPostsForBooks } from "../lib/api";
import BookCard from "@components/BookCard";

const Books = ({ allBooks }) => {
  return (
    <>
      <NextSeo
        title="The Books | Felix Yeboah"
        description="My favorite books and books that helped me in my development journey"
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://jeffson.dev/books",
          title: "The Books | Felix Yeboah",
          description:
            "My favorite books and books that helped me in my development journey",
          images: [
            {
              url: "https://i.imgur.com/oBTjOr0.png",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
          ],
          site_name: "jeffson.dev",
        }}
        twitter={{
          handle: "@jaeyholic",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <div className="bg-booksBg sm:py-32 min-h-screen sm:px-72">
        <div className="bg-booksCardBg min-h-96 sm:px-16 sm:py-20 mx-auto rounded-lg">
          <div className="flex items-center justify-center relative">
            <div className="absolute -right-20">
              <img className="h-32" src="/ornaments.svg" alt="ornaments" />
            </div>
            <div>
              <img src="/booksillustration.svg" alt="booksillustration" />
            </div>
            <div>
              <h2 className="font-serif font-bold sm:text-8xl">The Books</h2>
            </div>
          </div>
          <div className="sm:px-56 text-center sm:pt-6 text-gray-600">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur cum ex fuga in libero nobis praesentium temporibus
              vero? Modi, recusandae!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-10 sm:-mt-10 sm:px-16">
          {allBooks.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      </div>
    </>
  );
};

export async function getStaticProps({ preview = false }) {
  const allBooks = await getAllPostsForBooks(preview);
  return {
    props: {
      allBooks,
      preview,
    },
  };
}

export default Books;
