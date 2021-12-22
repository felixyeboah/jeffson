import { getAllPostsForHome } from 'lib/api';
import GridGallery from '@components/GridGallery';
import { NextSeo } from 'next-seo';
import WhoAmI from '@components/WhoAmI';
import RecentPostList from '@components/RecentPostList';

export default function Home({ allPosts }) {
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
          <h1>A Software Developer &amp;</h1>
          <h1>Design Minded</h1>
        </header>

        <header className='text-6xl font-bold tracking-tighter px-10 sm:px-80 block sm:hidden'>
          <h1>A Software Developer &amp; Design Minded</h1>
        </header>

        <main className='sm:px-72 py-20 sm:py-24'>
          <GridGallery />

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
  return {
    props: { allPosts, preview },
  };
}
