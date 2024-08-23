import React from 'react';
import Image from 'next/image';
import Image2 from "../../assets/storyImg2.png"
import { blurHashToDataURL } from '@/utils/blurhash';

const StoryImage = () => {
  return (
    <div className='lg:py-20 lg:px-24 xsm:px-12 px-6 py-10 bg-bg1 rounded-[60px] lg:rounded-[100px] relative flex flex-col custom-lg:flex-row items-center custom-lg:justify-evenly justify-center z-10 overflow-hidden'>
    <div
  className='custom-lg:mr-10 custom-lg:mb-0 mb-20 custom-lg:w-1/2 w-full flex items-start justify-center custom-lg:mt-0 mt-10' 
    >
      <Image
        src={Image2}
        alt='reviews' 
        className='xsm:w-[500px] xsm:h-[630px] w-[400px] h-[530px] rounded-[50px]  bg-contain' 
        blurDataURL={blurHashToDataURL("L6Dl7o+sF5^*030h%0IV0g^+~Bt6")}
        placeholder='blur'
      />
    </div>
    
    <div className='flex flex-col custom-lg:items-start items-center  custom-lg:w-1/2 w-full'>
      <h1 className='xl:text-[80px] xsm:text-[60px]  xsm:leading-[55px] xl:leading-[75px] 
      text-[45px] leading-[45px]
      font-bebas text-bg2 custom-lg:mb-0 mb-10'>
        We cannot wait for you to try out our delicious Indian food

      </h1>
     
      
     
    </div>
  </div>
  )
}

export default StoryImage