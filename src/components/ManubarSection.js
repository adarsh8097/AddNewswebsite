import React  from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
const ManubarSection = () => {
    

    let section = ['about us','contact us','our vision','careers'];
    let politics = ['global','andhra','telangana'];
    let News = ['national','andhra','telangana','offbeat'];
    let Topics = ['Enteratinment','Expression','Economy','Innerview','Main'];
    let Other  = ['telgu(News)','E-paper Links','Webstories'];
    let  Policies = ['Fast check Policy','Ethics Policy','Corrections Policy'];

// 

  return (
    <div className='w-full h-auto  bg-white absolute z-[6999] border shadow-lg rounded mt-[4rem]'>
       <div className=' w-full flex flex-col lg:flex-row'>
     <div className='w-full'>
      <p className='mx-8 my-6'>
        <AiOutlineHome className='text-4xl cursor-pointer'/>
        </p>
       
       <div className='w-full sm:px-[6rem] sm:mx-5 xl:px-[8rem] xl:mx-12'>
        {/* <ul className='flex space-x-6 mx-48'> */}
         <ul className="grid grid-cols-2 sm:grid-cols-4 px-4 sm:mx-6">
            {/* {section.map((d,index)=>(
                <li className='capitalize  font-bold text-base px-9 text-gray-800 cursor-pointer border-b-2 border-transparent  hover:border-blue-400 w-fit text-md -mx-2' key={index} value={d}>{d}</li>
            ))} */}
                <li className='capitalize text-lg font-bold px-4 sm:px-3 text-gray-800 cursor-pointer border-b-2 border-transparent  hover:border-blue-400 w-fit text-md -mx-2 ' >About Us</li>
                <li className='capitalize  font-bold text-lg px-4 xl:-px-[6%] text-gray-800 cursor-pointer border-b-2 border-transparent  hover:border-blue-400 w-fit text-md -mx-2 '>Contact Us</li>
                <li className='capitalize  font-bold text-lg px-4  xl:mx-[10%] text-gray-800 cursor-pointer border-b-2 border-transparent  hover:border-blue-400 w-fit text-md -mx-2 '>Our Vision</li>
                <li className='capitalize  font-bold text-lg px-4  xl:mx-[30%] text-gray-800 cursor-pointer border-b-2 border-transparent  hover:border-blue-400 w-fit text-md -mx-2 '>Careers</li>
          </ul>
    </div>
   
    <div className='mx-6'>
    <p className='text-base color font-normal  sm:mx-3 mb-2 w-[82px]'>Sections</p>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 sm:pb-3 md:grid-cols-5 '>
        <div className='px-10 -mx-9 '>
        <h1 className='text-base font-bold  text-gray-800 py-1'>Politics</h1>
        <div className="flex items-center -mt-1 w-[60px] "> {/* Adjust -mt-1 as needed */}
        <div className="flex-1 border-b-4 border-gray-800"></div> {/* Solid Border */}
        <div className="flex-1 border-b-4 border-dotted border-gray-400"></div> {/* Dotted Border */}
      </div>
         <ul className='w-fit text-xl '>
            {politics.map((d,index)=>( 
                <li className='capitalize text-base text-gray-800 py-0.5 px-2 font-medium text-gray-800 border-b-2 border-transparent cursor-pointer hover:border-blue-400 w-fit text-md -mx-2 ' key={index} value={d}>{d}</li>
             ))}
         </ul>
        </div>
        {/* <div className='flex space-x-24  mx-24'> */}
        <div className=''>
        <h1 className='text-base font-bold  text-gray-800 py-1'>News</h1>
        <div className="flex items-center -mt-1 w-[40px] "> {/* Adjust -mt-1 as needed */}
        <div className="flex-1 border-b-4 border-gray-800"></div> {/* Solid Border */}
        <div className="flex-1 border-b-4 border-dotted border-gray-400"></div> {/* Dotted Border */}
      </div>
         <ul>
            {News.map((d,index)=>( 
                <li className='capitalize text-base text-gray-800 py-0.5 px-2 font-medium border-b-2 border-transparent cursor-pointer hover:border-blue-400 w-fit text-md -mx-2' key={index} value={d}>{d}</li>
            ))}
         </ul>
        </div>
        <div className=''>
        <h1 className='text-base font-bold  text-gray-800 py-1'>Topics</h1>
        <div className="flex items-center -mt-1 w-[60px] "> {/* Adjust -mt-1 as needed */}
        <div className="flex-1 border-b-4 border-gray-800"></div> {/* Solid Border */}
        <div className="flex-1 border-b-4 border-dotted border-gray-400"></div> {/* Dotted Border */}
      </div>
         <ul>
            {Topics.map((d,index)=>( 
                <li className='capitalize text-base text-gray-800 py-0.5 px-2 font-medium text-gray-800 border-b-2 border-transparent cursor-pointer hover:border-blue-400 w-fit text-md -mx-2' key={index} value={d}>{d}</li>
            ))}
         </ul>
        </div>
        <div className=''>
        <h1 className='text-base font-bold  text-gray-800 py-1'>Other</h1>
        <div className="flex items-center -mt-1 w-[60px] "> {/* Adjust -mt-1 as needed */}
        <div className="flex-1 border-b-4 border-gray-800"></div> {/* Solid Border */}
        <div className="flex-1 border-b-4 border-dotted border-gray-400"></div> {/* Dotted Border */}
      </div>
         <ul>
            {Other.map((d,index)=>( 
                <li className='capitalize text-base text-gray-800 py-0.5 font-medium px-2  text-gray-800 border-b-2 border-transparent cursor-pointer hover:border-blue-400 w-fit text-md -mx-2' key={index} value={d}>{d}</li>
            ))}
         </ul>
        </div>
        <div className=''>
        <h1 className='text-base font-bold  text-gray-800 py-1'>Policies</h1>
        <div className="flex items-center -mt-1 w-[60px] "> {/* Adjust -mt-1 as needed */}
        <div className="flex-1 border-b-4 border-gray-800"></div> {/* Solid Border */}
        <div className="flex-1 border-b-4 border-dotted border-gray-400"></div> {/* Dotted Border */}
      </div>
         <ul>
            {Policies.map((d,index)=>( 
                <li className='capitalize text-base text-gray-800 py-0.5 font-medium  px-2 text-gray-800 border-b-2 border-transparent cursor-pointer hover:border-blue-400 w-fit text-md -mx-2' key={index} value={d}>{d}</li>
            ))}
         </ul>
        </div>
        {/* </div> */}
        </div>
        <div className='footer py-2 xl:mb-[3rem]'>
            <p className='text-lg font-black text-gray-800'>Social Media</p>
            <div className='flex flex-col sm:flex-row sm:space-x-24 md:mb-[2rem]'>
            <div className='flex space-x-5 mt-3 text-xl pb-3'>
            <p className='cursor-pointer text-blue-500'><FaFacebookF/></p>
            <p className='cursor-pointer text-blue-500'><FaLinkedinIn/></p>
            <p className='cursor-pointer text-blue-500'><FaTwitter/></p>
            </div>
            {/* <div className='flex space-x-16 -mx-64'> */}
            <div className="flex flex-col sm:flex-row sm:space-x-8 ">
            <p className='text-lg font-black text-gray-800'>Advertise on our site</p>
            <p className='text-lg font-black text-gray-800'>Terms and Conditions</p>
            </div>
            </div>
        </div>
     </div>
     
      </div>
      {/* <div className='-mx-10 my-[40px] mb-16'> */}
        <div className="px-2 md:mt-[4rem] mb-[2rem]">
        <p className='font-black text-lg py-2  text-gray-800'>Subscribe to us !</p>
        <input type="email" placeholder='Enter your email Id' className='border placeholder:text-md py-1.5 px-2 outline-none border rounded w-72 shadow-md border-gray-400'/>
        <div>
            <p className='text-base font-bold my-2  text-gray-800'>Play Zone (sports)</p>
        </div>
      </div>
       
    </div>
    </div>
  )
}

export default ManubarSection;
