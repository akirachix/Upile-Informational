import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-evenly p-6 bg-white text-center ">
      <h1 className="text-[20px] sm:text-[24px] md:text-[32px] lg:text-[38px] xl:text-[40px] nh:text-[36px] im:text-[40px] nhp:text-[34px] text-[#662113] font-bold mt-2 mb-2">
      About LostLocate
      </h1>
      <div className="flex flex-col md:flex-row gap-4 w-full md:grid lg:flex 2xl:flex-row ms:flex-row nh:flex-row">
        <div className="mt-6 flex justify-center md:justify-center ms:justify-center ms:ml-6 md:mr-6">
          <Image 
            src="/media/Group 1.png" 
            alt="LostLocate App Screenshot" 
            width={700} 
            height={400}
            className="rounded-lg shadow-lg md:w-[750px] md:h-[470px] lg:w-[650px] lg:h-[300px] xl:h-[350px] lg:ml-[24px] ms:w-[650px] ms:h-[350px] nh:w-[700px] nh:h-[250px] "
          />
        </div>
        
        <div className="w-full md:w-[800px] ms:w-[860px] ls:w-[930px] ms:mt-6 nh:mt-4 ls:mt-2 p-4">
        <p className="text-[16px] sm:text-[18px] md:text-[28px] lg:text-[24px] xl:text-[24px] 2xl:text[30px] nh:text-[18px] im:text-[28px] nhp:text-[24px] ls:text-[28px] text-left mt-4 md:mt-12 w-full text-black-700 mb-4 lg:mt-6 xl:mt-6">
          LostLocate is a system aiming to reuniting families and bringing peace of mind by leveraging technology to solve the challenges of missing persons cases. Our platform centralizes information, streamlines searches, and enhances collaboration between law enforcement, mortuaries, and the public. We believe in the power of community and innovation to make a difference, ensuring that every missing person is given the attention they deserve.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mt-8">
            <div className="bg-brown-800 text-white p-4 rounded-lg flex flex-col items-center">
              <div className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] font-bold">500</div>
              <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px]">Missing Cases</div>
            </div>
            <div className="bg-brown-800 text-white p-4 rounded-lg flex flex-col items-center">
              <div className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] font-bold">273</div>
              <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px]">Resolved Cases</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
