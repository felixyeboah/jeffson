import React from 'react';

const AllVideosSection = ({ allVideos }) => {
  return (
    <section id='videos' className='pt-20 sm:pt-32'>
      <div className='mb-16'>
        <h4 className='text-4xl'>Youtube Videos</h4>
      </div>

      <div className='grid sm:grid-cols-4 gap-8'>
        {allVideos.map((video) => (
          <div
            key={video._id}
            className='rounded-tr-md rounded-tl-md overflow-hidden bg-cardBg hover:bg-cardBgHover rounded-md'
          >
            <iframe
              className='w-full h-56'
              src={video.url}
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
            <div className='p-3'>
              <h4 className='font-medium'>{video.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllVideosSection;
