// Categories.js
import React from 'react';

const CategoriesCard = () => {
  const categoriesData = [
    {
      id: 1,
      title: "Crime",
      imageUrl: "../Assets/images/crime1.avif", // Replace with the actual image path
    },
    {
      id: 2,
      title: "Health",
      imageUrl: "../Assets/images/health1.avif",
    },
    {
      id: 3,
      title: "Politics",
      imageUrl: "../Assets/images/politics2.avif",
    },
    {
      id: 4,
      title: "Sport",
      imageUrl: "../Assets/images/sport3.webp",
    },
    {
      id: 5,
      title: "Science",
      imageUrl: "../Assets/images/sport6.jpg",
    },
    {
      id: 6,
      title: "Marketing",
      imageUrl: "../Assets/images/apple1.jfif",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 lg:w-full md:w-full xl:w-[75%] 2xl:w-[80%] w-[100%]">
      {categoriesData.map((category) => (
        <div 
          key={category.id} 
          className="relative group w-full h-32 rounded-lg overflow-hidden shadow-md bg-cover bg-center cursor-pointer border border-green-500  2xl:h-48"
          style={{ backgroundImage: `url(${category.imageUrl})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-75 transition-opacity duration-300 flex items-center justify-center group-hover: border-green-500">
            <h2 className="text-white text-lg font-bold">{category.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoriesCard;
