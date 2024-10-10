
import React from 'react'
import DashboardHeader from './DashboardHeader'
import AdminSidebar from './AdminSidebar'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import AllPost from './AllPost';
import router from 'next/router';


const DashBoard = ({}) => {
    const handleItem = ()=>{
        router.push('/Admin/addnewpost');
      }
  return (
    <div className="">
       {/* <DashboardHeader/>
       <AdminSidebar/> */}
       <div className=" mx-[16rem] w-full overflow-hidden">
        <p className="font-black text-2xl">Posts</p>
         <div className="py-3 flex space-x-4 text-gray-800">
            <p>All (120)</p>  
            <p>Drafts(10)</p>

         </div>

         <div className="space-y-4 flex flex-rows space-x-8  ">
      {/* Title and Add New Post Button */}
      <div className="flex justify-evenly items-center  space-x-4 mt-3">
        <p className="text-xl font-bold">All Posts</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={ handleItem}>+ Add New Post</button>
      </div>

      <div className="flex space-x-14">
        {/* Search by Keywords */}
        <div className="flex items-center space-x-2 bg-white border border-gray-300 px-3 py-2 rounded-md ">
          <FaMagnifyingGlass className="text-gray-500" />
          <input
            type="text"
            placeholder="Search by Keywords"
            className="w-full outline-none bg-transparent "
          />
        </div>

        {/* Bulk Action */}
        <div className="flex items-center bg-white border border-gray-300 px-3 py-2 rounded-md w-1/4">
          <select className="w-full outline-none bg-transparent">
            <option>Bulk Action</option>
            {/* Add other options here */}
          </select>
        </div>

        {/* Date Input */}
        <div className="flex items-center bg-white border border-gray-300 px-3 py-2 rounded-md w-1/2">
            <input
                type="text"
                placeholder=""
                value="1 April 2023 - 16 April 2024"
                className="w-full outline-none bg-transparent"
            />
            <div className="bg-blue-600 text-white p-2 rounded-md ml-2 flex items-center justify-center">
                <FaRegCalendarAlt className="text-white" />
            </div>
            </div>

      </div>
    </div>
       </div>

        <div>
            <AllPost/>
        </div>
    </div>
  )
}

export default DashBoard
