import React from 'react';
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Bawarchi from "../components/Bawarchi";
import Slider from "../components/Slider";
import Events from "../components/Events";
import LunchSection from "../components/LunchSection";
import Download from "../components/Download";
import Footer from "../components/Footer";
import FrameSection from "../components/FrameSection";



const index = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Gallery/>
        <Bawarchi/>
    
        <Slider/>
        <Events/>
        <LunchSection/>
        <FrameSection/>
      
        <Download/>
        <Footer/>
    </div>
  )
}

export default index