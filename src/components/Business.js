import Link from 'next/link';
import React from 'react';
import HealthPage from './HealthCard';
import BusinessSlider from './BusinessSlider';

const Business = () => {
  return (
     <div>
    <div className="flex justify-start py-0 sm:py-10 mx-4">
      {/* Card Container */}
      <div className=" w-[100%] sm:w-[100%] md:w-[100%] xl:w-[78%]  2xl:w-[80%] bg-white  rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="w-full">
         
          <BusinessSlider/>
        </div>
        
        {/* Content Section */}
        <div className="">
          <h3 className="text-xl font-black mb-3 text-gray-800 px-3" >Headline</h3>
          <p className="text-gray-700 mb-4 text-justify px-5">
          Trump warned <Link href="#" className='underline decoration-solid'>he will jail election officials </Link> he considers cheats; is complaining Pennsylvania’s voting is a fraud; vowed to pardon
           January 6 rioters; railed against women who accused him of sexual misconduct; and spent hours in recent days on sometimes 
          incoherent rants that raised questions about his state of mind. But new polling ahead of Tuesday’s showdown in Philadelphia 
            shows the race tied up nationally, suggesting Harris’ momentum after replacing President Joe Biden on the ticket hasn’t resulted
            in a commanding edge.
              </p>
          
          {/* Link Button */}
          {/* <Link href="/more-details">
            <span  className="text-blue-500 hover:underline">Read More</span>
          </Link> */}
        </div>
        <hr className='text-xl font-bold my-3 mx-3  border-gray-700 border-t-[1px]'></hr>
      </div>
    
    </div>
    <HealthPage/>
    </div>
  );
};

export default Business;
