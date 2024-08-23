"use client";

import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Logo from "../assets/Logo-new.png";
import HamburgerIcon from "../assets/hamburger.png";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const observerTargetRef = useRef(null);
  const footer = [
    { name: "Home", href: "/" },
    { name: "Our Story", href: "/our-story" },
    { name: "Catering", href: "/catering" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blogs", href: "/blogs" },
    { name: "Grand Opening", href: "/grand-opening-offer" },
    { name: "Order Online", href: "https://ordersave.com/partnersite/j5DgkW8FF1Nd/menu" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const target = observerTargetRef.current;
      if (target) {
        const isPast120vh = window.scrollY > window.innerHeight * 0.8;
        setIsButtonVisible(isPast120vh);
      }
    };

    if (router.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    } else {
      setIsButtonVisible(true);
    }

    return () => {
      if (router.pathname === "/") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [router.pathname]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full px-2 py-0 bg-bg1 z-50">
        <div className="flex justify-between items-center px-2 sm:px-16 py-6 xl:px-24 lg:px-12">
          <Link
            href={"/"}
            prefetch={false}
            passHref
            className="relative !w-[170px] !h-[53px] min-w-[115px] min-h-[53px]"
          >
            <Image
              src={Logo}
              alt="logo"
              className="!w-full !h-full object-contain"
            />
          </Link>
          <div className="flex items-center justify-between">
            <Link
              target="_blank"
              href="https://ordersave.com/partnersite/j5DgkW8FF1Nd/menu"
            >
              <button
                className={`px-6 py-2 h-12 hidden md:block w-[180px] text-[20px] bg-bg3 font-rubik font-medium mr-10 border rounded-lg text-bg1 transition-opacity duration-500 ${
                  isButtonVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{ visibility: isButtonVisible ? "visible" : "hidden" }}
              >
                ORDER NOW
              </button>
            </Link>
            <button>
              <Image
                src={HamburgerIcon}
                alt="Sidebar"
                className="w-9 h-6"
                onClick={toggleMenu}
              />
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="bg-bg1 top-0 right-0 fixed w-[70%] md:w-1/2 h-full z-30 flex flex-col items-center justify-center"
            >
              <button className="self-end mr-4 mt-4" onClick={toggleMenu}>
                <svg
                  className="absolute top-2 right-2 sm:top-10 sm:right-10 w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="justify-between flex text-xl pt-5 mx-5 gap-y-6 items-center text-[#959090] flex-col font-rubik font-medium"
              >
                {footer.map((item, index) => (
                  <motion.li key={index} variants={itemVariants}>
                    <Link href={item.href}>
                      <span className="cursor-pointer hover:text-bg3 uppercase">
                        {item.name}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div ref={observerTargetRef} style={{ height: "1px" }} />
    </>
  );
};

export default Navbar;