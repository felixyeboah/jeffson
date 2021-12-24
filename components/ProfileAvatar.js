import React from 'react';
import { imageBuilder } from '../lib/sanity';

const ProfileAvatar = ({ item }) => {
  const image = imageBuilder.image(item?.coverImage).url();
  return (
    <a href={item.url} target='_blank' rel='noreferrer'>
      <div className='w-[170px] group text-center overflow-hidden'>
        <div
          className={`flex items-center justify-center bg-gradient-to-tr from-${item.from} via-${item.via} to-${item.to} w-32 h-32 rounded-full`}
        >
          <img
            className='rounded-full w-28 h-28 object-cover'
            src={image}
            alt={item.name}
          />
        </div>
        <div className='mt-2 group-hover:text-white'>
          <h4 className='text-2xl'>{item.name}</h4>
        </div>
      </div>
    </a>
  );
};

export default ProfileAvatar;
