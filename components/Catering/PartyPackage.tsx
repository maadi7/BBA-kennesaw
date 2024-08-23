import React from 'react';
import Image from 'next/image';
import dosaRoll from "../../assets/dosa-roll.png"
import { blurHashToDataURL } from '@/utils/blurhash';

const PartyPackage = () => {
  return (
    <div className='lg:py-20 lg:px-24 xsm:px-12 px-6 py-10 bg-bg3 rounded-[60px] lg:rounded-[100px] z-10 overflow-hidden'
    >
        <p className='xl:text-[90px] xsm:text-[60px]  text-[40px] font-bebas text-bg1 text-center'>Dosa Party Packages</p>

    <div className='relative flex flex-col custom-lg:flex-row items-center' >
        <div>
            <Image 
            placeholder='blur'
            src={dosaRoll} 
            alt="Masala Dosa" 
            className='rounded-[40px] w-[600px] h-[460px]' 
            blurDataURL={blurHashToDataURL("L9L{u7D%03vy6C}k;cD*170p-O:#")}
            />
        </div>
        <div className='flex flex-col items-start text-bg1  font-rubik custom-lg:ml-10 ml-4' >
            <ul className='gap-y-2 flex flex-col max-w-[610px] font-rubik xsm:text-2xl text-xl text-bg1 font-bold list-disc custom-lg:pl-10 pl-0  h-full mt-10 custom-lg:mt-0' >
                <li>Prices are for 50 people & above</li>
               <li>All extra items will be charged. Delivery & Setup Charge Extra</li>
               <li>Tax Applicable for all items</li> 
                <li>Deposit required for Chaffing Dishes</li>
            </ul>
        </div>

    </div>
    <div className='bg-bg3 py-10'>
      <div className='flex flex-col lg:flex-row items-stretch gap-y-6 lg:gap-x-4'>
        {/* Gold Package */}
        <div className='w-full lg:w-1/2 bg-bg1 text-bg2 flex flex-col py-10 px-6 lg:px-10 items-center gap-y-4 rounded-[40px]'>
          <h2 className='text-3xl lg:text-5xl font-bebas text-center'>Gold Package</h2>
          <h3 className='text-2xl lg:text-4xl font-bebas text-center'>4 types of dosa</h3>
          <p className='font-rubik text-lg lg:text-2xl text-center flex-1'>
            Gold Package includes 4 types of dosa: Plain Dosa, Onion Dosa, Masala Dosa, Mysore Masala Dosa, Idli, Medhu Vada, Chutney (Coconut & Tomato), Sambar, Dessert.
          </p>
        </div>

        {/* Platinum Package */}
        <div className='w-full lg:w-1/2 bg-bg1 text-bg2 flex flex-col py-10 px-6 lg:px-10 items-center gap-y-4 rounded-[40px]'>
          <h2 className='text-3xl lg:text-5xl font-bebas text-center'>Platinum Package</h2>
          <h3 className='text-2xl lg:text-4xl font-bebas text-center'>6 types of dosa</h3>
          <p className='font-rubik text-lg lg:text-2xl text-center flex-1'>
            Platinum Package includes 6 types of dosa: Plain Dosa, Onion Dosa, Onion Chilli Dosa, Masala Dosa, Mysore Masala Dosa, Onion Masala Dosa, Idli, Medhu Vada, Pongal/Upma, Curd Rice, Chutney (Coconut & Tomato), Sambar, Dessert.
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default PartyPackage