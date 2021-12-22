import React from 'react';

const InspirationsSection = ({ allInspirations }) => {
  return (
    <section id='inspirations' className='pt-20 sm:pt-32'>
      <div className='mb-16'>
        <h4 className='text-4xl'>Inspirational Channels and People</h4>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-8 gap-6 px-8 sm:px-0 text-center'>
        {allInspirations.map((item) => (
          <ProfileAvatar key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default InspirationsSection;
