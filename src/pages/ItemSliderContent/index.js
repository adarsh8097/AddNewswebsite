import BreakingHeadLine from '@/components/BreakingHeadLine'
import TopNewCarousel from '@/components/TopNewCarousel'
import React from 'react'
import BreakingHeadLineNews from '../BreakingheadLine'
import Link from 'next/link';
import { IoIosArrowForward } from "react-icons/io";

const ItemSliderContent = () => {
  return (
    <div className="">
        <p className='text-md px-2 sm:mx-7 text-gray-700 font-extrabold text-2xl'>Breaking Head Line</p>
      
      &nbsp;
      <div className='flex flex-col  sm:flex-row md:flex-row md:space-x-4 px-2'>
      <TopNewCarousel/>
      {/* <BreakingHeadLine/> */}
      <BreakingHeadLineNews/>
      </div>
      {/* <div> */}
      
      <p className=' w-full sm:w-[75%] leading-relaxed mt-2 mb-4 text-gray-400 sm:text-justify p-2 ' >
        Trump warned <Link href="#" className="underline"> will jail election officials</Link> he considers cheats; is complaining Pennsylvania’s voting is a fraud; 
        vowed to pardon January 6 rioters; railed against women who accused him of sexual misconduct
        </p>
        {/* </div> */}
     <div className=' bg-green-100   sm:py-5 sm:px-6 sm:w-[100%]  md:w-full xl:w-[70%] 2xl:w-[80%] w-[100%] p-2'>
        <div className='flex justify-between mb-4'>
        <p className=' text-sm font-bold text-gray-500'>Related News</p>
        <p className='font-bold text-gray-800'>
          <Link href="#" className='flex space-x-4'>View All <IoIosArrowForward className='mt-1 font-bold'/> </Link></p>
        </div>
       <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-4 md:grid-cols-2 xl:grid-cols-3 w-[100%]'>
      <div className='flex'>
            <img className='w-24 h-24 py-2 mx-2' src="../Assets/images/politics6.jpg" alt='news-img'/>
            <p className='w-auto py-1  text-md text-gray-600 text-justify'>“Elections 2024: Live updates Trump set to face off in first debate tomorrow</p>
      </div>
      <div className='flex'>
          <img className='w-24 h-24 py-2 mx-2' src="../Assets/images/politics6.jpg" alt='news-img'/>
            <p className='w-auto py-1  text-md text-gray-600 text-justify px-2'>“Elections 2024: Live updates Trump set to face off in first debate tomorrow</p>
     </div>
     <div className='flex '>
  <img className='w-24 h-24 py-2 mx-2' src="../Assets/images/politics6.jpg" alt='news-img'/>
  <p className='w-auto py-1  text-md text-gray-600 text-justify'>
    “Elections 2024: Live updates Trump set to face off in first debate tomorrow
  </p>
</div>

       </div>
     </div>
    </div>
  )
}

export default ItemSliderContent
