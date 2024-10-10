import React from 'react';
import dynamic from 'next/dynamic'; // Import dynamic from Next.js

// Dynamically import OwlCarousel without SSR
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false, // Disable server-side rendering
});

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const OwlCarouselComponent = () => {
  const options = {
    loop: true, 
    margin: 10, 
    autoplay: true, 
    autoplayTimeout: 3000, 
    nav: true, 
    dots: true, 
    items: 1, 
  };

  return (
    <div className="container mx-auto">
      <OwlCarousel className="owl-theme" {...options}>
        <div className="item bg-blue-400 p-8 rounded-lg shadow-lg">
          <h3 className="text-center text-white">Slide 1</h3>
        </div>
        <div className="item bg-green-400 p-8 rounded-lg shadow-lg">
          <h3 className="text-center text-white">Slide 2</h3>
        </div>
        <div className="item bg-red-400 p-8 rounded-lg shadow-lg">
          <h3 className="text-center text-white">Slide 3</h3>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default OwlCarouselComponent;
