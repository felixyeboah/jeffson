import React from 'react';
import Link from 'next/link';
import moment from 'moment';

const RecentPostList = ({ allPosts }) => {
  return (
    <div className='mb-16 sm:mb-0 sm:my-20 px-4 sm:px-0'>
      <h4 className='text-2xl sm:text-4xl mb-10 sm:mb-16'>Recent Posts</h4>

      <div className='grid sm:grid-cols-3 gap-32 sm:gap-10'>
        {allPosts.slice(0, 3).map((post) => (
          <Link href={`/blog/${post.slug}`} passHref>
            <a>
              <div key={post._id}>
                <div className='h-56'>
                  <img
                    className='h-full w-full object-cover rounded-md'
                    src={post.coverImage}
                    alt={post.title}
                  />
                  <div className='mt-4'>
                    <p className='text-gray-400 text-xs sm:text-sm'>
                      {moment(post.date).format('LL')}
                    </p>
                    <h5 className='text-xl sm:text-3xl mt-2 text-gray-300'>
                      {post.title}
                    </h5>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentPostList;
