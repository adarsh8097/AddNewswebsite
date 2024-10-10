import React from 'react';

const MostReadableContent = () => {
  const data = [
    {
      id: 1,
      title: "Understanding React",
      description: "Elections 2024: Live updates Trump set to face off in first debate tomorrow",
      imageUrl: "/images/react.jpg",
    },
    {
      id: 2,
      title: "JavaScript ES6 Features",
      description: "Elections 2024: Live updates Trump set to face off in first debate tomorrow",
      imageUrl: "/images/javascript.jpg",
    },
    {
      id: 3,
      title: "CSS Grid Layout",
      description: "Elections 2024: Live updates Trump set to face off in first debate tomorrow",
      imageUrl: "/images/css-grid.jpg",
    },
    {
      id: 4,
      title: "Node.js for Beginners",
      description: "Elections 2024: Live updates Trump set to face off in first debate tomorrow",
      imageUrl: "/images/node.jpg",
    },
    {
      id: 5,
      title: "Web Accessibility",
      description: "Elections 2024: Live updates Trump set to face off in first debate tomorrow",
      imageUrl: "/images/accessibility.jpg",
    },
    {
      id: 6,
      title: "React Hooks Explained",
      description: "Elections 2024: Live updates Trump set to face off in first debate tomorrow",
      imageUrl: "/images/hooks.jpg",
    },
  ];

  return (
    <div className=' w-[100%]'>
       <h2 className="font-black text-lg py-2 my-2 mx-6 text-gray-800">Most Read</h2>
        
        <div className="flex items-center -mt-1 w-[120px] mx-6"> {/* Adjust -mt-1 as needed */}
        <div className="flex-1 border-b-4 border-gray-800"></div> {/* Solid Border */}
        <div className="flex-1 border-b-4 border-dotted border-gray-400"></div> {/* Dotted Border */}
      </div>
        

    <div className="grid grid-cols-1 w-[100%] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4 md:w-[720px] lg:w-[999px] xl:w-[720px]">
      {data.map(item => (
        <div key={item.id} className="bg-white  rounded-lg overflow-hidden">
          {/* <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" /> */}
          <div className="p-4 flex space-x-2">
            {/* <h3 className="text-lg font-semibold">{item.title}</h3> */}
             <h3>{item.id}</h3>
            <p className="text-gray-800 font-light text-md text-justify md:flex md:justify-center md:align-center">{item.description}</p>
             
          </div>
          <p className='text-gray-300  text-right mb-2 mx-4'>2 days ago</p>
          <hr className="border-dotted border-1 border-black" />
        </div>
      ))}
    </div>
    </div>
  );
};

export default MostReadableContent;
