import React from 'react';
import {
  getAllPostsForHome,
  getAllPostsWithSlug,
  getPostAndMorePosts,
} from 'lib/api';
import BlockContent from '@sanity/block-content-to-react';
import { NextSeo } from 'next-seo';
import moment from 'moment';
import { Form } from '@components/Form';
import { ClapButton } from '@lyket/react';
import PostCard from '@components/PostCard';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import Link from 'next/link';
import { BsArrowLeft } from 'react-icons/bs';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const Blog = ({ post, morePosts }) => {
  const [canScroll, setCanScroll] = React.useState(false);
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  const getInitials = (name) => {
    let full_name = name?.split(' ');
    let initials = full_name[0][0];
    if (name) {
      if (full_name?.length >= 2 && full_name[1]) {
        initials += full_name[1][0];
        return initials;
      }
    } else {
      initials = '';
      return initials;
    }
  };

  React.useEffect(() => {
    if (!canScroll) {
      document.querySelector('body').classList.add('no-scroll');
    } else {
      document.querySelector('body').classList.remove('no-scroll');
    }
  }, [canScroll]);

  const date = new Date(post?.date);

  return (
    <>
      <NextSeo
        title={post?.title}
        description={post?.excerpt}
        canonical='https://www.canonical.ie/'
        openGraph={{
          url: 'https://jeffson.dev',
          title: post?.title,
          description: post?.excerpt,
          images: [
            {
              url: post?.coverImage,
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
          ],
          site_name: 'SiteName',
        }}
        twitter={{
          handle: '@jaeyholic',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

      <motion.div
        initial='initial'
        animate='animate'
        exit='exit'
        onAnimationComplete={() => setCanScroll(true)}
        className='bg-blogBg'
      >
        <div className='pt-40 sm:pt-56 pb-32 sm:pb-40 px-4 sm:px-72 min-h-screen'>
          <Link href='/blog' passHref>
            <a>
              <div className='flex items-center font-medium space-x-2 mb-14 sm:mb-24 sm:text-xl'>
                <BsArrowLeft />
                <p>Back to overview</p>
              </div>
            </a>
          </Link>
          <div className='space-y-10'>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.2, ...transition },
              }}
            >
              <h2 className='text-5xl sm:text-7xl font-bold sm:leading-2 font-blog'>
                {post?.title}
              </h2>
              <motion.div
                animate={{ transition: { delay: 1.3, ...transition } }}
                className='flex items-center mt-6'
              >
                <div className='flex items-center justify-center w-16 h-16 bg-gradient-to-tr from-purple-500 via-red-500 to-pink-500 rounded-full'>
                  <img
                    className='rounded-full w-14 h-14 object-cover border'
                    src={post?.author?.avatar}
                    alt={post?.author?.name}
                  />
                </div>
                <div className='ml-4'>
                  <p className='font-bold sm:text-lg'>{post?.author?.name}</p>
                  <p className='text-gray-500 text-sm'>
                    {moment.utc(date).format('LL')}
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{
                x: '50%',
                width: '383px',
                height: '35rem',
              }}
              animate={{
                x: 0,
                width: '100%',
                height: '43rem',
                transition: { delay: 0.2, ...transition },
              }}
              className='rounded-lg overflow-hidden h-100'
            >
              <motion.img
                style={{ scale: scale, opacity: opacity }}
                initial={{ scale: 1.1 }}
                animate={{
                  y: -20,
                  transition: { delay: 0.2, ...transition },
                }}
                className='w-full h-full object-cover'
                src={post?.coverImage}
                alt={post?.title}
              />
            </motion.div>
          </div>

          <div>
            <div className='prose prose-md sm:prose-lg mt-20 mx-auto'>
              <BlockContent
                blocks={post?.body}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                dataset='production'
              />
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <ClapButton
              namespace='post'
              id={post?._id}
              component={ClapButton.templates.Medium}
            />
          </div>

          <div className='px-4 sm:px-64 mt-16'>
            <div className='mb-6'>
              <h3 className='font-bold text-xl sm:text-3xl font-blog'>
                Post a comment
              </h3>
              <p className='text-gray-600'>
                Have anything to share? Please post a comment
              </p>
            </div>
            <Form _id={post?._id} />
          </div>

          <div className='px-4 sm:px-64 mt-16 space-y-4'>
            {post?.comments.length > 0 && (
              <div>
                <p className='font-medium text-lg'>Comments</p>
              </div>
            )}
            {post?.comments?.map((item) => (
              <div
                key={item?._id}
                className='mb-6 bg-slate-700 p-6 rounded-lg text-white'
              >
                <div className='flex items-center'>
                  <div className='flex items-center justify-center sm:w-12 sm:h-12 rounded-full bg-blue-600 text-white font-bold text-xl'>
                    {getInitials(item?.name) || item?.name?.split(' ')[0][0]}
                  </div>
                  <div className='flex items-center'>
                    <h6 className='font-bold sm:text-xl ml-3'>{item?.name}</h6>
                    <p className='ml-6 text-sm text-gray-300'>
                      {moment.utc(item?._createdAt).format('LL')}
                    </p>
                  </div>
                </div>
                <p className='mt-2'>{item?.comment}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='bg-gray-900 text-gray-200 pt-20 sm:pt-32 px-4 sm:px-72'>
          <div>
            <h2 className='font-semibold mb-10 sm:mb-16 text-3xl sm:text-4xl'>
              More Posts
            </h2>

            <div className='grid sm:grid-cols-3 gap-8 sm:gap-10'>
              {morePosts?.map((post) => (
                <PostCard key={post?._id} post={post} variant='home' />
              ))}
            </div>
          </div>
          <footer className='w-full pt-6 sm:pt-32 pb-5 sm:pb-10 text-gray-200'>
            <p className='flex items-center'>
              &copy; {new Date().getFullYear()}. Felix Yeboah{' '}
              <span className='text-3xl px-2'>&middot;</span> All rights
              reserved.
            </p>
          </footer>
        </div>
      </motion.div>
    </>
  );
};

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  const posts = await getAllPostsForHome(preview);
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
      posts,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  };
}

export default Blog;
