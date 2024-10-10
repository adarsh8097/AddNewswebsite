import React from 'react';
import Link from 'next/link';

const healthData = [
  {
    id: 1,
    title: "Healthy Eating Habits",
    description: "Discover the best practices for a balanced diet that promotes a healthy lifestyle.",
    imageUrl: "../Assets/images/health1.avif",
    link: "/learn-more-healthy-eating"
  },
  {
    id: 2,
    title: "Exercise for Wellness",
    description: "Learn about effective workout routines to keep your body fit and active.",
    imageUrl: "../Assets/images/health2.avif",
    link: "/learn-more-exercise"
  }
];

const HealthPage = () => {
  return (
    <div className='w-[100%] sm:w-[100%] md:w-[100%] lg:w-full xl:w-[75%] 2xl:w-[80%] '>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 lg:w-full md:gap-4 md:w-full">
      {healthData.map((data) => (
        <div key={data.id} className="border rounded-lg overflow-hidden lg:w-full md:w-full">
          {/* <div >
           <img src={data.imageUrl} alt={data.title} className="w-[450px] h-72 object-cover"/>
          </div> */}
          <div className="sm:h-72 2xl:h-[80%] bg-gray-200 relative w-[100%]">
            <img src={data.imageUrl} alt={data.title} className="w-full lg:w-full lg:h-full object-cover md:w-full md:h-full" />
            
            {/* Overlay text */}
            <div className="absolute inset-0 px-2 py-2 flex items-start justify-start">
              <h2 className="text-white font-bold text-2xl">Health</h2>
            </div>
          </div>

          <div className="p-4 border">
            <h3 className="text-lg font-black text-gray-800 py-2">{data.title}</h3>
            <p className="text-gray-600 mb-4 w-full  ">
          Trump warned <Link href="#" className='underline decoration-solid'>he will jail election officials </Link> he considers cheats; is complaining Pennsylvania’s voting is a fraud; vowed to pardon
           January 6 rioters; railed against women who accused him of sexual misconduct; and spent hours in recent days on sometimes 
          incoherent rants that raised questions about his state of mind.
           </p>
           {/* <span className='text-gray-700 mb-4 w-full max-w-md multi-line-ellipsis'>But new polling ahead of Tuesday’s showdown in Philadelphia 
            shows the race tied up nationally, suggesting Harris’ momentum after replacing President Joe Biden on the ticket hasn’t resulted
            in a commanding edge.</span> */}
            <a href="#" className="text-blue-500 hover:underline">
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-end mb-4 mx-6">
  <Link href="#" className='text-base sm:text-xl font-medium text-blue-500 cursor-pointer'>Load More</Link>
</div>
<hr className='text-xl font-bold my-3 mx-3  border-gray-700 border-t-[1px]'></hr>
    </div>
  );
};

export default HealthPage;
