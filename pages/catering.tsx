import React from "react";
import Catering from "../components/Catering/Catering";
import Navbar from "../components/Navbar";
import CateringOptions from "@/components/Catering/CateringOptions";
import CateringPackages from "@/components/Catering/CateringPackages";
import PartyPackage from "@/components/Catering/PartyPackage";
import PartyTrays from "@/components/Catering/PartyTrays";
import CateringForm from "@/components/Catering/CateringForm";
import CateringCard from "@/components/Catering/CateringCard";
import Footer from "@/components/Footer";
import Head from "next/head";

const catering = () => {
  return (
    <div>
      <Head>
        <title>{`Best Indian Catering in Atlanta`}</title>
        <meta
          name="description"
          content="Best Indian Catering services in Atlanta having catered more than 1000+ events and served half a million people through the Catering services over the last 10 years."
        />
        <link rel="canonical" href={`https://bawarchiatlanta.com/catering/`} />
        <link rel="icon" href="/favicon.ico" />
        {/* OG Tags */}
        <meta
          property="og:title"
          content={`Best Indian Catering in Atlanta `}
        />
        <meta property="og:image" content={"/BBA.jpg"} />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content={
            "Best Indian Catering services in Atlanta having catered more than 1000+ events and served half a million people through the Catering services over the last 10 years."
          }
        />

        <meta name="twitter:card" content="summary" />
        <meta
          property="twitter:title"
          content={"Best Indian Catering in Atlanta"}
        />
        <meta
          property="twitter:description"
          content={
            "Best Indian Catering services in Atlanta having catered more than 1000+ events and served half a million people through the Catering services over the last 10 years."
          }
        />
        <meta
          property="twitter:url"
          content={`https://bawarchiatlanta.com/catering/`}
        />
        <meta property="twitter:image" content={"/BBA.jpg"} />
      </Head>
      <Navbar />
      <Catering />
      <CateringOptions />
      <CateringPackages />
      <CateringCard />
      <PartyPackage />
      <PartyTrays />
      <CateringForm />
      <Footer />
    </div>
  );
};

export default catering;
