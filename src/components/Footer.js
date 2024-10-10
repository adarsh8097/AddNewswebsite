import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
     let  content = ['sports','health','Culture and trends','Business','travel'];
     let  enjoy = ['Enteratinment', 'Expression', 'Economy','Innerview', 'Main'];
    let  Enteratinment = ['E-Paper Links','Watch Live', 'Social Media', 'Webstories', 'Videos','Photos'];
    let meet = ['about','countect us','our vision','careers'];

   return (
    <div className='bg-gradient-to-b from-blue-900 to-blue-600 text-white w-full h-auto  bottom-0 py-4 overflow-hidden footercontent '>
       <div className='sm:mx-3 grid grid-col-1 sm:grid-cols-3 gap-10'>
       <div className=' sm:mx-12 my-3 md:mx-10 px-2'>
        <p className='mb-2 font-bold text-xl md:text-base md:font-normal lg:text-xl lg:font-bold'>Subscribe with us!</p>
        <input type='email' placeholder='Enter your email ID'  className='px-2 py-2 rounded w-full sm:w-[100%] text-black outline-none '/>
       </div>
       <div className='overflow-hidden sm:my-3 sm:mx-12 flex justify-center items-center'>
            <img className='rounded w-48 ' src ="../Assets/images/Logo.png" alt="company-log" />
        </div>
        <div className='px-2 sm:my-4 sm:mx-12 container'>
           <h3 className='font-bold text-xl'>Social Media:</h3>
           <div className='flex space-x-3 mt-2 text-xl'>
            <p className='cursor-pointer'><FaFacebookF/></p>
            <p className='cursor-pointer'><FaLinkedinIn/></p>
            <p className='cursor-pointer'><FaTwitter/></p>
            </div>
        </div>
        </div>
         
        <div className='grid grid-cols-2  sm:grid-cols-6 my-12 flex '>
        <div className=' text-base px-2 sm:text-lg sm:mx-10 font-bold '>
            {/* <p className='py-0.5 border-b-2 border-transparent cursor-pointer hover:border-yellow-400 w-fit'>About Us</p>
            <p className='py-0.5 border-b-2 border-transparent cursor-pointer hover:border-yellow-400 w-fit'>Contect Us</p>
            <p className='py-0.5 border-b-2 border-transparent cursor-pointer hover:border-yellow-400 w-fit'>Our Vision</p>
            <p className='py-0.5 border-b-2 border-transparent cursor-pointer hover:border-yellow-400 w-fit'>Careera</p> */}
            <ul>
                {meet.map((d,index)=>(
                    <li key={index} value={d} className='py-0.5 border-b-2 border-transparent cursor-pointer hover:border-yellow-400 w-fit capitalize' >{d}</li>
                ))}
            </ul>
        </div>
         <div className='text-sm  px-2 sm:text-base '>
           <ul>
           {content.map((d,index)=>(
                <li className='capitalize py-0.5 border-b-2 border-transparent cursor-pointer hover:border-yellow-400 w-fit' key={index} value={d}>{d}</li>
            ))}
           </ul>
          </div>
          <div className='text-sm  px-2 sm:text-base'>
          <ul>
           {enjoy.map((d,index)=>(
                <li className='py-0.5 border-b-2 border-transparent cursor-pointer hover:border-yellow-400 w-fit' key={index} value={d}>{d}</li>
            ))}
           </ul>
          </div>
           <div className='text-sm  px-2 sm:text-base'>
               <ul>
               {Enteratinment.map((d,index)=>(
                    <li className='py-0.5 border-b-2 border-transparent cursor-pointer hover:border-yellow-400 w-fit' key={index} value={d}>{d}</li>
                ))}
               </ul>
           </div>
           <div className='text-sm  px-2 sm:text-base'>
               <p className='text-xl font-bold'>Policies</p>
                <ul className='py-1'>
                    <li className='py-0.5 cursor-pointer border-b-2 border-transparent hover:border-yellow-400 w-fit text-md'>Fact Check Policy</li>
                     <li className='py-0.5 border-b-2 border-transparent cursor-pointer hover:border-yellow-400 w-fit'>Ethics Policy</li>
                     <li className='py-0.5 border-b-2 border-transparent cursor-pointer hover:border-yellow-400 w-fit'>Corrections Policy</li>
                </ul>
           </div>
           <div className=' text-sm py-2 sm:text-xl px-2'>
            <p className='font-bold '>Advertise On our Site</p>
            <p className='py-0.5 cursor-pointer text-sm'>Terms and conditions</p>
           </div>
        </div>
        
       {/* <p className='mt-2 text-center'> &copy; all copy wright to point application !.</p> */}
    </div>
  )
}

export default Footer;
