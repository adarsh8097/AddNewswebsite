import React from 'react'
import Layout from './Layout'

const RightSideContent = () => {
  const electionData = [
    "Elections 2024: Live updates",
    "Trump set to face off in first debate",
    "Biden campaigns across the Midwest",
    "Key battleground states in focus",
    "Polls show tight race ahead"
  ];

  return (
    <div className='mt-45  absolute fixed right-0 h-screen overflow-y-auto overflow-x-hidden scrollbar-none sm:hidden md:hidden lg:hidden xl:block 2xl:block headerdata'>
      <h1 className='text-base font-semibold mx-4 mb-2'>Advertisement</h1>
      <div className='w-72 mx-4 rounded rounded-md mb-6'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTQ2tA5Y-gO0ijlluu-Tf7hNTh3y9s31kl-g&s' alt="advertisement-content" />
      </div>
      <div className='mt-4 mx-6'>
        <h2 className='text-base font-semibold -mx-2 py-4'>Take a Quiz!</h2>
        <p className='bg-custom-gradient text-center py-5 text-white font-bold text-lg rounded -mx-2 cursor-pointer shadow-md border border-[#5BEE16] text-[#F8EF03]' >START NOW !!</p>
      </div>
       {/* Displaying Election Data as Cards */}
       <h2 className='text-base mx-4 mb-4 mt-4 font-semibold'>Latest News</h2>
       {electionData.map((item, index) => (
        <>
        <div key={index} className='bg-white shadow-sm rounded py-4 mb-4 mx-2 mt-4'>
           <p className='text-gray-400 px-2'>10 min ago</p>
          <h3 className='text-base font-normal mx-2 text-gray-800 px-1'>{item}</h3>
          
        </div>
         <hr className='border border-dotted fit mx-2'></hr>
        </>
      ))}
      <div className='w-72 mx-4 rounded rounded-md mb-6 shadow-md'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTQ2tA5Y-gO0ijlluu-Tf7hNTh3y9s31kl-g&s' alt="advertisement-content" />
      </div>
      
    </div>
  );
}

export default RightSideContent;
