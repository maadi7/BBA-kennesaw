import React from 'react';

const PartyTrays = () => {
  return (
    <div className='lg:pt-10 lg:px-24 pb-20 xsm:px-12 px-6 py-10 bg-bg3 rounded-[60px] lg:rounded-[100px] z-10 overflow-hidden'>
      <p className='xl:text-[90px] xsm:text-[60px] text-[40px] font-bebas text-bg1 text-center'>Party Trays</p>
      <div className='flex flex-wrap justify-center mt-10 gap-x-4 gap-y-6'>
        {['Starters', 'Tandoor Sizzlers', 'Curry entrees', 'Biryanis'].map((title, index) => (
          <div key={index} className='bg-bg1 text-bg2 flex flex-col py-10 px-6 gap-y-2 rounded-[40px] flex-1 min-w-[250px] max-w-[300px] h-[240px]'>
            <h2 className='text-4xl font-bebas text-center'>{title}</h2>
            <p className='font-rubik text-xl'>
              {index === 0 && <>Veg starting at $75 <br />Non-Veg starting at $85</>}
              {index === 1 && <>Paneer starting at $75 <br />Chicken starting at $85</>}
              {index === 2 && <>Paneer starting at $75 <br />Chicken starting at $85 <br />Lamb/Seafood starting at $95</>}
              {index === 3 && <>Paneer starting at $75 <br />Chicken starting at $85 <br />Lamb/Seafood starting at $95</>}
            </p>
            {index < 2 && (
              <p className='text-[12px] font-rubik font-medium'>
                *Note : Please contact us for Lamb and Shrimp Dish prices
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PartyTrays;
