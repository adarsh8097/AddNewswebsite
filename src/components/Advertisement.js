import React from 'react';


const Advertisement = () => {
  return (
    <div className='overflow-hidden w-[100%]  mb-2 md:w-full lg:w-full lg:mb-4 xl:w-full overflow-hidden'>
   
   <div className='flex flex-col sm:flex sm:flex-row py-4 mt-[60px] w-[100%]  -mx-4  md:w-full 2xl:grid 2xl:grid-cols-3 2xl:w-[100%]'>
    <div className='px-6 w-[50%] sm:w-[221px] mb-2'>
        <img className='' src ='../Assets/images/Logo.png' alt='product-log'/>
        </div>
         <div className='object-contain w-full sm:full md:w-full lg:w-full xl:w-[80%] 2xl-w-full'>
        <img 
          className='px-5 rounded-lg ' 
          src="../Assets/images/ad2.png" 
          alt="advertisement-poster" 
        />
      
      </div>
      {/* <div className="content-container"> */}
  {/* Main content here */}
  <div className="flex text-sm justify-end sm:px-7 md:mt-8 md:px-5 lg:mt-8 xl:mt-20 xl:px-5 2xl:px-6 2xl:mt-16 ">
    <span className="text-blue-600 font-bold  sm:text-lg sm:text-base">English</span>
     <span className='font-bold  mx-2 border border-0  -mb-0.1 md:-mb-0.5'>|</span>
     <span className='text-black font-bold sm:text-lg sm:text-base'> Telugu</span>
    {/* <p className="font-bold text-lg">Telugu</p> */}
  </div>
{/* </div> */}

      
    </div>

    </div>
  );
};

export default Advertisement;
