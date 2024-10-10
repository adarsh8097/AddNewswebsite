import { useState,useEffect } from "react";
import localFont from "next/font/local";
import Navbar from "./Navbar";
import Advertisement from "@/components/Advertisement";
import Carousel from "@/components/Carousel";
import OwlCarouselComponent from "@/components/OwlCarousel";
import TopNewCarousel from "@/components/TopNewCarousel";
import ItemSliderContent from "./ItemSliderContent";
import NewsCardContent from "./NewCardContent";
import Market from "./Market";
import TrandingTopics from '@/components/TrendingTopics';
import RightSideContent from "@/components/RightSideContent";
import MostReadableContent from '@/components/MostRedableContent'
import VideoContent from '@/components/VideoContetn'
import PhotoContent from '@/components/PhotoContetn'
import WebStore from '@/components/WebStore'
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (window.scrollY >= scrollableHeight) {
        setIsFixed(false);  // Change to static when scroll reaches the end
      } else {
        setIsFixed(true);   // Keep it fixed while scrolling
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
     <div>
      {/* <Navbar/> */}
        <Head>
           <title>Home Page</title>
           <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>

      <Advertisement/>
        <Carousel/>
       <TrandingTopics/>
       <div className="flex w-[100%]">
        <div className="w-full sm:h-screen overflow-y-hidden sm:overflow-y-auto overflow-hidden scrollbar-none xl:w-full">
        <ItemSliderContent/>
        <NewsCardContent/>
         <Market/>
        </div>
        <div className={` ${isFixed ? "right-0" : "relative " } `}>
          <RightSideContent />
        </div>
       </div>
       
       <WebStore/>
       <div className=" ">
      <div className='flex space-x-4  sm:flex sm:flex-col xl:flex-row 2xl:w-full w-[100%] 2xl:grid 2xl:grid-cols-2 cardItem'>
      <div>
      <MostReadableContent/>
        </div>
      <div className='flex flex-col sm:grid sm:grid-cols-2 md:grid md:grid-cols-2  lg:grid-cols-2  xl:flex xl:flex-row 2xl:grid '>
      <div className="">
      <VideoContent/>
      </div>
      <div className="">
      <PhotoContent/>
      </div>
      </div>
     </div>
      {/* <hr className=" border-1 border-black mb-4 mt-2 mx-4" /> */}
      </div>
      {/* <RightSideContent/> */}
     </div>
  );
}
