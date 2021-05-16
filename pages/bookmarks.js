import React from "react";
import {
  getAllPostsForBookmark,
  getAllPostsForInspirations,
  getAllPostsForPodcasts,
  getAllPostsForVideos,
  getAllPostsForWebsites,
} from "../lib/api";
import ArticleCard from "@components/ArticleCard";
import SubNav from "@components/SubNav";
import ProfileAvatar from "@components/ProfileAvatar";
import useSticky from "hooks/useSticky";
import WebsiteCard from "@components/WebsiteCard";
import { NextSeo } from "next-seo";
import PodcastCard from "@components/PodcastCard";

const Bookmarks = ({
  allBookmarks,
  allInspirations,
  allWebsites,
  allVideos,
  allPodcasts,
}) => {
  console.log("podcasts", allPodcasts);
  const { isSticky, element } = useSticky();

  return (
    <>
      <NextSeo
        title="Bookmarks | Felix Yeboah"
        description="Bookmarks of my daily activities on the web."
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://jeffson.dev/bookmarks",
          title: "Bookmarks | Felix Yeboah",
          description: "Bookmarks of my daily activities on the web.",
          images: [
            {
              url: "https://i.imgur.com/oBTjOr0.png",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
          ],
          site_name: "jeffson.dev",
        }}
        twitter={{
          handle: "@jaeyholic",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <div className="bookmark-background text-gray-300 sm:px-32 sm:py-48 relative">
        <div className="sm:px-32">
          <h1 className="sm:text-10xl font-black">Bookmarks</h1>

          <SubNav element={element} isSticky={isSticky} />

          <section id="articles" className="pt-32">
            <div className="mb-16">
              <h4 className="text-4xl">Articles</h4>
            </div>
            <div className="grid grid-cols-3 gap-10">
              {allBookmarks?.map((bookmark) => (
                <ArticleCard key={bookmark._id} bookmark={bookmark} />
              ))}
            </div>
          </section>

          <section id="inspirations" className="pt-32">
            <div className="mb-16">
              <h4 className="text-4xl">Inspirational Channels and People</h4>
            </div>
            <div className="grid grid-cols-8 gap-6">
              {allInspirations.map((item) => (
                <ProfileAvatar key={item._id} item={item} />
              ))}
            </div>
          </section>

          <section id="websites" className="pt-32">
            <div className="mb-16">
              <h4 className="text-4xl">Inspirational Websites</h4>
            </div>

            <div className="grid grid-cols-4 gap-8">
              {allWebsites?.map((website) => (
                <WebsiteCard key={website._id} item={website} />
              ))}
            </div>
          </section>

          <section id="videos" className="pt-32">
            <div className="mb-16">
              <h4 className="text-4xl">Youtube Videos</h4>
            </div>

            <div className="grid grid-cols-4 gap-8">
              {allVideos.map((video) => (
                <div
                  key={video._id}
                  className="rounded-tr-md rounded-tl-md overflow-hidden bg-cardBg hover:bg-cardBgHover"
                >
                  <iframe
                    className="w-full h-56"
                    src={video.url}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div className="p-3">
                    <h4 className="font-medium">{video.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="podcasts" className="pt-32">
            <div className="mb-16">
              <h4 className="text-4xl">Podcasts</h4>
            </div>

            <div className="grid grid-cols-4 gap-8">
              {allPodcasts.map((item) => (
                <PodcastCard key={item._id} item={item} />
              ))}
            </div>
          </section>
        </div>
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
