import React from 'react';
import Image from 'next/image';

const testimoniesData = [
    {
        name: 'Nataly Wambui',
        imgSrc: '/media/Nataly.png',
        text: "Thanks to this platform, we were able to quickly share information about our missing child with the public."
    },
    {
        name: "Sharon Njung'e",
        imgSrc: '/media/Sharon.jpg',
        text: "As a police officer, this platform has been a game-changer for our search and rescue efforts, improving coordination."
    },
    {
        name: 'Hannah Unyolo',
        imgSrc: '/media/Hannah.jpg',
        text: "Using this platform has greatly enhanced our workflow, helping us cross-reference information efficiently for identification."
    }
];

const Testimonies = () => {
    return (
        <div className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-24 mt-24">
            <h1 className="text-center text-[#662113] text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold mb-12">
                Testimonies
            </h1>

            <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 xl:gap-14 justify-center items-stretch">
                {testimoniesData.map((testimony, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center w-full sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[300px] mb-6"
                    >
                        <div className="relative w-full pb-[56.25%]"> 
                            <Image
                                src={testimony.imgSrc}
                                alt={testimony.name}
                                className="absolute top-0 left-0 w-full h-full object-cover rounded-t-[29px] rounded-b-[5px]"
                                width={500}
                                height={300}
                            />
                        </div>

                        <div className="p-4 sm:p-6 lg:p-8 w-full bg-white border-[#662113] border-l-2 border-r-2 border-b-2 rounded-b-[29px] flex-grow">
                            <h2 className="font-bold text-[#662113] text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] mb-4">
                                {testimony.name}
                            </h2>
                            <p className="text-[#662113] leading-relaxed text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
                                {testimony.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonies;


