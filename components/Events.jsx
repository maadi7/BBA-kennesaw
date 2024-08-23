import React from "react";
import Image from "next/image";
import arrowup from "../assets/arrow-up.png";
import CateringReel from "../assets/videos/ReelCompressed.mp4";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";

const Events = () => {
  return (
    <div className="lg:py-20 lg:px-24 xsm:px-12 px-6 py-10 bg-bg2 rounded-[60px] lg:rounded-[100px] relative -mt-20 flex custom-lg:flex-row flex-col items-center z-10 overflow-hidden">
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="custom-lg:mr-10 custom-lg:mb-0 mb-32 custom-lg:w-1/2 w-full flex items-center justify-center"
      >
        <video
          playsInline={true}
          autoPlay={true}
          muted={true}
          loop={true}
          className=" w-[529px] h-[556px] xsm:h-[941px] !rounded-[80px] bg-contain"
        >
          <source src={CateringReel} type={"video/mp4"} />
        </video>
      </motion.div>

      <motion.div
        className="flex flex-col custom-lg:items-start custom-lg:w-1/2 w-full custom-lg2:mt-0 -mt-20"
        variants={fadeIn("left", "tween", 0.2, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h1 className="custom-lg2:text-[80px]  text-[60px] custom-lg2:leading-[75px] leading-[55px] font-bebas  xsm:mb-10 mb-5 text-bg1">
        Catering to all your special events
        </h1>
        <p className="xsm:text-2xl text-xl font-rubik custom-lg:max-w-[680px] max-w-sreen text-bg1 xsm:mb-10 mb-8 ">
          Looking for the best Indian food catering in Kennesaw? You&apos;ve come to the right place! 	Bawarchi Biryanis Kennesaw is here to add a delicious zing to your special events.

        </p>
        <Link href="/catering">
          <p className="flex items-center font-bebas xsm:text-3xl text-xl text-bg1 font-bold cursor-pointer">
            READ MORE{" "}
            <Image
              src={arrowup}
              alt="arrow-up"
              className="xsm:w-[45px] w-[35px] xsm:h-[45px] h-[35px]"
            />
          </p>
        </Link>
      </motion.div>
    </div>
  );
};

export default Events;
