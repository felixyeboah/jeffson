import React from 'react';
import PodcastCard from './PodcastCard';

const PodcastsSection = ({ allPodcasts }) => {
  return (
    <section id='podcasts' className='pt-20 sm:pt-32'>
      <div className='mb-16'>
        <h4 className='text-4xl'>Podcasts</h4>
      </div>

      <div className='grid sm:grid-cols-4 gap-8'>
        {allPodcasts.map((item) => (
          <PodcastCard key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default PodcastsSection;
