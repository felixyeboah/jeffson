import React from 'react';
import { getAllPostsForHome } from '../../lib/api';
import FeaturedBlogCard from '@components/FeaturedBlogCard';
import { NextSeo } from 'next-seo';
import PostCard from '@components/PostCard';

const Index = ({ allPosts }) => {
  return (
    <>
      <NextSeo
        title='The Index | Felix Yeboah'
        description='All the posts '
        canonical='https://www.canonical.ie/'
        openGraph={{
          url: 'https://jeffson.dev/bookmarks',
          title: 'The Index | Felix Yeboah',
          description: 'Bookmarks of my daily activities on the web.',
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
      <div className='blog-background bg-blogBg'>
        <div className='py-40 sm:py-24 sm:px-40 min-h-screen '>
          <div className='sm:flex items-center justify-center mx-auto px-6 sm:px-0 sm:pt-28'>
            <div className='sm:w-2/5 space-y-4 text-center'>
              <h4 className='text-3xl sm:text-6xl font-extrabold text-gray-800'>
                Find the latest of my writing here.
              </h4>
              <p className='text-md sm:text-xl font-semibold text-slate-600'>
                I write about travel, life and everything tech.
              </p>
              <div className='sm:pt-10'>
                <input
                  type='text'
                  className='px-6 h-16 rounded-full w-full font-medium bg-slate-500 placeholder:text-gray-100 focus:outline-none focus:outline-gray-500 placeholder:text-lg text-gray-100'
                  placeholder='search for an article'
                />
              </div>
            </div>
          </div>

          <div className='pt-36 sm:pt-48 px-4 sm:px-32'>
            {allPosts.slice(0, 1).map((post) => (
              <FeaturedBlogCard key={post._id} post={post} />
            ))}
          </div>

          <div className='grid sm:grid-cols-3 gap-12 sm:gap-8 mt-14 sm:mt-20 px-4 sm:px-32'>
            {allPosts.map((post) => (
              <PostCard key={post._id} post={post} variant='blog' />
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
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
  };
}

export default Index;
