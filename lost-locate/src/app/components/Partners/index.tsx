import React from 'react';
import Image from 'next/image';


const partnerLogos = [
  {
    src: './media/policelogo.jpg',
    alt: 'Kenya Police Logo',
  },
  {
    src: './media/Nairobi_City_Logo.png',
    alt: 'Nairobi City County',
  },
  {
    src: './media/missingchild.jpeg',
    alt: 'Missing Child Kenya',
  },
];

const PartnerLogo = () => {
  return (
    <div id='partners' className="p-20">
    <h2 className="text-[32px] font-bold text-center mt-4 text-[#662113] sm:text-[28px] md:text-[34px] lg:text-[36px] xl:text-[40px] font-bold text-center mb-4 sm:mb-4 md:mb-6 lg:mb-6">
      Partners
    </h2>
    <div className="flex flex-wrap  justify-center items-center mt-24 mb-[10px] gap-24 2xl:justify-between">
      {partnerLogos.map((logo, index) => (
        <Image
          key={index}
          src={logo.src}
          alt={logo.alt}
          className='w-72 h-40 ml-18 mx-4 mb-4
           sm:w-[100px] md:w-96 lg:w-40 xl:w-72
           sm:h-52 md:h-64 lg:h-40 xl:h-64 2xl:w-96 2xl:h-96 sm:mx-2 sm:mb-2 rounded-[40px]'
        />
      ))}
    </div>
  </div>
  );
};

export default PartnerLogo;