'use client';

import React from 'react';
import Navbar from '../Navbar/index';

const Landing = () => {
  return (
    <div
      className="min-h-screen bg-gray-100 flex flex-col"
      style={{
        backgroundImage: "url('/images/lostlocate_img.png')" ,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 3.0,
      }}
    >
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-3xl mx-4 sm:mx-6 lg:mx-8">
          <h1 className="text-[48px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold text-white mb-4 sm:mb-6">
            Lost a loved one?
          </h1>
          <p className="text-[20px] sm:text-[18px] md:text-[20px] lg:text-[24px] text-white mb-6 sm:mb-8 tracking-wide">
            Try LostLocate to search for missing persons in Kenya
          </p>
          <button
            className="bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold py-2 px-2 sm:py-3 sm:px-6 text-[18px] sm:text-[16px] md:text-[18px] lg:text-[20px] rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            style={{ minWidth: '200px', minHeight: '50px' }}
          >
            Search
          </button>
        </div>
      </main>
    </div>
  );
};

export default Landing;
