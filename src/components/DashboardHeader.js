import React from 'react';
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";

const DashboardHeader = () => {
  return (
    <header className="bg-white text-black shadow-sm py-4 fixed w-full z-[9999]">
      <nav className="flex items-center justify-between px-6">
        {/* Left Section (Back Arrow and Profile Title) */}
        <div className="flex items-center space-x-4">
          <div className="bg-gray-200 py-2 px-2 rounded">
          <MdOutlineArrowBackIosNew className="text-lg cursor-pointer "/> 
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-500">|</span>
            <p className="text-gray-700 font-medium">Profile</p>
          </div>
        </div>

        {/* Middle Section (Icons: Search and Notification) */}
       

        {/* Right Section (Profile Image and Name) */}
        <div className="flex items-center space-x-5">
        <div className="flex justify-end space-x-6">
          <FaMagnifyingGlass className="text-xl cursor-pointer" />
          <IoMdNotifications className="text-2xl cursor-pointer" />
          <span className="text-gray-500">|</span>
        </div>

          <div className="w-[40px] h-[40px] rounded-md overflow-hidden border">
            <img 
              src="../Assets/images/userprofile.png" 
              alt="admin-picture" 
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-gray-700 font-semibold">Amelie Stone</p>
          <span className="text-gray-500">|</span>
        </div>
      </nav>
    </header>
  );
}

export default DashboardHeader;
