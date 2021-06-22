import React from 'react';
import { NextSeo } from 'next-seo';
import { getAllPostsForBooks } from '../lib/api';
import BookCard from '@components/BookCard';

const Books = ({ allBooks }) => {
  return (
    <>
      <NextSeo
        title='The Books | Felix Yeboah'
        description='My favorite books and books that helped me in my development journey'
        canonical='https://www.canonical.ie/'
        openGraph={{
          url: 'https://jeffson.dev/books',
          title: 'The Books | Felix Yeboah',
          description:
            'My favorite books and books that helped me in my development journey',
          images: [
            {
              url: 'https://i.imgur.com/JiEadoT.png',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
          ],
          site_name: 'jeffson.dev',
        }}
        twitter={{
          handle: '@jaeyholic',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <div className='bg-booksBg'>
        <div className='py-32 min-h-screen px-4 sm:px-72'>
          <div className='bg-booksCardBg sm:min-h-96 px-4 sm:px-16 py-10 sm:py-20 mx-auto rounded-lg'>
            <div className='flex items-center justify-center relative'>
              <div className='hidden sm:block sm:absolute -right-20'>
                <img className='h-32' src='/ornaments.svg' alt='ornaments' />
              </div>
              <div>
                <img
                  className='h-24 sm:h-full'
                  src='/booksillustration.svg'
                  alt='booksillustration'
                />
              </div>
              <div>
                <h2 className='font-serif font-bold text-5xl sm:text-8xl'>
                  The Books
                </h2>
              </div>
            </div>
            <div className='sm:px-56 text-center pt-6 text-gray-600 text-sm sm:text-md'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consectetur cum ex fuga in libero nobis praesentium temporibus
                vero? Modi, recusandae!
              </p>
            </div>
          </div>

          <div className='grid sm:grid-cols-3 gap-10 mt-10 sm:mt-0 sm:-mt-10 sm:px-16 px-6'>
            {allBooks.map((book) => (
              <BookCard key={book._id} book={book} />
            ))}
          </div>
        </div>

        <footer className='w-full pt-6 sm:pt-28 pb-5 sm:pb-10 px-4 sm:px-72'>
          <p className='flex items-center'>
            &copy; {new Date().getFullYear()}. Felix Yeboah{' '}
            <span className='text-3xl px-2'>&middot;</span> All rights reserved.
          </p>
        </footer>
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
