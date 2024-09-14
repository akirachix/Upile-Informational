import React from 'react';
import { Bell, Database, Briefcase, TagIcon, LucideProps } from 'lucide-react';

const FeatureIcon = ({ Icon, text }: { Icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>, text: string }) => (
  <div className="flex flex-col items-center justify-center bg-[#D4B337] rounded-3xl p-4 w-full h-64 
    sm:w-[100px] md:w-[150px] lg:w-[275px] xl:w-[330px] 
    sm:h-44 md:h-40 lg:h-52 xl:h-56">
    <Icon className="w-12 h-12 text-[#662113]" />
    <p className="text-[#662113] text-[24px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[28px] font-extrabold text-center">{text}</p>
  </div>
);

const LostLocateFeatures = () => {
  return (
    <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-12 xl:p-6">
      <h2 className="text-[32px] sm:text-[28px] md:text-[34px] lg:text-[36px] xl:text-[40px] font-bold text-center mb-4 sm:mb-4 md:mb-6 lg:mb-6 text-orange-950">
        Features
      </h2>
      <div className="flex flex-col space-y-6 sm:space-y-0 sm:flex-row sm:justify-center sm:space-x-4 md:space-x-4 lg:space-x-8 xl:space-x-10 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-24 lg:mt-16 px-8">
        <FeatureIcon Icon={Database} text="Data Entry" />
        <FeatureIcon Icon={Bell} text="Notification System" />
        <FeatureIcon Icon={Briefcase} text="Case Management Tools" />
        <FeatureIcon Icon={TagIcon} text="Match" />
      </div>
      <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:py-24 h-auto  w-auto bg-[#662113] mt-12 sm:mt-16 md:mt-20 lg:mt-0">
        <h3 className="text-[32px] sm:text-[30px] md:text-[34px] lg:text-[36px] xl:text-[40px] text-center font-semibold text-[#D4B337] mb-4 sm:mb-6 md:mb-8 lg:mb-4">
          Why Choose LostLocate?
        </h3>
        <p className="text-[#D4B337] mt-4 sm:mt-8 mx-auto w-full text-[20px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[25px]">
          LostLocate offers a seamless, reliable system for handling missing persons cases.
          With unified data, quick search options, and easy access across devices, it&apos;s
          designed to support law enforcement and the public in reuniting families and
          resolving cases swiftly.
        </p>
      </div>
    </div>
  );
};

export default LostLocateFeatures;

