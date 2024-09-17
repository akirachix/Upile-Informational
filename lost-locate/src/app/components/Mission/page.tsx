

import React from 'react';

const missionData = [
    {
        id: 1,
        title: 'Mission',
        text: 'To enable swift identifications of missing persons and unclaimed bodies, supporting families enhancing investigations.'
    },
    {
        id: 2,
        title: 'Vision',
        text: 'To connect communities and law enforcement in reuniting missing persons with their loved ones globally.'
    }
];

const Mission = () => {
    return (
        <div className="px-6 sm:px-12 md:px-24"> 
            <div className="flex flex-col md:flex-row md:justify-between mt-24 gap-6">
                {missionData.map((item) => (
                    <div
                        key={item.id}
                        className="bg-[#D4B337] rounded-2xl px-6 py-20 text-center md:w-[600px]" 
                    >
                        <h2 className="font-bold text-[#662113] text-[30px] sm:text-[35px] md:text-[40px] mb-8">
                            {item.title}
                        </h2>
                        <div>
                            <p className="text-[#662113] leading-relaxed text-[20px] sm:text-[24px] md:text-[28px]">
                                {item.text.split('\n').map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Mission;

