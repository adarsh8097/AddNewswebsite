import React from 'react';
import AddSubNewPost from './AddSubNewPost';

const AddNewPost = () => {
  return (
    <div className="w-[80%] p-6  rounded shadow-sm mx-[16rem]">
      {/* Header Section */}
      <div className="mb-6 ">
        <h2 className="font-bold text-2xl text-gray-800">Add New Post</h2>
      </div>

      {/* Content Section */}
      <div className="flex justify-between items-center w-full border-b pb-4 mb-4">
        {/* Left Section (Post Count) */}
        <div className="text-gray-600">
          <p className="font-medium">All Posts (120)</p>
        </div>

        {/* Right Section (Preview & Publish Options) */}
        <div className="flex space-x-4 items-center">
          {/* Preview Button */}
          <button className="text-blue-500 font-medium hover:underline">
            Preview Post
          </button>

          {/* Publish Dropdown */}
          <select className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300">
            <option>Publish</option>
            <option>Draft</option>
            <option>Pending Review</option>
          </select>
        </div>
      </div>

      {/* Post Form (For Future Implementation) */}
      <div>
        {/* Here you can add your form for creating the post */}
        <AddSubNewPost/>
      </div>
    </div>
  );
};

export default AddNewPost;
