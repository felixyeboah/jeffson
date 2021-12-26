import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import moment from 'moment';
import { ClipboardCopyButton } from './CopyToClipboard';
import clsx from 'clsx';

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.6] };

const PostCard = ({ post, variant }) => {
  const [origin, setOrigin] = React.useState('');

  React.useEffect(() => {
    if (window !== undefined) {
      setOrigin(window?.location?.origin);
    }
  });

  const date = new Date(post?.date);

  return (
    <div className='group relative' key={post._id}>
      <Link href={`/blog/${post?.slug}`} passHref className=' space-y-8'>
        <a>
          <div
            className={clsx(
              'block relative h-99 overflow-hidden group-hover:ring-2  ring-offset-4  transition duration-500 ease-in-out rounded-lg',
              {
                'ring-offset-black ring-white': variant === 'home',
                'ring-offset-white ring-black': variant === 'blog',
              }
            )}
          >
            <motion.img
              whileHover={{
                scale: 1.1,
                transition: { ...transition },
              }}
              className='h-full w-full object-cover rounded-lg'
              src={post?.coverImage}
              alt={post?.title}
            />
          </div>
          <motion.div
            exit={{ opacity: 0 }}
            transition={transition}
            className='space-y-2 sm:space-y-4 mt-10'
          >
            <p className='text-lg sm:text-xl font-medium text-gray-400'>
              {moment(date).format('LL')}
            </p>
            <h2 className='font-medium text-2xl sm:text-4xl line-clamp-2'>
              {post?.title}
            </h2>
          </motion.div>
        </a>
      </Link>

      <ClipboardCopyButton
        value={`${origin}/blog/${post?.slug}`}
        className='absolute z-10 left-6 top-6 transition duration-200 ease-in-expo'
      />
    </div>
  );
};

export default PostCard;
