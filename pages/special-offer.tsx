import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Offer = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[url('/BBA.jpg')] bg-cover bg-no-repeat bg-center h-[600px] flex items-center justify-center">
        <div className="text-center text-white bg-black bg-opacity-50 p-6 rounded-lg">
          <h1 className="md:text-4xl text-3xl font-bold font-rubik uppercase leading-10">Sign up to get <br/> 50% off one entree</h1>
        </div>
      </div>
      <div className="bg-bg2 px-4 py-12 md:py-20 md:px-24 flex flex-col md:flex-row gap-8 ">
        <div className="md:w-1/2 ">
          <h2 className="text-4xl font-bold mb-4 font-bebas text-bg1">Sign Up Today</h2>
          <p className="text-xl font-rubik text-bg1">
            Drop your deets in the form below to receive a coupon for 50% OFF any entree. 
            We&apos;ll keep you posted on the opening week and send you your coupon during opening week.
          </p>
        </div>
        <div className="md:w-1/2">
          <form 
            name="offer-signup" 
            method="POST" 
            data-netlify="true" 
            netlify-honeypot="bot-field"
            className="space-y-4"
          >
            <input type="hidden" name="form-name" value="offer-signup" />
            <div hidden>
              <input name="bot-field" />
            </div>
            <div>
              <label htmlFor="firstName" className="text-lg block mb-1 font-semibold text-bg1 font-rubik">First Name</label>
              <input type="text" id="firstName" name="firstName" className="w-full border rounded p-2" required />
            </div>
            <div>
              <label htmlFor="lastName" className="text-lg block font-semibold mb-1 text-bg1 font-rubik">Last Name</label>
              <input type="text" id="lastName" name="lastName" className="w-full border rounded p-2" required />
            </div>
            <div>
              <label htmlFor="email" className="text-lg block font-semibold mb-1 text-bg1 font-rubik">Email</label>
              <input type="email" id="email" name="email" className="w-full border rounded p-2" required />
            </div>
            <div>
              <label htmlFor="phone" className="text-lg block font-semibold mb-1 text-bg1 font-rubik">Phone Number</label>
              <input type="tel" id="phone" name="phone" className="w-full border rounded p-2" required />
            </div>
            <button type="submit" className="font-bebas text-xl bg-bg1 text-white py-2 !mt-4 px-6 rounded hover:bg-black">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Offer;