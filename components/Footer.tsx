import React from "react";
import Image from "next/image";
import Instagram from "../assets/ri_instagram-fill.png";
import Facebook from "../assets/ic_baseline-facebook.png";
import Link from "next/link";

const Footer = () => {
  const footer = [
    { name: "Home", href: "/" },
    { name: "Our Story", href: "/our-story" },
    { name: "Catering", href: "/catering" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blogs", href: "/blogs" },
    { name: "Grand Opening", href: "/grand-opening-offer" },
  ];

  return (
    <div className="bg-bg1 pt-12 sm:pb-12 pb-2 sm:px-4 px-4 flex flex-col  md:items-center justify-between font-rubik text-bg3 gap-y-6">
      <div className="flex flex-col items-start md:items-center">
        <div className="flex flex-col mb-4 md:flex-row md:items-center items-start gap-y-4 justify-evenly text-xl font-medium gap-x-10">
          {footer.map((item, index) => (
            <Link key={index} href={item.href}>
              <span className="cursor-pointer uppercase">{item.name}</span>
            </Link>
          ))}
        </div>
        <p className="md:text-xl text-lg mb-4">
          Delicious Indian Food in Sandy Springs Kennesaw{" "}
        </p>
        <div className="flex items-center">
          <Link
            href="https://www.facebook.com/bawarchibiryanisandysprings"
            target="_blank"
          >
            <Image
              src={Facebook}
              alt="facebook"
              className="w-[30px] h-[30px] mr-4"
            />
          </Link>
          <Link
            href="https://www.instagram.com/bawarchibiryanisatlanta/"
            target="_blank"
          >
            <Image
              src={Instagram}
              alt="instagram"
              className="w-[30px] h-[30px]"
            />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <p className="font-medium flex items-center custom-sm:text-xl xsm:text-[14px] text-[10px] custom-sm:mt-0 mt-10">
          DESIGNED AND DEVELOPED BY{" "}
          <Link
            href="https://debox.co.in/"
            target="_blank"
            className="underline ml-1"
          >
            DEBOX CONSULTING PVT. LTD.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
