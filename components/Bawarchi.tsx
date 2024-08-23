import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import B from '../assets/letters/B (2).png';
import A from '../assets/letters/a (5).png';
import W from '../assets/letters/w (2).png';
import R from '../assets/letters/r (2).png';
import C from '../assets/letters/c (2).png';
import H from '../assets/letters/h (2).png';
import I from "../assets/letters/i (2).png";
import B1 from "../assets/letters/outline/B (Outline).png";
import A1 from "../assets/letters/outline/a (Outline)-1.png";
import W1 from "../assets/letters/outline/w (Outline).png";
import R1 from "../assets/letters/outline/r (Outline).png";
import C1 from "../assets/letters/outline/c (Outline).png";
import H1 from "../assets/letters/outline/h (Outline).png";
import I1 from "../assets/letters/outline/i (Outline).png";

const Bawarchi = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='hidden w-full custom-lg2:h-full h-[10vh] px-24 max-h-[120vh]  lg:flex items-center justify-center gap-4 overflow-hidden'>
      <div className='flex flex-col items-center justify-center gap-y-10 ' style={{ transform: `translateY(${scrollY * 0.12}px)` }}>
        <Image src={B} alt='B' />
        <Image src={B1} alt='B' />
      </div>
      <div className='flex flex-col items-center justify-center gap-y-10 ' style={{ transform: `translateY(${-scrollY * 0.12}px)` }}>
        <Image src={A1} alt='A' />
        <Image src={A} alt='A' />
      
      </div>
      <div className='flex flex-col items-center justify-center gap-y-10 ' style={{ transform: `translateY(${scrollY * 0.12}px)` }}>
        <Image src={W} alt='W' />
        <Image src={W1} alt='W' />
      </div>
      <div className='flex flex-col items-center justify-center gap-y-10 ' style={{ transform: `translateY(${-scrollY * 0.12}px)` }}>
        <Image src={A1} alt='A' />
        <Image src={A} alt='A' />
      </div>
      <div className='flex flex-col items-center justify-center gap-y-10 ' style={{ transform: `translateY(${scrollY * 0.12}px)` }}>
        <Image src={R} alt='R' />
        <Image src={R1} alt='R' />
      </div>
      <div className='flex flex-col items-center justify-center gap-y-10 ' style={{ transform: `translateY(${-scrollY * 0.12}px)` }}>
        <Image src={C1} alt='C' />
        <Image src={C} alt='C' />
      </div>
      <div className='flex flex-col items-center justify-center gap-y-10 ' style={{ transform: `translateY(${scrollY * 0.12}px)` }}>
        <Image src={H} alt='H' />
        <Image src={H1} alt='H' />
      </div>
      <div className='flex flex-col items-center justify-center gap-y-10 ' style={{ transform: `translateY(${-scrollY * 0.12}px)` }}>
        <Image src={I1} alt='I' />
        <Image src={I} alt='I' />
      </div>
    </div>
  );
}

export default Bawarchi;
