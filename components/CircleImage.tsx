import React from 'react';
import Image from 'next/image';
import Briyani from "../assets/Group 1.png";
import ImageTopText from "../assets/Linked Path Group.png";

const CircleImage = () => {
  return (
    <div className='py-10 px-6 sm:py-20 sm:px-16 md:px-24 bg-bg1 rounded-[50px] sm:rounded-[100px] -mt-10 sm:-mt-20 flex flex-col items-center justify-between z-10 relative'>
      <h1 className='font-bebas text-bg2 text-4xl sm:text-5xl md:text-7xl text-center'>A DECADE IN NUMBERS</h1>
      <div className='relative mt-5'>
        <Image src={Briyani} alt='food-Image' className='w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[690px] md:h-[700px]' />
        <div className='absolute -top-2 sm:-top-2 md:-top-2 -left-4 sm:-left-2  md:-left-10'>
          <Image src={ImageTopText} alt='border' className='w-[320px] h-[240px] sm:w-[400px] sm:h-[300px] md:w-[728px] md:h-[542px]' />
        </div>
      </div>
    </div>  
  );
}

export default CircleImage;