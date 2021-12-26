import React from 'react';
import ProfileAvatar from 'components/ProfileAvatar';

const InspirationsSection = ({ allInspirations }) => {
  return (
    <section id='inspirations' className='pt-20 sm:pt-32'>
      <div className='mb-16'>
        <h4 className='text-4xl'>Inspirational Channels and People</h4>
      </div>
      <div className='flex items-center overflow-x-scroll text-center'>
        {allInspirations.map((item) => (
          <ProfileAvatar key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default InspirationsSection;
