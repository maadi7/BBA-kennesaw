import React from 'react';

const CateringCard = () => {
  return (
    <div className='px-6 py-10 bg-bg3 flex flex-col items-center'>
      <div className='flex flex-wrap items-center justify-center gap-6'>
        {/* Silver Package */}
        <div className='bg-bg1 text-bg2 w-full md:w-[300px] lg:w-[440px]  lg:h-[600px]  rounded-[40px] p-6 flex flex-col gap-y-2'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bebas text-center'>Silver Package</h2>
          <h3 className='text-2xl md:text-3xl lg:text-4xl font-bebas text-center'>VEG / NON-VEG - $18</h3>
          <ul className='font-rubik text-xl md:text-2xl list-disc pl-6 flex flex-col gap-y-2'>
            <li>1 Appetizer</li>
            <li>2 Curries</li>
            <li>White Rice</li>
            <li>Dum Biryani (Veg/Chicken)</li>
            <li>Raita</li>
            <li>Sambar / Rasam</li>
            <li>Butter Naan</li>
            <li>Dessert (Options - Fruit Custard/Shahi Tukda/Gulab Jamun/Rasmalai)</li>
          </ul>
        </div>

        {/* Gold Package */}
        <div className='bg-bg1 text-bg2 w-full md:w-[300px] lg:w-[440px] h-full lg:h-[700px] rounded-[40px] p-6 flex flex-col gap-y-2  '>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bebas text-center'>Gold Package</h2>
          <h3 className='text-2xl md:text-3xl lg:text-4xl font-bebas text-center'>VEG / NON-VEG - $21</h3>
          <ul className='font-rubik text-xl md:text-2xl list-disc pl-6 flex-1 flex flex-col gap-y-2'>
            <li>2 Appetizer</li>
            <li>2 Curries</li>
            <li>Dal</li>
            <li>White Rice</li>
            <li>Dum Biryani (Veg/Chicken)</li>
            <li>Raita</li>
            <li>Sambar / Rasam</li>
            <li>Papad/Color Chips</li>
            <li>Butter Naan</li>
            <li>2 Desserts (Options - Shahi Tukda/Gulab Jamun/Rasmalai/Double Ka Meetha/Gajar Ka Halwa)</li>
            <span className='text-sm mt-2'>*Only 1 Paneer item with package</span>
          </ul>
        </div>

        {/* Platinum Package */}
        <div className='bg-bg1 text-bg2 w-full md:w-[300px] lg:w-[440px] rounded-[40px] p-6 flex flex-col gap-y-2'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bebas text-center'>Platinum Package</h2>
          <h3 className='text-2xl md:text-3xl lg:text-4xl font-bebas text-center'>VEG / NON-VEG - $24</h3>
          <ul className='font-rubik text-xl md:text-2xl list-disc pl-6 flex flex-col gap-y-1'>
            <li>2 Appetizer</li>
            <li>3 Curries</li>
            <li>Dal</li>
            <li>White Rice</li>
            <li>Dum Biryani (Veg/Chicken)</li>
            <li>Sambar / Rasam</li>
            <li>Papad/Color Chips</li>
            <li>Butter Naan</li>
            <li>2 Desserts (Options - Rice Kheer/Mango Fruit Custard/Kesari Halwa/Mango Malai/Payasam/Chakkara Pongal)</li>
            <span className='text-sm mt-2'>*Only 1 Paneer item with package</span>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CateringCard;
