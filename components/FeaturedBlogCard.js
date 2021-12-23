import React from 'react';
import { imageBuilder } from '../lib/sanity';
import moment from 'moment';
import Link from 'next/link';
import { ClipboardCopyButton } from './CopyToClipboard';
import { ArrowLink } from './ArrowButton';

const FeaturedBlogCard = ({ post }) => {
  const image = imageBuilder.image(post?.coverImage).url();
  const [origin, setOrigin] = React.useState('');

  React.useEffect(() => {
    if (window !== undefined) {
      setOrigin(window?.location?.origin);
    }
  });

  return (
    <div className='relative group'>
      <Link href={`/blog/${post?.slug}`} passHref>
        <a className='block border-2 hover:border-gray-600 rounded-md p-6 sm:p-20 bg-white bg-opacity-40 transition duration-500 ease-out-expo '>
          <div className='grid sm:grid-cols-8 gap-8 sm:gap-32'>
            <div className='sm:col-span-5 space-y-20'>
              <div>
                <p className='text-xs sm:text-xl text-gray-700 font-bold'>
                  Featured article
                </p>
                <div className='space-y-4'>
                  <h3 className='text-4xl sm:text-6xl mt-3 sm:mt-6 font-bold'>
                    {post.title}
                  </h3>
                  <p className='text-md sm:text-lg text-gray-600 font-semibold'>
                    {moment(post.date).format('LL')}
                  </p>
                </div>
                <p className='text-gray-600 mt-10 text-sm sm:text-lg'>
                  {post.excerpt}
                </p>
              </div>

              <div className='flex items-center justify-between mt-12'>
                <ArrowLink href={`/blog/${post.slug}`}>
                  <p>Read full article</p>
                  <div className='focus-ring absolute z-10 inset-0 left-0 right-0 rounded-lg md:-left-12 md:-right-12 lg:left-0 lg:right-0' />
                </ArrowLink>
              </div>
            </div>

            <div className='sm:col-span-3 relative'>
              <img
                className='sm:w-99 object-cover sm:h-98 rounded-xl'
                src={image}
                alt={post.title}
              />
            </div>
          </div>
        </a>
      </Link>

      <ClipboardCopyButton
        value={`${origin}/blog/${post.slug}`}
        className='absolute z-10 right-4 sm:right-[11rem] top-6 sm:top-24 transition duration-200 ease-in-expo'
      />
    </div>
  );
};

export default FeaturedBlogCard;
