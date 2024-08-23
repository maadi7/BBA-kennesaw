"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Image1 from "../assets/Gallery1.jpg";
import Image2 from "../assets/Gallery2.jpg";
import Image3 from "../assets/Gallery3.jpg";
import Image4 from "../assets/Gallery4.png";
import arrowup from "../assets/mingcute_arrow-up-line.png";
import { fadeIn } from "@/utils/motion";
import { blurHashToDataURL } from "@/utils/blurhash";
import Link from "next/link";

const FrameSection = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["40%", "-100%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]);

  return (
    <div className="py-10 px-6 sm:py-20 sm:px-6 md:px-24 bg-bg1 md:min-h-[120vh] rounded-[60px] md:rounded-[100px] -mt-20 flex items-center justify-evenly z-10 relative h-full lg:h-screen lg:flex-row flex-col overflow-hidden">
      <div
        ref={scrollRef}
        className="gap-x-10 flex py-10 lg:h-full lg:overflow-hidden"
      >
        <div className="hidden lg:block relative w-[360px] h-full overflow-hidden">
          <motion.div
            style={{ y: y1 }}
            className="absolute top-[10%] left-0 space-y-12"
          >
            <Image
              src={Image1}
              placeholder="blur"
              blurDataURL={blurHashToDataURL("LhI;q%i^kXoM~qjEkCa}E.oIWBjs")}
              alt="gallery-image"
              className="w-[360px] h-[500px] rounded-lg"
            />
            <Image
              src={Image2}
              placeholder="blur"
              blurDataURL={blurHashToDataURL("LCECRHHqyER4Q7D%-pNGB;9ZxHNG")}
              alt="gallery-image"
              className="w-[360px] h-[500px] rounded-lg"
            />
            {/* <Image
              placeholder="blur"
              blurDataURL={blurHashToDataURL("LACsaLL#%hVW.lESwckStkD*xbSO")}
              src={Image3}
              alt="gallery-image"
              className="w-[360px] h-[500px] rounded-lg"
            />
            <Image
              placeholder="blur"
              blurDataURL={blurHashToDataURL("L6G%_I-UD+-4}qE1E1RP0FpGB:E4")}
              src={Image4}
              alt="gallery-image"
              className="w-[360px] h-[500px] rounded-lg"
            /> */}
          </motion.div>
        </div>
        <div className="hidden lg:block relative w-[360px] h-full overflow-hidden">
          <motion.div
            style={{ y: y2 }}
            className="absolute top-[5%] left-0 space-y-12"
          >
            <Image
              placeholder="blur"
              blurDataURL={blurHashToDataURL("LACsaLL#%hVW.lESwckStkD*xbSO")}
              src={Image3}
              alt="gallery-image"
              className="w-[360px] h-[500px] rounded-lg"
            />
            <Image
              placeholder="blur"
              blurDataURL={blurHashToDataURL("L6G%_I-UD+-4}qE1E1RP0FpGB:E4")}
              src={Image4}
              alt="gallery-image"
              className="w-[360px] h-[500px] rounded-lg"
            />
            {/* <Image
              src={Image1}
              placeholder="blur"
              blurDataURL={blurHashToDataURL("LhI;q%i^kXoM~qjEkCa}E.oIWBjs")}
              alt="gallery-image"
              className="w-[360px] h-[500px] rounded-lg"
            />
            <Image
              src={Image2}
              placeholder="blur"
              blurDataURL={blurHashToDataURL("LCECRHHqyER4Q7D%-pNGB;9ZxHNG")}
              alt="gallery-image"
              className="w-[360px] h-[500px] rounded-lg"
            /> */}
          </motion.div>
        </div>
        <div className="flex items-center flex-col justify-center lg:hidden custom-sm:flex-row">
          {/* <div className="flex custom-sm:mr-10 mb-10 custom-sm:mb-0">
            <Image
              src={Image2}
              placeholder="blur"
              blurDataURL={blurHashToDataURL("LCECRHHqyER4Q7D%-pNGB;9ZxHNG")}
              alt="gallery-image"
              className="w-[360px] h-[500px] rounded-lg"
            />
          </div> */}
          <div>
            <Image
              src={Image4}
              placeholder="blur"
              blurDataURL={blurHashToDataURL("L6G%_I-UD+-4}qE1E1RP0FpGB:E4")}
              alt="gallery-image"
              className="w-[360px] h-[500px] rounded-lg"
            />
          </div>
        </div>
      </div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="lg:ml-10 ml-0 lg:items-start items-center mt-8 lg:mt-0"
      >
        <h1 className="font-bebas custom-sm:text-[80px] text-[60px] leading-[55px] custom-sm:leading-[70px] text-bg3 lg:max-w-[438px] mb-10">
        Join us to know what Bawarchi Kennesaw is all about.

        </h1>
        <Link href="/catering">
          <p className="flex items-center font-bebas xsm:text-3xl text-xl text-bg3 cursor-pointer">
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

export default FrameSection;
