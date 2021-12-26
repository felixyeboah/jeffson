import { getAllPostsForHome, getAllPostsForProjects } from 'lib/api';
import { NextSeo } from 'next-seo';
import WhoAmI from '@components/WhoAmI';
import RecentPostList from '@components/RecentPostList';
import { ArrowLink } from '@components/ArrowButton';
import BlockContent from '@sanity/block-content-to-react';
import Link from 'next/link';

export default function Home({ allPosts, allProjects }) {
  return (
    <>
      <NextSeo
        title='Felix Yeboah'
        description='A self-taught Software Developer & Design-Minded, focused on building beautiful interfaces & experiences.'
        canonical='https://www.canonical.ie/'
        openGraph={{
          url: 'https://jeffson.dev',
          title: 'Felix Yeboah',
          description:
            'A self-taught Software Developer & Design-Minded, focused on building beautiful interfaces & experiences.',
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
      <div className='bg-bgBlack min-h-screen text-gray-100 home-background pt-40 sm:pt-56'>
        <header className='sm:text-9xl font-bold tracking-tighter px-10 sm:px-80 hidden sm:block'>
          <h1>A Design</h1>
          <h1>Oriented Software</h1>
          <h1>Developer</h1>
        </header>

        <header className='text-6xl font-bold tracking-tighter px-10 sm:px-80 block sm:hidden'>
          <h1>A Design Oriented Software Developer</h1>
        </header>

        <main className='sm:px-72 py-20 sm:py-24'>
          <div className='bg-slate-100 p-4 sm:p-20 rounded-lg text-slate-600 space-y-10 sm:space-y-16'>
            <div className='divide-y divide-slate-300 space-y-16'>
              {allProjects.slice(0, 3).map((project) => (
                <div
                  key={project._id}
                  className='block sm:flex items-start justify-between pt-16'
                >
                  <div className='sm:w-3/5 space-y-3'>
                    <h3 className='text-slate-800 font-semibold text-3xl sm:text-5xl'>
                      {project.title}
                    </h3>
                    <p className='text-md sm:text-lg line-clamp-3'>
                      <BlockContent
                        blocks={project?.body}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                        dataset='production'
                      />
                    </p>
                  </div>

                  <div className='flex items-center justify-between mt-4 sm:mt-0 relative'>
                    <ArrowLink href={project.url} direction='right'>
                      <p>Visit url</p>
                      <div className='focus-ring absolute z-10 inset-0 left-0 right-0 rounded-lg md:-left-12 md:-right-12 lg:left-0 lg:right-0' />
                    </ArrowLink>
                  </div>
                </div>
              ))}
            </div>

            <div className='text-center pb-10 sm:pb-0'>
              <Link href='/projects' passHref>
                <a>
                  <button className='border border-slate-600 hover:bg-gray-800 hover:text-white px-10 sm:px-16 py-4 rounded-lg font-bold transition duration-300 ease-out-expo'>
                    see more projects
                  </button>
                </a>
              </Link>
            </div>
          </div>

          <div className='mt-20 sm:mt-40 sm:mb-28 px-4 sm:px-0'>
            <div className='grid sm:grid-cols-2 gap-14'>
              <div>
                <h2 className='text-5xl sm:text-8xl text-white font-bold'>
                  I build beautiful interfaces &amp; experiences
                </h2>
              </div>

              <WhoAmI />
            </div>
          </div>

          <div className='border-t border-gray-700 w-full my-16 sm:my-0' />

          <RecentPostList allPosts={allPosts} />
        </main>

        <footer className='w-full pt-6 sm:pt-28 pb-5 sm:pb-10 px-4 sm:px-72'>
          <p className='flex items-center'>
            &copy; {new Date().getFullYear()}. Felix Yeboah{' '}
            <span className='text-3xl px-2'>&middot;</span> All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  const allProjects = await getAllPostsForProjects(preview);
  return {
    props: { allPosts, allProjects, preview },
  };
}
