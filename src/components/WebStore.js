import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image'; // Import Next.js Image component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cardData = [
  {
    id: 1,
    title: "Mountain Adventure",
    description: "Explore the majestic mountains and enjoy breathtaking views.",
    image: "../Assets/images/pic2.avif"
  },
  {
    id: 2,
    title: "Beach Getaway",
    description: "Relax by the sea and soak up the sun on a tropical beach.",
    image: "../Assets/images/pic.jpg"
  },
  {
    id: 3,
    title: "City Escape",
    description: "Discover the vibrant energy of a bustling cityscape.",
    image: "../Assets/images/politics2.avif"
  },
  {
    id: 4,
    title: "Desert Safari",
    description: "Experience the thrill of a desert adventure and dunes.",
    image: "../Assets/images/pic5.jpg"
  },
  {
    id: 5,
    title: "Forest Retreat",
    description: "Reconnect with nature in a peaceful forest environment.",
    image: "../Assets/images/pic7.jpg"
  },
  {
    id: 6,
    title: "Forest Retreat",
    description: "Reconnect with nature in a peaceful forest environment.",
    image: "../Assets/images/politics6.jpg"
  },
  {
    id: 7,
    title: "Desert Safari",
    description: "Experience the thrill of a desert adventure and dunes.",
    image: "../Assets/images/sport3.webp"
  },
  {
    id: 8,
    title: "Forest Retreat",
    description: "Reconnect with nature in a peaceful forest environment.",
    image: "../Assets/images/pic4.webp"
  },
  {
    id: 9,
    title: "Forest Retreat",
    description: "Reconnect with nature in a peaceful forest environment.",
    image: "../Assets/images/politics4.jpg"
  }
];

const HeightLights = () => {
  const settings = {
    infinite: true,
    dots: false,
    speed: 1800,
    slidesToShow: 4, // Show 4 cards at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 3, // Show 3 slides on tablet screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 2, // Show 2 slides on mobile screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For small mobile screens
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  

  };

  return (
    <div className='mt-3 overflow-hidden'>
      <span className='text-lg font-black mx-6 py-2 text-gray-800'>Webstories</span>
      <Slider {...settings} className='mx-5'>
        {cardData.map((card) => (
          <div key={card.id} className="card p-2 ">
           
            <div className="2xl:h-[400px]">
             <img className='h-[400px] sm:w-[100%] sm:h-[400px] md:h-[400px] lg:w-[400px] xl:h-[400px]   footercontent' src={card.image} alt='img-product'/>
             </div>
          
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeightLights;

