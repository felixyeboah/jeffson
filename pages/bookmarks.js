import React from 'react';
import {
  getAllPostsForBookmark,
  getAllPostsForInspirations,
  getAllPostsForPodcasts,
  getAllPostsForVideos,
  getAllPostsForWebsites,
} from '../lib/api';
import SubNav from '@components/SubNav';
import useSticky from 'hooks/useSticky';
import { NextSeo } from 'next-seo';
import BookmarkSection from '@components/sections/BookmarkSection';
import InspirationsSection from '@components/sections/InspirationsSection';
import InsirationalWebsites from '@components/sections/InsirationalWebsites';
import AllVideosSection from '@components/sections/AllVideosSection';
import PodcastsSection from '@components/sections/PodcastsSection';

const Bookmarks = ({
  allBookmarks,
  allInspirations,
  allWebsites,
  allVideos,
  allPodcasts,
}) => {
  const { isSticky, element } = useSticky();

  return (
    <>
      <NextSeo
        title='Bookmarks | Felix Yeboah'
        description='Bookmarks of my daily activities on the web.'
        canonical='https://www.canonical.ie/'
        openGraph={{
          url: 'https://jeffson.dev/bookmarks',
          title: 'Bookmarks | Felix Yeboah',
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
      <div className='bookmark-background text-gray-300'>
        <div className='  px-4 sm:px-32 py-36 sm:py-48 relative'>
          <div className='sm:px-32'>
            <h1 className='text-5xl sm:text-10xl font-black'>Bookmarks</h1>

            <SubNav element={element} isSticky={isSticky} />

            <BookmarkSection allBookmarks={allBookmarks} />

            <InspirationsSection allInspirations={allInspirations} />

            <InsirationalWebsites allWebsites={allWebsites} />

            <AllVideosSection allVideos={allVideos} />

            <PodcastsSection allPodcasts={allPodcasts} />
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
  const allBookmarks = await getAllPostsForBookmark(preview);
  const allInspirations = await getAllPostsForInspirations(preview);
  const allWebsites = await getAllPostsForWebsites(preview);
  const allVideos = await getAllPostsForVideos(preview);
  const allPodcasts = await getAllPostsForPodcasts(preview);
  return {
    props: {
      allBookmarks,
      allInspirations,
      allWebsites,
      allVideos,
      allPodcasts,
      preview,
    },
  };
}

export default Bookmarks;
