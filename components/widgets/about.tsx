'use client'
import React, { SetStateAction } from 'react';
import type { FC } from 'react';

interface AboutProps {
    setCursorProps: { (value: SetStateAction<string>): void; (arg0: string): void }
}

const About: FC<AboutProps> = ({ setCursorProps }) => {
    return (
        <section className='mt-20 flex h-max w-screen flex-col justify-evenly lg:flex-row'>
            <article className='h-full w-full px-20' onMouseEnter={() => setCursorProps("sText")}
                onMouseLeave={() => setCursorProps('default')}>
                <div className='flex flex-col hover:text-red-500 sm:flex-row'>
                    <div className='flex'>
                        <h3 className='flex items-center justify-start py-5 align-middle text-4xl font-bold'> Im</h3>
                        <h1 className='px-2 text-6xl font-bold text-primary'>Guilad</h1>
                    </div>
                    <div className='flex'>
                        <p className='flex items-center justify-start align-middle text-4xl font-bold sm:py-5'>from</p>
                        <p className='flex items-center justify-start px-2 align-middle text-4xl font-extrabold underline decoration-wavy sm:py-5'>Chile</p>
                    </div>
                </div>
                <p className='pt-5 text-lg font-medium leading-relaxed tracking-tight sm:pr-72 sm:leading-loose'>I love solving problems with technology,
                    Im an enthusiast of impact the user with creative & innovate solutions.
                    I simply like verything that goes behind the creation of a solution.</p>
                <p className='underline'>Know More</p>
            </article>
            <article className='relative mt-5 h-full w-full overflow-hidden' style={{
                clipPath: 'polygon(0 2%, 100% 0, 100% 100%, 12% 100%)'
            }}>
                <div className='left-0 flex animate-marquee text-6xl sm:text-9xl'>
                    <h1 className='pl-48 font-bold'>Creative</h1>
                    <h1 className='pl-20 font-bold'>Innovative</h1>
                    <h1 className='pl-52 font-bold'>Commited</h1>
                    <h1 className='pl-48 font-bold'>Hunger</h1>
                    <h1 className='pl-20 font-bold'>Innovative</h1>
                    <h1 className='pl-52 font-bold'>Commited</h1>
                    <h1 className='pl-48 font-bold'>Creative</h1>
                    <h1 className='pl-20 font-bold'>Innovative</h1>
                    <h1 className='pl-52 font-bold'>Commited</h1>
                </div>
                <div className='left-0 mt-10 flex animate-marquee2 text-6xl sm:text-8xl'>
                    <h1 className='pl-16 font-bold'>The</h1>
                    <h1 className='pl-10 font-bold text-pink-400'>Best</h1>
                    <h1 className='pl-16 font-bold'>Way</h1>
                    <h1 className='pl-16 font-bold'>To</h1>
                    <h1 className='pl-10 font-bold text-primary'>Predict</h1>
                    <h1 className='pl-16 font-bold'>The</h1>
                    <h1 className='text-underline pl-16 font-bold'>Future</h1>
                    <h1 className='pl-10 font-bold'>Is</h1>
                    <h1 className='pl-16 font-bold text-primary underline decoration-wavy'>Creating</h1>
                    <h1 className='pl-16 font-bold'>It</h1>
                </div>
            </article>
        </section>
    );
}

export default About;
