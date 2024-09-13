import React from 'react';


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
    <div className="p-20">
    <h2 className="text-[40px] font-bold text-center mt-4 text-[#662113]">
      Partners
    </h2>
    <div className="flex flex-wrap  justify-center items-center mt-24 mb-[10px] gap-24 2xl:justify-between">
      {partnerLogos.map((logo, index) => (
        <img
          key={index}
          src={logo.src}
          alt={logo.alt}
          className="w-full h-96 ml-18 rounded-[40px] mx-4 mb-4  
            md:w-96 md:h-96 lg:w-40 lg:h-40 xl:w-72 xl:h-80 2xl:w-96 2xl:h-96 
            sm:w-[150px] sm:h-[150px] sm:mx-2 sm:mb-2"
        />
      ))}
    </div>
  </div>
  );
};

export default PartnerLogo;