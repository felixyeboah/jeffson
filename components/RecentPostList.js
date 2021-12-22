import React from 'react';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import PostCard from './PostCard';

const RecentPostList = ({ allPosts }) => {
  return (
    <div className='mb-16 sm:mb-0 sm:my-20 px-4 sm:px-0'>
      <div className='flex items-center justify-between mb-10 sm:mb-16'>
        <h4 className='text-2xl sm:text-4xl '>Blog recommendation</h4>
        <Link href='/blog' passHref>
          <a>
            <div className='flex items-center space-x-4'>
              <h6 className='sm:text-xl'>Read more posts</h6>
              <BsArrowRight />
            </div>
          </a>
        </Link>
      </div>

      <div className='grid sm:grid-cols-3 gap-20 sm:gap-10'>
        {allPosts.slice(0, 3).map((post) => (
          <PostCard post={post} variant='home' />
        ))}
      </div>
    </div>
  );
};

export default RecentPostList;
