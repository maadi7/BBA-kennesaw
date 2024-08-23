import React from "react";
import { toast } from "react-hot-toast";

const CateringForm = () => {
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const myForm = event.target;

      const formData = new FormData(myForm);

      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (res.status === 200) {
        toast.success(
          "Thank you for submitting your query, our catering specialist will get in touch with you shortly."
        );
      } else {
        toast.error("Something went wrong, please try again later!");
      }
    } catch (e) {
      toast.error("Something went wrong, please try again later!");
    }
  };

  return (
    <div className="px-6 sm:px-12 md:px-16 lg:px-24 py-10 lg:py-20 bg-bg2 rounded-[30px] lg:rounded-[100px]">
      <p className="text-center font-bebas text-4xl  lg:text-[60px] xl:text-[90px] mb-10 lg:mb-24 text-bg1">
        Catering Request Form
      </p>
      <form
        className="flex flex-col gap-y-6"
        name="catering_request_form"
        onSubmit={handleFormSubmit}
        // data-netlify="true"
        // action="/catering?submit=true"
        // method="POST"
      >
        <input type="hidden" name="form-name" value="catering_request_form" />
        <div className="flex flex-col sm:flex-row gap-x-4 gap-y-4">
          <div className="flex-1">
            <label
              htmlFor="firstname"
              className="block text-lg font-semibold mb-1 text-bg1 font-rubik"
            >
              First Name
            </label>
            <input
              id="firstname"
              name="firstname"
              type="text"
              className="w-full p-3 rounded-lg border-0 focus:ring-0"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="lastname"
              className="block text-lg font-semibold mb-1 text-bg1 font-rubik"
            >
              Last Name
            </label>
            <input
              id="lastname"
              name="lastname"
              type="text"
              className="w-full p-3 rounded-lg border-0 focus:ring-0"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-x-4 gap-y-4">
          <div className="flex-1">
            <label
              htmlFor="phonenumber"
              className="block text-lg font-semibold mb-1 text-bg1 font-rubik"
            >
              Phone Number
            </label>
            <input
              id="phonenumber"
              name="phonenumber"
              type="tel"
              className="w-full p-3 rounded-lg border-0 focus:ring-0"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="email"
              className="block text-lg font-semibold mb-1 text-bg1 font-rubik"
            >
              Email ID
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full p-3 rounded-lg border-0 focus:ring-0"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="eventdate"
            className="block text-lg font-semibold mb-1 text-bg1 font-rubik"
          >
            Event Date
          </label>
          <input
            id="eventdate"
            name="eventdate"
            type="date"
            className="w-full p-3 rounded-lg border-0 focus:ring-0"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="pickuptime"
            className="block text-lg font-semibold mb-1 text-bg1 font-rubik"
          >
            Pickup/Delivery Time
          </label>
          <input
            id="pickuptime"
            name="pickuptime"
            type="time"
            className="w-full p-3 rounded-lg border-0 focus:ring-0"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="noofpeople"
            className="block text-lg font-semibold mb-1 text-bg1 font-rubik"
          >
            No. of People
          </label>
          <input
            id="noofpeople"
            name="noofpeople"
            type="number"
            className="w-full p-3 rounded-lg border-0 focus:ring-0"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="management_message"
            className="block text-lg font-semibold mb-1 text-bg1 font-rubik"
          >
            Message to Management
          </label>
          <textarea
            id="management_message"
            name="management_message"
            rows="4"
            className="w-full p-3 rounded-lg border-0 focus:ring-0"
          />
        </div>

        <button
          type="submit"
          className="bg-bg1 uppercase xsm:w-[400px] w-[300px] font-rubik text-2xl text-bg3 py-2 px-2 rounded-lg mt-10 self-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CateringForm;
