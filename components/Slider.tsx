import React from 'react';
import Image1 from "../assets/slider/BBA1.jpg";
import Image2 from "../assets/slider/BBA2.jpg";
import Image3 from "../assets/slider/BBA3.jpg";
import Image4 from "../assets/slider/BBA4.jpg";
import Image5 from "../assets/slider/BBA5.jpg";
import Image from 'next/image';

const Slider = () => {
  return (
    <div className="relative md:h-[150vh] h-[120vh] w-full overflow-hidden -z-10 ">
      <div className="absolute top-0 left-0 w-full h-full flex ">
        <div className="flex-shrink-0 ">
          <Image src={Image2} alt="Slide 1" className="w-full h-full object-cover" />
        </div>
       
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-10">
        <div className='absolute font-bebas top-16 animate-scroll text-4xl   text-white flex w-full whitespace-nowrap ' >
        <span className="mr-5">Serving Authentic Indian Food In Kennesaw</span>
        <span className="mr-5">Serving Authentic Indian Food In Kennesaw</span>
        <span className="mr-5">Serving Authentic Indian Food In Kennesaw</span>
        <span className="mr-5">Serving Authentic Indian Food In Kennesaw</span>
        <span className="mr-5">Serving Authentic Indian Food In Kennesaw</span>
        <span className="mr-5">Serving Authentic Indian Food In Kennesaw</span>
        <span className="mr-5">Serving Authentic Indian Food In Kennesaw</span>
 
       
        
            </div>
        <div className="text-center">
          <h1 className="text-bg2 md:text-4xl sm:text-3xl text-xl leading-8 max-w-[933px] sm:leading-10 font-rubik px-2">
          At Bawarchi Biryanis Kenessaw, we believe that food is more than just a meal it&apos;s a part of our heritage. Our new Kennesaw location continues the tradition we&apos;ve built in Atlanta over the past decade. <br/>
Our chefs bring the authentic flavors of India to every dish. From our Signature Biryanis to our comforting curries, we invite you to enjoy the same delicious food and warm hospitality that has made Bawarchi Biryanis a favorite in Atlanta. <br/>
Come visit us at our newest Kennesaw location and taste the authentic Indian tradition. 

          </h1>
        </div>
      </div>
    </div>
  );
};

export default Slider;
