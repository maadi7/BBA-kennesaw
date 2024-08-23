import Image from "next/legacy/image";
import { useEffect, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import Head from "next/head";
// Data
import imageData from "../utils/imageData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export default function OurGallery() {
  const [viewData, setViewData] = useState(imageData);
  const [selected, setSelected] = useState("All");

  const isDesktop = useMediaQuery("(min-width: 500px)");

  return (
    <>
      <div className="mt-28 xsm:mt-24 md:p-20 glimpses-div">
        <Head>
          <title>{`Bawarchi Atlanta Photo Gallery`}</title>
          <meta
            name="description"
            content="Check out the latest pictures from Bawarchi Atlanta."
          />
          <link rel="canonical" href={`https://bawarchiatlanta.com/gallery/`} />
          <link rel="icon" href="/favicon.ico" />
          {/* OG Tags */}
          <meta
            property="og:title"
            content={`Bawarchi Atlanta Photo Gallery `}
          />
          <meta property="og:image" content={"/BBA.jpg"} />
          <meta property="og:type" content="article" />
          <meta
            property="og:description"
            content={"Check out the latest pictures from Bawarchi Atlanta."}
          />

          <meta name="twitter:card" content="summary" />
          <meta
            property="twitter:title"
            content={"Bawarchi Atlanta Photo Gallery"}
          />
          <meta
            property="twitter:description"
            content={"Check out the latest pictures from Bawarchi Atlanta."}
          />
          <meta
            property="twitter:url"
            content={`https://bawarchiatlanta.com/gallery/`}
          />
          <meta property="twitter:image" content={"/BBA.jpg"} />
        </Head>
        <Navbar />
        <h1 className="font-bold font-big_calson text-5xl mb-12 font-bebas text-center">
          Our Gallery
        </h1>

        {/* Category Buttons */}
        <div className="mx-auto grid grid-cols-2 gap-4 max-w-md w-11/12 sm:grid-cols-4 sm:max-w-xl md:max-w-none justify-between font-big_calson font-bold text-white">
          <button
            className={`text-lg px-6 py-2 lg:text-2xl font-rubik lg:py-3 w-full bg-black rounded-md hover:bg-pri_green duration-200 transition 
          ${selected === "All" && "bg-orange-400"}`}
            onClick={() => {
              setViewData(imageData);
              setSelected("All");
            }}
          >
            All Images
          </button>
          <button
            className={`text-lg px-6 py-2 lg:text-2xl font-rubik lg:py-3 w-full bg-black rounded-md hover:bg-pri_green duration-200 transition 
          ${selected === "Ambience" && "bg-orange-400"}`}
            onClick={() => {
              setViewData(
                imageData.filter((img) => img.category === "ambience")
              );
              setSelected("Ambience");
            }}
          >
            Our Ambience
          </button>
          <button
            className={`text-lg px-6 py-2 lg:text-2xl font-rubik lg:py-3 w-full bg-black rounded-md hover:bg-pri_green duration-200 transition 
          ${selected === "Food" && "bg-orange-400"}`}
            onClick={() => {
              setViewData(imageData.filter((img) => img.category === "food"));
              setSelected("Food");
            }}
          >
            Our Food
          </button>
          <button
            className={`text-lg px-6 py-2 lg:text-2xl  font-rubik lg:py-3 w-full bg-black rounded-md hover:bg-pri_green duration-200 transition 
          ${selected === "Events" && "bg-orange-400"}`}
            onClick={() => {
              setViewData(imageData.filter((img) => img.category === "events"));
              setSelected("Events");
            }}
          >
            Our Events
          </button>
        </div>

        {/* Gallery Images */}
        <div className="mt-8 grid gap-4 sm:gap-6 grid-cols-3 mx-auto w-11/12 md:w-full justify-center">
          {viewData.map((img, index) => (
            <Zoom key={index}>
              <Image
                width={400}
                height={400}
                className="rounded-xl cursor-pointer hover:scale-105 transition-all"
                alt={img.alt}
                src={img.url}
                objectFit="cover"
              />
            </Zoom>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
