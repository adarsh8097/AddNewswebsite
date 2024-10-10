import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BreakingHeadLine = () => {
  const productSlider = [
    {
      id: 1,
      title: "Sunset Over the Mountains",
      description:"Elections 2024: Live updates Trump set to face off in first debate tomorrow",
      imageUrl: "../Assets/images/politics1.jpg",
    },
    {
      id: 2,
      title: "Ocean Waves",
      description:"Elections 2024: Live updates Trump set to face off in first debate tomorrow",
      imageUrl: "../Assets/images/politics2.jpg",
    },
    {
      id: 3,
      title: "Misty Forest",
      description:"Elections 2024: Live updates Trump set to face off in first debate tomorrow",
      imageUrl: "../Assets/images/politics2.avif",
    },
    {
      id: 4,
      title: "Mountain Lake",
      description:"Elections 2024: Live updates Trump set to face off in first debate tomorrow",
      imageUrl: "../Assets/images/politics4.jpg",
    },
    {
      id: 5,
      title: "Starry Night",
      description:"Elections 2024: Live updates Trump set to face off in first debate tomorrow",
      imageUrl: "../Assets/images/politics6.jpg",
    },
  ];

  // Define the NextArrow component
  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={`${className} absolute right-0 top-1/2 transform -translate-y-1/2 z-10 mx-6`}
        onClick={onClick}
      >
        {/* <button className="p-3 rounded-full text-white bg-black">➡️</button> */}
      </div>
    );
  };

  // Define the PrevArrow component
  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={`${className} absolute left-0 top-1/2 transform -translate-y-1/2 z-10 mx-6`}
        onClick={onClick}
      >
        {/* <button className="p-3 rounded-full text-white bg-black">⬅️</button> */}
      </div>
    );
  };

  // const settings = {
  //   infinite: true,
  //   speed: 1800,
  //   slidesToShow: 3, // Show two items at a time
  //   slidesToScroll: 1, // Slide one at a time
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   // nextArrow: <NextArrow />,
  //   // prevArrow: <PrevArrow />,
  //   vertical: true, // Enable vertical sliding
  //   verticalSwiping: true,
  //   responsive:[
  //     {
  //       breakpoint:14
  //     }
  //   ]
  // };
  const settings = {
    infinite: true,
    speed: 1800,
    slidesToShow: 3, // Default number of slides to show
    slidesToScroll: 1, // Default number of slides to scroll
    autoplay: true,
    autoplaySpeed: 3000,
    vertical: true, // Enable vertical sliding
    verticalSwiping: true,
  
  };
  
  return (
    // <div className="carousel-container relative overflow-hidden">
    //   <div className=" w-[100%] sm:w-[100%] md:w-[100%] 2xl:w-[60%] w-[70%] px-1 xl:w-[50%]">
    //   <Slider {...settings} className="sm:w-full md:w-full lg:w-full">
    //     {productSlider.map((p) => (
    //       <div key={p.id} className="justify-center items-center">
    //         <div className="flex flex-row bg-white rounded-lg overflow-hidden cursor-pointer border shadow-lg w-full">
    //           <div className="sm:w-[200px] xl:w-[153px] lg:h-[110px] md:w-[250px] 2xl:w-[315px] p-2">
    //           <img
    //             src={p.imageUrl}
    //             alt={p.title}
    //             className="w-full object-cover "
    //           />
    //           </div>
    //           <div className="px-6 py-2 ">
    //             {/* <h2 className="text-xl font-bold mb-2">{p.title}</h2> */}
    //             <p className="text-sm -mt-1 2xl:mt-2 font-semibold text-gray-800 text-justify">{p.description}</p>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </Slider>
    //   </div>
    // </div>
    <div className="carousel-container relative overflow-hidden">
  <div className="w-[100%] sm:w-[100%] md:w-[100%] 2xl:w-[60%] xl:w-[50%] px-1">
    <Slider {...settings} className="sm:w-full md:w-full lg:w-full w-full">
      {productSlider.map((p) => (
        <div key={p.id} className="justify-center items-center">
          <div className="flex flex-row bg-white rounded-lg  cursor-pointer overflow-hidden shadow-md w-full">
            {/* Image Section */}
            <div className=" w-full  sm:w-[80px] md:w-[120px] xl:w-[153px] lg:h-[110px] md:w-[250px]  p-2">
              <img
                src={p.imageUrl}
                alt={p.title}
                className="w-full object-cover 2xl:w-[20rem] 2xl:h-[10rem]"
              />
            </div>

            {/* Description Section */}
            <div className="flex-grow  md: flex-shrink sm:w-24 md:w-48 px-6 py-2">
              {/* You can add a title here if needed */}
              {/* <h2 className="text-xl font-bold mb-2">{p.title}</h2> */}
              <p className="text-sm -mt-1 2xl:mt-2 font-semibold text-gray-800 text-justify">
                {p.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>

  );
};

export default BreakingHeadLine;
