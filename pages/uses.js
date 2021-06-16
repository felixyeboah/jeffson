import React from 'react';
import { getAllPostsForUses } from '../lib/api';
import { NextSeo } from 'next-seo';

const Uses = ({ allUses }) => {
  return (
    <>
      <NextSeo
        title='Uses | Felix Yeboah'
        description="I don't get asked about my work environment so often, but just in case if you want to know, here are the tools, devices and services I use to get things done."
        canonical='https://www.canonical.ie/'
        openGraph={{
          url: 'https://jeffson.dev/uses',
          title: 'Uses | Felix Yeboah',
          description:
            "I don't get asked about my work environment so often, but just in case if you want to know, here are the tools, devices and services I use to get things done.",
          images: [
            {
              url: 'https://i.imgur.com/oBTjOr0.png',
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
      <div className='bg-gray-800 text-gray-400'>
        <div className='pt-40 pb-16 sm:pb-20 px-4 sm:px-40 min-h-screen font-uses'>
          <div className='sm:w-3/5 w-full'>
            <div>
              <h3 className='font-uses font-bold text-6xl sm:text-8xl text-white italic'>
                Uses
              </h3>
              <p className='mt-3 text-xs sm:text-sm'>
                Last Updated: 15/05/2021
              </p>
            </div>

            <div className='mt-4'>
              <p className='sm:text-xl leading-5 sm:leading-4'>
                I don't get asked about my work environment so often, but just
                in case if you want to know, here are the tools, devices and
                services I use to get things done. These are not the best ones,
                but I personally feel these very comfortable. I consider this as
                a checklist too.
              </p>
            </div>
          </div>

          <div className='sm:w-3/5 w-full mt-14 sm:mt-20'>
            {allUses.map((item) => (
              <div key={item._id} className='mb-16 sm:mb-20'>
                <h4 className='font-bold italic text-white text-3xl sm:text-5xl mb-2'>
                  {item.title}
                </h4>
                <ul>
                  {item.lists.map((item) => (
                    <li
                      key={item}
                      className='sm:text-xl list-square list-inside py-1'
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <footer className='w-full pt-6 sm:pt-28 pb-5 sm:pb-10 px-4 sm:px-40'>
          <p className='flex items-center'>
            &copy; {new Date().getFullYear()}. Felix Yeboah{' '}
            <span className='text-3xl sm:px-2'>&middot;</span> All rights
            reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export async function getStaticProps({ preview = false }) {
  const allUses = await getAllPostsForUses(preview);
  return {
    props: {
      allUses,
      preview,
    },
  };
}

export default Uses;
