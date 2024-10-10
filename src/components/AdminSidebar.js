import React,{useState} from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineLaptop } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";
import { TiHomeOutline } from "react-icons/ti";
import { RiDashboardLine } from "react-icons/ri";
import { FaHashtag } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";
import { CiMobile1 } from "react-icons/ci";
import router from 'next/router';
const AdminSidebar = () => {
    const [activeItem, setActiveItem] = useState('allPosts'); // State to keep track of the active item
    
    const handleItemClick = (item) => {
        setActiveItem(item); // Set the clicked item as active
    };
 
    return (
        <div className="w-64 h-screen bg-customblue  text-white p-4 mt-16 fixed">
            {/* Search Box */}
            <div className="flex items-center border bg-[#146797] p-2 rounded mb-6">
                <FaMagnifyingGlass className="text-white mr-2" />
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent outline-none placeholder-white text-white w-full"
                />
            </div>

            {/* Menu Items */}
            <div className="space-y-4">
                {/* Profile */}
                <div
                    className={`flex items-center space-x-3 p-2 rounded cursor-pointer ${
                        activeItem === 'profile' ? 'bg-blue-600' : 'hover:bg-blue-600'
                    }`}
                    onClick={() => handleItemClick('profile')}
                >
                    <FaUserCircle />
                    <p>Profile</p>
                </div>

                {/* All Posts */}
                <div
                    className={`flex items-center justify-between p-2 rounded cursor-pointer ${
                        activeItem === 'allPosts' ? 'bg-blue-600' : 'hover:bg-blue-600'
                    }`}
                    onClick={() => handleItemClick('allPosts')}
                >
                    <div className="flex items-center space-x-3">
                        <AiOutlineLaptop />
                        <p>All Posts</p>
                    </div>
                    <FaAngleDown />
                </div>

                {/* Homepage */}
                <div
                    className={`flex items-center justify-between p-2 rounded cursor-pointer ${
                        activeItem === 'homepage' ? 'bg-blue-600' : 'hover:bg-blue-600'
                    }`}
                    onClick={() => handleItemClick('homepage')}
                >
                    <div className="flex items-center space-x-3">
                        <TiHomeOutline />
                        <p>Homepage</p>
                    </div>
                    <FaAngleDown />
                </div>

                {/* Categories */}
                <div
                    className={`flex items-center space-x-3 p-2 rounded cursor-pointer ${
                        activeItem === 'categories' ? 'bg-blue-600' : 'hover:bg-blue-600'
                    }`}
                    onClick={() => handleItemClick('categories')}
                >
                    <RiDashboardLine />
                    <p>Categories</p>
                </div>

                {/* Tags */}
                <div
                    className={`flex items-center space-x-3 p-2 rounded cursor-pointer ${
                        activeItem === 'tags' ? 'bg-blue-600' : 'hover:bg-blue-600'
                    }`}
                    onClick={() => handleItemClick('tags')}
                >
                    <FaHashtag />
                    <p>Tags</p>
                </div>

                {/* Media */}
                <div
                    className={`flex items-center space-x-3 p-2 rounded cursor-pointer ${
                        activeItem === 'media' ? 'bg-blue-600' : 'hover:bg-blue-600'
                    }`}
                    onClick={() => handleItemClick('media')}
                >
                    <MdOndemandVideo />
                    <p>Media</p>
                </div>

                {/* Manage Users */}
                <div
                    className={`flex items-center space-x-3 p-2 rounded cursor-pointer ${
                        activeItem === 'manageUsers' ? 'bg-blue-600' : 'hover:bg-blue-600'
                    }`}
                    onClick={() => handleItemClick('manageUsers')}
                >
                    <HiUserGroup />
                    <p>Manage Users</p>
                </div>

                {/* Webstories */}
                <div
                    className={`flex items-center space-x-3 p-2 rounded cursor-pointer ${
                        activeItem === 'webstories' ? 'bg-blue-600' : 'hover:bg-blue-600'
                    }`}
                    onClick={() => handleItemClick('webstories')}
                >
                    <CiMobile1 />
                    <p>Webstories</p>
                </div>
            </div>
        </div>
    );
}

export default AdminSidebar
