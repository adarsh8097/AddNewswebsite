import React,{useState} from 'react';
import { MdMenu, MdOutlineLiveTv } from "react-icons/md";
import { IoLogoYoutube, IoMdCamera, IoIosNotifications } from "react-icons/io";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { TbBrandYoutube } from "react-icons/tb";
import ManubarSection from './ManubarSection';
import { ImCross } from "react-icons/im";
import { LuTv } from "react-icons/lu";
import { TbPointFilled } from "react-icons/tb";
// import { Span } from 'next/dist/trace';
// import { Span } from 'next/dist/trace';


const Header = () => {
  const[ishide , setIshide] = useState(false);
  const contentTopics = [
    "Topics",
    "Sustainable Living:",
    "Top Remote Work",
    "Mental Health in the Digital Age",
    "Blockchain Beyond Cryptocurrency",
    "How to Stay Fit in a Busy Lifestyle",
    "The Role of Social Media in Shaping Political Opinions",
    "The Rise of Electric Vehicles and Their Environmental Impact",
    "Navigating Career Changes in a Rapidly Evolving Job Market",
    "The Importance of Cybersecurity in the Digital World"
  ];

  const defaultOption = contentTopics[0];
   let epaper = ['E-paper','Telangana','Andhra pradesh'];


  return (
    <div className='overflow-hidden '>
      <div className='flex space-x-12 bg-black text-[#ccc] py-4 fixed z-[9999] top-0 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full w-[100%] '>
        {/* Dropdown and Menu Icon */}
        <div className='flex items-center space-x-2 h-[24px]'>
           <div className='w-24' onClick={()=> setIshide(!ishide)}>
          { ishide ? (<ImCross className='mx-5 text-xl cursor-pointer' />):
           (<MdMenu  className='mx-5 text-3xl  cursor-pointer'/>)}
           </div>
          {/* <Dropdown className='w-48  h-9 text-[#ccc] ' options={contentTopics} value={defaultOption} placeholder="Select an option" /> */}
         
         <div className=' h-[28px]'>
         <select className='bg-black text-[#ffffff] flex w-[96px] px-2 border py-1 rounded cursor-pointer'>
            {epaper.map((d,index)=>(
              <option className='cursor-pointer px-3' key={index} value={d}>{d}</option>
            ))}

          </select>
         </div>
        </div>

        {/* Navigation Links */}
        <div className='flex w-full hidden sm:full sm:block md:w-full md:block lg:w-full lg:block lg:flex xl:w-full xl:block xl:flex 2xl:flex 2xl:block 2xl:flex'>
        <div className='mx-2  flex flex-row  items-center space-x-4 text-md'>
          <p className='border-b-2 font-normal text-base w-[84px] color  border-transparent cursor-pointer hover:border-blue-500 w-fit text-md -mx-2'>National </p> &nbsp; &nbsp;&nbsp;|
          <p className='border-b-2 font-normal text-base w-[60px] color border-transparent cursor-pointer hover:border-blue-500 w-fit'>Andhra </p> &nbsp;  |
          <p className='border-b-2 font-normal text-base w-[85px] color border-transparent cursor-pointer hover:border-blue-500 w-fit'>Telangana</p>
        </div>

        {/* Media Links */}
        <div className='mx-2 flex flex-row space-x-4 items-center text-md hidden sm:hidden md:hidden lg:block lg:flex' >
          <div  className='flex space-x-2 w-[77px] border-b-2 border-transparent cursor-pointer hover:border-blue-500 w-fit'>
          <TbBrandYoutube className='mt-0.5 text-xl'/>
          <p className='text-base color w-[44px]'>Videos</p>
          </div>
           <div  className='flex space-x-2 w-[87px] h-[24px] border-b-2 border-transparent cursor-pointer hover:border-blue-500 w-fit'>
           <IoMdCamera  className='mt-0.5 text-xl'/>
           <p className='w-[55px] font-base color'>Photos</p>
           </div>
          <div className='flex space-x-2 border-b-2 border-transparent cursor-pointer hover:border-blue-500 w-fit '>
           <LuTv  className='mt-0.5 text-xl'/>
            <p className='font-base w-[96px] color flex'><TbPointFilled className="text-green-500"/> Watch Live</p>
          
          </div>
        
        </div>
       

        {/* Other Links */}
        <div className='flex space-x-6 items-center justify-around space-x-6 hidden sm:hidden md:hidden lg:hidden xl:block'>
        <div className='mx-2 flex flex-row space-x-6 items-center '>
          <p className='border-b-2 w-[71px] color font-base border-transparent cursor-pointer hover:border-blue-500 w-fit'>About Us</p>
          <p className='border-b-2 w-[85px] color font-base border-transparent cursor-pointer hover:border-blue-500 w-fit'>Contact Us</p>
          </div>
          </div>
          </div>
        {/* Icons */}
        <div className='flex items-center space-x-4 w-24 sm:w-24 md:w-48 lg:w-48 '>
          <FaMagnifyingGlass  className='text-xl  cursor-pointer text-[#FFFFFF]'/>
          <IoIosNotifications  className='text-2xl  cursor-pointer  text-[#FFFFFF] '/>
        </div>
        
        </div>
        <div>
        <div className="bg-blue-500 border-4 border-blue-500 mt-[56px]  fixed w-full z-[9999]"></div>
        </div>
        
      {/* </div> */}
      <div className=''>
     { ishide && (<ManubarSection/>)}
      </div>
    </div>
  );
}

export default Header;
