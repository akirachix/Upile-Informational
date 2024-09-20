
import React from 'react';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { Mail } from 'lucide-react';
import Image from 'next/image';
const Footer = () => {
    return (
        <div className="bg-[#662113] text-white py-8 sm:py-12 md:py-16 lg:py-20 h-[500px] lg:h-[370px] md:h-[700px] lg:p-6 md:p-4">
            <div className=" flex flex-wrap md:block lg:flex justify-between items-start ml-8 lg:ml-12 md:ml-4">
                <div className="w-full sm:w-1/4 text-center sm:text-left mb-6 sm:mb-0 lg:mt-12">
                    <Image
                     src='/media/lostlocate.png' 
                     alt='LostLocate Logo' className='w-32 h-auto sm:mx-0 lg:w-40 md:w-40' 
                     width={500}
                     height={300}/>
                </div>
                <div className="w-full sm:w-1/4 text-justify sm:text-left mb-6 sm:mb-0 md:mt-12">
                    <h4 className="font-semibold text-[24px] sm:text-xl md:text-[28px] lg:text-3xl">Social Media</h4>
                    <div className="flex justify sm:justify-start gap-4 mt-4">
                        <FaSquareFacebook className='w-8 h-8 sm:w-10 sm:h-10' />
                        <FaInstagram className='w-8 h-8 sm:w-10 sm:h-10' />
                        <FaLinkedin className='w-8 h-8 sm:w-10 sm:h-10' />
                    </div>
                </div>
                <div className="w-full sm:w-1/4 text-justify sm:text-left mb-6 sm:mb-0 md:mt-12">
                    <h4 className="font-semibold text-[24px] sm:text-xl md:text-[28px] lg:text-3xl">Resource</h4>
                    <p className='text-left sm:text-lg md:text-[20px] lg:text-2xl mt-2'>About</p>
                    <p className='text-left sm:text-lg md:text-[20px] lg:text-2xl mt-2'>Features</p>
                </div>
                <div className="w-full sm:w-1/4 text-justify sm:text-left md:mt-12 ">
                    <h4 className="font-semibold text-[24px] sm:text-xl md:text-[28px] lg:text-3xl">Contact</h4>
                    <div className="flex items-center justify sm:justify-start mt-4">
                        <FaPhone className="w-6 h-6 sm:w-8 sm:h-8 mr-2 md:w-8 md:h-8" />
                        <span className='text-left sm:text-lg md:text-[20px] lg:text-2xl'>+254112446610</span>
                    </div>
                    <div className="flex items-center justify sm:justify-start mt-4">
                        <Mail className="w-6 h-6 sm:w-8 sm:h-8 mr-2 md:w-8 md:h-8"/>
                        <span className='text-left sm:text-lg md:text-[20px] lg:text-2xl'>upile@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;