import React from "react";
import Image from "next/image";
import Phone from "../assets/Phone mockup.png";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import { blurHashToDataURL } from "@/utils/blurhash";
import Link from "next/link";

const Download = () => {
  return (
    <div className="lg:py-20 lg:px-24 xsm:px-12 px-6 py-10 bg-bg3 flex flex-col-reverse custom-lg:flex-row items-center custom-lg:justify-evenly justify-center  overflow-hidden">
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="custom-lg:mr-10 custom-lg:mt-0 mt-20 custom-lg:w-1/2 w-full flex items-center justify-center"
      >
        <Image
          src={Phone}
          alt="phone"
          className="w-[378px] h-[683px] object-contain"
          placeholder="blur"
          blurDataURL={blurHashToDataURL("LLL;pp-q0LNF_N?GM{xuX,f4nOah")}
        />
      </motion.div>
      <motion.div
        className="flex flex-col custom-lg:items-start custom-lg:mt-0 mt-10  custom-lg:w-1/2 w-full"
        variants={fadeIn("left", "tween", 0.2, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h1 className="uppercase text-bg1 font-bebas custom-lg:text-[140px] md:text-[120px] text-[85px] leading-[80px] md:leading-[120px] custom-lg:max-w-[522px] w-full mb-5 ">
          Deliciously Simple
        </h1>
        <p className="font-rubik md:text-4xl text-2xl text-bg1  custom-lg:max-w-[571px] w-full uppercase mb-10">
          Download Our App Today
        </p>
        <div className="flex items-start flex-col">
          {/* <Image src={QR}  alt='QR' className='md:w-[240px] md:h-[240px] w-[200px] h-[200px]' />
                <div className='flex flex-col md:ml-5 ml-2 mt-10 md:mt-0' >
                    <Image src={arrow} alt='arrow' className='md:w-[54px] md:h-[45px] w-[40px] h-[34px]' />
                    <span className='font-rubik md:text-xl text-lg' >Scan the QR code!</span>

                </div> */}
          <Link href="https://apps.apple.com/us/app/bawarchi-biryanis-atlanta/id6503363878?utm_source=website-ios-btn&utm_medium=website-ios-btn&utm_campaign=website-ios-download-btn&utm_id=website-ios-btn&utm_content=ios-app-download-link">
            <button className="bg-bg1 text-bg3 font-nunito md:text-[28px] text-[20px] xsm:px-8 py-2 px-1 font-normal rounded-[20px] uppercase mb-2 xsm:w-[400px] w-[270px]">
              Available for iphone
            </button>
          </Link>
          <Link href="https://play.google.com/store/apps/details?id=com.bawarchiatlanta.bawarchiatlanta&referrer=utm_source%3Dwebsite-android-btn%26utm_medium%3Dwebsite-android-btn%26utm_content%3Dandroid-app-download-link%26utm_campaign%3Dwebsite-android-btn">
            <button className="bg-bg1 text-bg3 font-nunito md:text-[28px] text-[20px] xsm:px-8 py-2 px-1 font-normal rounded-[20px] uppercase mb-2 xsm:w-[400px] w-[270px]">
              Available for android
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Download;
