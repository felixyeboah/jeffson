import React from 'react';
import WebsiteCard from './WebsiteCard';

const InsirationalWebsites = ({ allWebsites }) => {
  return (
    <section id='websites' className='pt-20 sm:pt-32'>
      <div className='mb-16'>
        <h4 className='text-4xl'>Inspirational Websites</h4>
      </div>

      <div className='grid sm:grid-cols-4 gap-8'>
        {allWebsites?.map((website) => (
          <WebsiteCard key={website._id} item={website} />
        ))}
      </div>
    </section>
  );
};

export default InsirationalWebsites;
