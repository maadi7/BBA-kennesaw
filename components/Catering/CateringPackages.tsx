import React from 'react';
import Image from 'next/image';
import catering from "../../assets/catering.png"
import { blurHashToDataURL } from '@/utils/blurhash';

const CateringPackages = () => {
  return (
    <div className='lg:py-20 lg:px-24 xsm:px-12 px-6 py-10 bg-bg3 rounded-[60px] lg:rounded-[100px] z-10 overflow-hidden'
    >
        <p className='xl:text-[90px] xsm:text-[60px]  text-[40px] font-bebas text-bg1 text-center'>Catering options</p>

    <div className='relative flex flex-col custom-lg:flex-row items-center' >
        <div>
            <Image 
            src={catering} 
            alt="catering" 
            className='rounded-[40px] w-[600px] h-[500px]' 
            placeholder='blur'
            blurDataURL={blurHashToDataURL("LDG@iE~p0zIU9t]~}@kX0h9um+e-")}
            />
        </div>
        <div className='flex flex-col items-start text-bg1  font-rubik custom-lg:ml-10 ml-4' >
            <ul className='gap-y-2 flex flex-col max-w-[600px] font-rubik xsm:text-2xl text-bg1 font-bold list-disc custom-lg:pl-10 pl-0 h-full mt-10 custom-lg:mt-0 text-xl' >
                <li>Prices are for 50 people & above</li>
               <li>All extra items will be charged. Delivery & Setup Charge Extra</li>
               <li>Menu available for take-out orders as per the tray</li> 
                <li>    We serve Halal Meat</li>
            <li>Additional $1 Extra - Goat / Paneer</li>
            <li> Additional $2 Extra - Goat Boneless / Fish, $3 Extra - Shrimp</li>
            <li> 
            50% advance payments on all Catering orders </li>
                
               
            </ul>
        </div>

    </div>
    </div>
  )
}

export default CateringPackages