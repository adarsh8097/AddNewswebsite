import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Carousel = () => {
  const productSlider = [
    {
      id: 1,
      description: "A beautiful sunset casting golden hues over the mountain peaks.",
    },
    {
      id: 2,
      description: "Crystal clear blue ocean waves crashing onto the shore.",
    },
    {
      id: 3,
      description: "A serene forest shrouded in morning mist.",
    },
    {
      id: 4,
      description: "A tranquil lake surrounded by towering mountains.",
    },
    {
      id: 5,
      description: "A breathtaking night sky filled with stars.",
    },
  ];

  // Define the NextArrow component
  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={`absolute -right-4 top-2/3 sm:top-1/2 transform -translate-y-1/2 z-15 mx-6 text-black `}
        onClick={onClick}
      >
         <button className=" text-white p-0.1 border rounded-full "> <IoIosArrowForward className="text-black text-2xl"/></button>
         </div>
    );
  };

  // Define the PrevArrow component
  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={` absolute right-10 top-2/3 sm:top-1/2 transform -translate-y-1/2 z-10 mx-6 `}
        onClick={onClick}
      >
        <button className="   text-white p-0.1 Z-1000 border rounded-full"><IoIosArrowBack className="text-black text-2xl"/> </button>
     
      </div>
    );
  };

  const settings = {
    infinite: true,
    speed: 1800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow  />,
    
  };

  return (
    <div className="carousel-container relative overflow-hidden px-2 flex flex-col sm:flex sm:flex-row  justify-start items-start md:-mt-5  xl:mt-3 ">
      
       <div className="w-full  bg-[#094998] flex justify-center items-center sm:w-48 sm:py-3 md:w-48 md:h-[51px] 2xl:px-0">
  <h2 className="font-bold text-center text-xl text-white md:text-base">
    Breaking News
  </h2>
</div>
        <div className=" w-[100%] sm:w-[75%] md:w-[100%] lg:w-[100%] xl:w-[100%] 2xl:w-[100%] overflow-hidden "> 
      <Slider {...settings} className="sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full">
        {productSlider.map((p) => (
          <div key={p.id} className="flex justify-start items-start  sm:py-3.5 bg-[#ECF4FF] ">
            <div className="w-full px-2 h-16 sm:h-auto sm:text-ellipsis sm:whitespace-nowrap sm:overflow-hidden ">
              <p className="text-customGray text-start font-normal text-base">{p.description}</p>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default Carousel;
