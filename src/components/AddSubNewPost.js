import React, { useState } from 'react';
import EditableTextBox from './EditableTextBox';

const AddSubNewPost = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [permalink, setPermalink] = useState('');
  const [isEditingPermalink, setIsEditingPermalink] = useState(false);

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl); // Set the image URL
      setPermalink(imageUrl); // Set the permalink to the image URL
    }
  };

  // Enable editing of the permalink
  const handleEditPermalink = () => {
    setIsEditingPermalink(true);
  };

  // Handle permalink change when editing
  const handlePermalinkChange = (event) => {
    if (isEditingPermalink) {
      setPermalink(event.target.value);
    }
  };

  return (
    <div className="max-w-4xl p-6 bg-white rounded shadow-md mx-auto">
      {/* Image Upload Section */}
      <h2 className="text-xl font-bold mb-4">Upload Image</h2>
      <div className="flex flex-col md:flex-row md:space-x-6 mb-6">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <input
            type="file"
            className="w-full border border-gray-300 px-4 py-2 rounded cursor-pointer"
            onChange={handleImageUpload}
          />
        </div>
        {imageUrl && (
          <div className="md:w-1/2">
            <img src={imageUrl} alt="Uploaded" className="rounded shadow-md w-full" />
          </div>
        )}
      </div>

      {/* Title and Subtitle Section */}
      <div className="flex flex-col md:flex-row md:space-x-6 mb-6">
        {/* Title Input */}
        <div className="md:w-1/2 mb-4 md:mb-0">
          <h2 className="text-lg font-bold mb-2">Title</h2>
          <input
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            placeholder="Enter the title..."
          />
        </div>

        {/* Subtitle Input */}
        <div className="md:w-1/2">
          <h2 className="text-lg font-bold mb-2">Subtitle</h2>
          <input
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            placeholder="Enter the subtitle..."
          />
        </div>
      </div>

      {/* Permalink Section */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2">Permalink</h2>
        <div className="flex items-center space-x-2">
          <input
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            value={permalink}
            onChange={handlePermalinkChange}
            readOnly={!isEditingPermalink} // Make input read-only unless editing
          />
          <button
            onClick={handleEditPermalink}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
          >
            Edit
          </button>
        </div>
      </div>

      {/* Body Section */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2">Body</h2>
        <EditableTextBox />
      </div>
    </div>
  );
};

export default AddSubNewPost;
