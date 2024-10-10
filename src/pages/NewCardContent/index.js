import LatestNews from '@/components/LatestNews';
import NewCards from '@/components/NewCards';
import Popular from '@/components/Popular';
import React from 'react';

const NewsCardContent = () => {
  return (
    <div className='w-full sm:w-full md:w-full lg:w-full 2xl:w-[80%] xl:w-[70%] px-2'>
      {/* Define a grid layout */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        <div className='col-span-1'>
          <NewCards />
        </div>

        <div className='col-span-1'>
          <LatestNews />
        </div>

        <div className='col-span-1'>
          <Popular />
        </div>
      </div>

      {/* Horizontal rule */}
      <hr className='my-3 mx-3 border-gray-900 border-t-[1px]' />
    </div>
  );
};

export default NewsCardContent;
