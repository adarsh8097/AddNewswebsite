import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
// JSON data for the images
const videoData = [
  {
    id: 1,
    title: "Nature Video",
    imageUrl: "../Assets/images/sport3.webp", // Replace with your actual image path
  },
  {
    id: 2,
    title: "Travel Video",
    imageUrl: "../Assets/images/sport10.webp",
  },
];

const PhotoContent = () => {
  return (
    <div>
       <h2 className="font-black text-lg py-2 my-2 mx-6 text-gray-800">Photo</h2>
        
        <div className="flex items-center -mt-1 w-[120px] mx-6"> {/* Adjust -mt-1 as needed */}
        <div className="flex-1 border-b-4 border-gray-800"></div> {/* Solid Border */}
        <div className="flex-1 border-b-4 border-dotted border-gray-400"></div> {/* Dotted Border */}
      </div>
    <div className="grid grid-rows-1 grid-cols-1 sm:grid-rows-2 md:grid-rows-2 gap-4 p-4 w-[280px]">
      {videoData.map((video) => (
        <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src={video.imageUrl} 
            alt={video.title} 
            className="w-full h-48 object-cover"
          />
          {/* <h3 className="text-center font-bold text-lg p-2">{video.title}</h3> */}
        </div>
      ))}
    </div>
    <h3 className="text-center font-black  p-2 flex space-x-3 cursor-pointer">View All <IoIosArrowForward className='mt-1'/></h3>
  
    </div>
  );
};

export default PhotoContent;
