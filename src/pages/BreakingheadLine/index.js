import BreakingHeadLine from '@/components/BreakingHeadLine';
import React from 'react'


const BreakingHeadLineNews = () => {
  return (
    <div className='w-full sm:w-full md:w-full lg:full xl:w-full 2xl:w-full sm:-mt-8'> 
         <p className='text-gray-700 font-black text-lg'>Current</p>
         &nbsp;
         {/* <h1 className='text-xl font-bold'>Breaking Head Line</h1> */}
        {/* // <TrandingTopics/> */}
      <BreakingHeadLine/>
      
      
    </div>
  )
}

export default BreakingHeadLineNews;
