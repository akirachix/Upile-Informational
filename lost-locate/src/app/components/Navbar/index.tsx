
'use client';

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from "next/image";
import {Inter} from "next/font/google"


const inter = Inter({subsets: ['latin']});
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('#home');
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
        if (isOpen) {
            toggleMenu(); 
        }
    };

    return (
        <nav className={` ${inter.className} static w-full bg-transparent text-white`}>
            <div className="max-w-8xl mx-auto flex justify-between items-center py-3 px-2 lg:py-4 lg:px-3 xl:px-5">
                <div className="text-2xl font-bold">
                    <Link href="#home">
                        <Image 
                            src="/images/lostlocate_logo.png" 
                            alt="Logo" 
                            width={150} 
                            height={73}
                            className="w-8 h-8 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-22 xl:h-22 mx-3 lg:mx-5 xl:mx-6"
                        />
                    </Link>
                </div>

                <div className="block lg:hidden xl:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                    </button>
                </div>

                <ul className="hidden lg:flex xl:flex lg:space-x-10 xl:space-x-36 mr-12">
                    {['home', 'updates', 'features', 'about', 'partners'].map((link, index) => (
                        <li key={index} className={`font-bold text-[24px] lg:text-[20px] xl:text-[22px]`}>
                            <Link
                                href={`#${link}`}
                                onClick={() => handleLinkClick(`#${link}`)}
                                className={`${
                                    activeLink === `#${link}`
                                    ? 'text-[#D4B337]' 
                                    : 'text-white' 
                                } hover:text-[#E4C18C]`}
                            >
                                {link.toUpperCase()}
                            </Link>
                        </li>
                    ))}
                </ul>

                {isOpen && (
                    <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 z-40 lg:hidden xl:hidden">
                        <ul className="flex flex-col items-center justify-center h-full space-y-4 pl-8 pr-8">
                            {['home', 'updates', 'features', 'about', 'partners'].map((link, index) => (
                                <li key={index} className={`font-bold text-lg sm:text-xl`}>
                                    <Link
                                        href={`#${link}`}
                                        onClick={() => handleLinkClick(`#${link}`)}
                                        className={`${
                                            activeLink === `#${link}`
                                            ? 'text-[#D4B337]'
                                            : 'text-white' 
                                        }`}
                                    >
                                        {link.toUpperCase() }
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <button className="absolute top-4 right-4 z-50" onClick={toggleMenu}>
                            <FaTimes size={30} />
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
