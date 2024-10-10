import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image'; // Import Next.js Image component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';
import router, { useRouter } from 'next/router';
const cardData = [
  {
    id: 1,
    title: "Mountain Adventure",
    description: "Explore the majestic mountains and enjoy breathtaking views.",
    image: "../Assets/images/sport1.webp"
  },
  {
    id: 2,
    title: "Beach Getaway",
    description: "Relax by the sea and soak up the sun on a tropical beach.",
    image: "../Assets/images/apple1.jfif"
  },
  {
    id: 3,
    title: "City Escape",
    description: "Discover the vibrant energy of a bustling cityscape.",
    image: "../Assets/images/sport10.webp"
  },
  {
    id: 4,
    title: "Desert Safari",
    description: "Experience the thrill of a desert adventure and dunes.",
    image: "../Assets/images/sport6.jpg"
  },
  {
    id: 5,
    title: "Forest Retreat",
    description: "Reconnect with nature in a peaceful forest environment.",
    image: "../Assets/images/sport7.jpg"
  }
];

const BusinessSlider = () => {
   let router = useRouter();

  const settings = {
    infinite: true,
    dots: false,
    speed: 1800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  let handleDatatoPostPage =(id)=>{
     router.push(`/postdetails/${id}`);
  }

  return (
    <div className='sm:mt-3'>
      <span className='text-2xl font-black sm:mx-6 py-2 text-gray-800'>Business and tech</span>
      <Slider {...settings} className='sm:mx-5 rounded mb-2 my-3 cursor-pointer'>
        {cardData.map((card) => (
          <div key={card.id} className="card" onClick={() => handleDatatoPostPage(card.id)}>
            {/* Use Next.js Image component for optimized images */}
            <img 
              src={card.image} 
              alt={card.title} 
              layout="responsive"
              className="rounded w-full"
            />
            {/* <h3>{card.title}</h3>
            <p>{card.description}Read More </p> */}
          </div>
        ))}
      </Slider>
     
    </div>
  );
};

export default BusinessSlider;
