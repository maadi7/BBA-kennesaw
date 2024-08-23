import React from 'react';
import dosa from "../../assets/dosa.png";
import Image from 'next/image';
import { blurHashToDataURL } from '@/utils/blurhash';

const CateringOptions = () => {
  return (
    <div className='lg:py-20 lg:px-24 xsm:px-12 px-6 py-10 bg-bg1 rounded-[60px] lg:rounded-[100px] z-10 overflow-hidden'
    >
        <p className='xl:text-[90px] xsm:text-[60px]  text-[40px] font-bebas text-bg3 text-center'>Catering options</p>
        <p className='xl:text-[75px] xsm:text-[45px] text-[30px] font-bebas  text-bg3 text-center -mt-5'>live onsite dosa</p>
    <div className='relative flex flex-col custom-lg:flex-row items-center custom-lg:justify-evenly justify-center mt-10' >
        <div className='' >
            <Image 
            src={dosa} 
            alt="dosa"  
            placeholder='blur'
            blurDataURL={blurHashToDataURL("L6I5JF=?D*j?0q~TROxuWA.8nMRl")}
            className='rounded-[40px] md:min-w-[450px] w-[400px] h-[500px] min-h-[560px]' 
            />
        </div>
        <div className='flex flex-col items-start text-bg3 custom-lg:max-w-[800px] w-full font-rubik custom-lg:mt-0 mt-10 custom-lg:ml-10 ml-0' >
            <h2 className='text-xl mb-4 font-semibold'>We offer live dosa counters with multiple types of dosa made by our own expert chefs on location. contact us for the package prices.</h2>
            <ul className='gap-y-2 font-rubik text-xl font-bold list-disc pl-5' >
                <li>Minimum 50 guests</li>
                <li>Chef will be onsite for 2 hours</li>
                <li>Additional hour $150</li>
            </ul>
        </div>

    </div>
    </div>
  )
}

export default CateringOptions