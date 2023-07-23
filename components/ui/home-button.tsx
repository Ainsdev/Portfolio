"use client"
import React from 'react';

interface HomeButtonProps {
    title: string;
    description: string;
    link: string;
    color: string;
}

const HomeButton: React.FC<HomeButtonProps> = ({ title, description, link, color }) => {
    const style = 'rounded-full absolute inset-0 w-full h-full transition duration-300 ease-out transform  group-hover:-translate-x-2 group-hover:-translate-y-2 cursor-none ' + color;
    return (
        <div className='relative z-50 flex flex-col '>
            <a href={link} className="group relative px-10 py-4 font-bold text-black sm:px-16 sm:py-5 ">
                <span className={style}></span>
                <span className="absolute inset-0 h-full w-full rounded-full border-4 border-primary"></span>
                <span className="text-md relative font-bold 2xl:text-lg">{title}</span>
            </a>
            <p className='pt-5 text-center text-sm font-extralight'>
                {description}
            </p>
        </div>
    );
};

export default HomeButton;