import React from "react";
import Image from "next/image";
import Image1 from "../../assets/storyImg1.png";
import { blurHashToDataURL } from "@/utils/blurhash";

const OurStory = () => {
  return (
    <div className="lg:py-20 lg:px-24 mt-20 xsm:px-12 px-6 py-10 flex flex-col items-center bg-bg3">
      <h1
        className="xl:text-[90px] xsm:text-[60px]  xsm:leading-[55px] xl:leading-[80px] 
        text-[40px] leading-[40px]
        font-bebas   xsm:mb-10 mb-5 text-bg1 text-center"
      >
        Welcome to <br/> Bawarchi Biryanis Kennesaw
   
      </h1>
      <Image
        src={Image1}
        alt="our story"
        className="rounded-[70px] md:w-[1240px] xsm:w-[500px] min-w-[200px] h-[300px] xsm:h-[600px] object-cover object-center"
        placeholder="blur"
        blurDataURL={blurHashToDataURL("LDDvAw.AK9Iw,mDh=]MwaK9F%Ks+")}
      />
    </div>
  );
};

export default OurStory;
