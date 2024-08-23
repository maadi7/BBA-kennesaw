import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OurStory from "@/components/OurStory/OurStory"
import StoryImage from '@/components/OurStory/StoryImage';
import StoryText from '@/components/OurStory/StoryText';
import Head from 'next/head';

const ourStory = () => {
  return (
    <div>
      <Head>
        <title>Atlanta’s top rated now open in Kennesaw</title>
      </Head>
        <Navbar/>
        <OurStory/>
        <StoryImage/>
        <StoryText/>
        <Footer/>

    </div>
  )
}

export default ourStory