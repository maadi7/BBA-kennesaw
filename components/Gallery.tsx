import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import arrowup from "../assets/arrow-up.png";
import first from "../assets/gallery/1.png";
import second from "../assets/gallery/2.png";
import third from "../assets/gallery/3.png";
import fourth from "../assets/gallery/4.png";
import fifth from "../assets/gallery/5.png";
import { fadeIn } from '@/utils/motion';
import {motion} from "framer-motion";
import { blurHashToDataURL } from '@/utils/blurhash';
import Link from 'next/link';

const Gallery = () => {
  const images = [first, second, third, fourth, fifth]; 
  const hash = ["L9DIgz^K9~^+0N0g$$MxJV?H~BWU", "LGC?Ab~W?a%Lxu%Ms.ad%2bIIqNH", "L7HK|L~pSQ^*00~VNfD*TgV@s:IU", "L8C?M.}s^l^%.8x[?u-:u357JRI;", "LGDc2RI{x_Ir~99F-jRiIWIWxWkC"]
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className='lg:py-20 lg:px-24 xsm:px-12 px-6 py-10 bg-bg2 rounded-[60px] lg:rounded-[100px] relative -mt-20 flex flex-col custom-lg:flex-row items-center   z-10 overflow-hidden'>
      <motion.div
    variants={fadeIn("right", "tween", 0.2, 0.5)} 
    initial="hidden"
    whileInView="show"
    viewport={{ once: true}}
    className='custom-lg:mr-10 custom-lg:mb-0 mb-10 custom-lg:w-1/2 w-full flex items-center justify-center'
      
      >
        <Image 
          src={images[currentImageIndex]} 
          placeholder="blur"
          blurDataURL={blurHashToDataURL(hash[currentImageIndex])}
          alt='reviews' 
          className='xsm:w-[500px] xsm:h-[630px] w-[400px] h-[530px] rounded-[80px] bg-contain' 
        />
      </motion.div>
      
      <motion.div className='flex flex-col custom-lg:items-start  custom-lg:w-1/2 w-full'
      variants={fadeIn("left", "tween", 0.2, 0.5)} 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true}}
      >
        <h1 className='xl:text-[80px] xsm:text-[60px]  xsm:leading-[55px] xl:leading-[75px] 
        text-[50px] leading-[45px]
        font-bebas   xsm:mb-10 mb-5 text-bg1'>
        Atlanta’s #1 Indian Restaurant is now in Kenessaw. 

        </h1>
        <p className='xsm:text-2xl text-xl font-rubik custom-lg:max-w-[680px] max-w-sreen text-bg1 xsm:mb-10 mb-6'>
          Bawarchi Biryanis isn&apos;t just about food. It&apos;s about the generations of chefs who kept the cooking traditions alive and are behind the delicious dishes we serve at our restaurant.
        </p>
        <Link href="/our-story" >
        <p className='flex items-center font-bebas xsm:text-3xl text-xl text-bg1 font-bold cursor-pointer'>
          READ MORE <Image src={arrowup} alt='arrow-up' className='xsm:w-[45px] w-[35px] xsm:h-[45px] h-[35px]' />
        </p>
        </Link>
      </motion.div>
    </div>
  );
}

export default Gallery;
