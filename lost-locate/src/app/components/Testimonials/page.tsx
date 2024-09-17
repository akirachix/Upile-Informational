


import React from 'react';

const testimoniesData = [
    {
        name: 'Nataly Wambui',
        imgSrc: './media/Nataly.jpg',
        text: "Thanks to this platform, we were able to quickly share information about our missing child with the public."
    },
    {
        name: "Sharon Njung'e",
        imgSrc: './media/Sharon.jpg',
        text: "As a police officer, this platform has been a game-changer for our search and rescue efforts, improving coordination."
    },
    {
        name: 'Hannah Unyolo',
        imgSrc: './media/Hannah.jpg',
        text: "Using this platform has greatly enhanced our workflow, helping us cross-reference information efficiently for identification."
    }
];

const Testimonies = () => {
    return (
        <div className="px-6 sm:px-12 md:px-24 lg:px-24 xl:px-24 mt-24 testimonies-container">
            <h1 className="text-center text-[#662113] text-[32px] sm:text-[36px] md:text-[40px] font-bold mb-12">
                Testimonies
            </h1>

            <div className="flex flex-col md:flex-row md:justify-between gap-12 items-stretch ipad-mini:block ipad-pro:block surface-pro:block ">
                {testimoniesData.map((testimony, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center w-full md:w-[600px] xl:w-[600px] testimony-card  "
                    >
                        <img
                            src={testimony.imgSrc}
                            alt={testimony.name}
                            className="w-full object-cover rounded-t-[29px] rounded-b-[5px] h-40 md:h-48 lg:h-56 xl:h-64"
                        />

                        <div className="p-6 sm:p-8 lg:p-8 xl:p-8 w-full bg-white border-[#662113] border-l-2 border-r-2 border-b-2 rounded-b-[29px] flex-grow">
                            <h2 className="font-bold text-[#662113] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] mb-4">
                                {testimony.name}
                            </h2>
                            <p className="text-[#662113] leading-relaxed text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
                                "{testimony.text}"
                            </p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        // </div>
    );
};

export default Testimonies;
