import React from 'react';
import ArticleCard from './ArticleCard';

const BookmarkSection = ({ allBookmarks }) => {
  return (
    <section id='articles' className='pt-20 sm:pt-32'>
      <div className='mb-16'>
        <h4 className='text-4xl'>Articles</h4>
      </div>
      <div className='grid sm:grid-cols-3 gap-6 sm:gap-10'>
        {allBookmarks?.map((bookmark) => (
          <ArticleCard key={bookmark._id} bookmark={bookmark} />
        ))}
      </div>
    </section>
  );
};

export default BookmarkSection;
