import React from "react";
import BannerVideo from "../assets/videos/BannerVideoCompressed.mp4";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative h-[120vh] w-full overflow-hidden">
      <video
        playsInline={true}
        autoPlay={true}
        muted={true}
        loop={true}
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={BannerVideo} type={"video/mp4"} />
      </video>
      <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
        <div className="text-center">
          <h1 className="text-white sm:text-[100px] sm:leading-[80px] md:text-[150px] mb-4 md:leading-[120px] text-[70px] leading-[60px] font-bebas">
            <span className="sm:mr-[200px] mr-[80px]">FROM INDIA</span>
            <br />
            <span className="sm:ml-[200px] ml-[80px]">WITH LOVE</span>
          </h1>
          <div className="flex flex-col xsm:flex-row items-center justify-center space-x-4">
            <Link
              target="_blank"
              href="https://ordersave.com/partnersite/j5DgkW8FF1Nd/menu"
            >
              <button className="mt-4 px-8 py-3 tracking-wide text-sm xsm:text-lg md:text-xl font-medium font-rubik border-2  text-bg3 bg-bg1 rounded-[15px] shadow-xl">
                ORDER NOW
              </button>
            </Link>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
