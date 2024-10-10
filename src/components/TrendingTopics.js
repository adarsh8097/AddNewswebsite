import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
const TrendingTopics = () => {
  const trendingTopics = [
    { id: 1, hashtag: "#Modi" },
    { id: 2, hashtag: "#Science" },
    { id: 3, hashtag: "#Sports" },
    { id: 4, hashtag: "#Technology" },
    { id: 5, hashtag: "#Entertainment" },
    { id: 6, hashtag: "#Health" },
    { id: 7, hashtag: "#Politics" },
    { id: 8, hashtag: "#Education" },
    { id: 9, hashtag: "#Travel" },
    { id: 10, hashtag: "#Business" },
  ];

  // Custom Next Arrow
  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={'absolute  -right-7 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer'}
        onClick={onClick}
      >
        <button className="bg-gray-200 text-white p-2 mx-1 sm:mx-0 rounded-full"> <IoIosArrowForward className="text-black"/></button>
      </div>
    );
  };

  // Custom Prev Arrow
  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={`absolute -left-7 top-1/2 transform -translate-y-1/2 z-1000 cursor-pointer`}
        onClick={onClick}
      >
        <button className="bg-gray-300 border shadow-lg text-white p-2 mx-1 sm:mx-2 sm:p-2 Z-1000 rounded-full"><IoIosArrowBack className="text-black"/> </button>
      </div>
    );
  };

  const settings = {
    infinite: true,
    speed: 1200,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: <NextArrow />, // Add next arrow
    prevArrow: <PrevArrow />, // Add prev arrow
    responsive: [
      {
        breakpoint: 1024, // For very small screens (e.g., phones)
         settings: {
           slidesToShow: 4, // Show 1 item if needed   
         },
     },
      {
        breakpoint: 768, // For very small screens (e.g., phones)
         settings: {
           slidesToShow: 3, // Show 1 item if needed
         },
     },
      {
         breakpoint: 480, // For very small screens (e.g., phones)
          settings: {
            slidesToShow: 1, // Show 1 item if needed
          },
      }
    ]
  };

  return (
    <div className="trending-topics-container px-4 sm:my-6 relative flex xl:space-x-12 w-[100%] overflow-hidden flex-col sm:flex sm:flex-row ">
      <h2 className="font-black text-lg  py-1 mb-2 text-customGray w-full sm:w-[89px]">Trending Topics</h2>
      <div className="w-full sm:w-[75%] md:w-[75%] xl:w-[60%] p-4">
      <Slider {...settings} className=" w-full sm:w-full md:w-full xl:w-full">
        {trendingTopics.map((topic) => (
          <div key={topic.id} className="px-3 sm:px-3  sm:mx-1 w-full ">
            <div className="border rounded-2xl py-2 sm:px-3 text-center cursor-pointer hover:border-blue-500 hover:bg-[#ECF4FF] xl:px-8">
              <p className="text-md font-medium text-customGray ">{topic.hashtag}</p>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default TrendingTopics;
