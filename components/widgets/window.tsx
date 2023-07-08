"use client"
import { motion, useScroll } from 'framer-motion'
import { useEffect, useState } from 'react';
import HomeButton from '../ui/home-button';
const WindowTab = () => {
    const { scrollY } = useScroll();
    const [scroll, setscroll] = useState<number>(0);

    useEffect(() => {
        return scrollY.onChange((latest) => {
            setscroll(latest)
        })
    }, [scrollY])
    return (
        <motion.div
            animate={{ x: scroll * 0.2, opacity: 1, rotateZ: scroll * 0.008 }}
            transition={{
                x: { type: "spring", stiffness: 100 },
                duration: 0.8,
                delay: 0.01,
            }}
            className="absolute right-0 top-[300px] z-30 w-[90%] cursor-default
        overflow-hidden sm:right-10 sm:w-[60%] 3xl:top-[400px]">
            <div className="flex h-10 w-full items-center  justify-end space-x-1.5 rounded-t-lg bg-blue-300 px-4 opacity-95">
                <span className="h-3 w-3 rounded-full border-2 border-transparent bg-green-400 dark:border-green-400 dark:bg-transparent"></span>
                <span className="h-3 w-3 rounded-full border-2 border-transparent bg-yellow-400 dark:border-yellow-400 dark:bg-transparent"></span>
                <span className="h-3 w-3 rounded-full border-2 border-transparent bg-red-400 dark:border-red-400 dark:bg-transparent "></span>
            </div>
            <div className="relative flex h-96 flex-col items-center justify-center gap-10 rounded-b-lg border-t-0 bg-secondary pb-5 drop-shadow-lg backdrop-blur-lg xl:h-[520px]">
                <div>
                    <h1 className='pt-5 text-center text-4xl font-bold xl:text-5xl'>Welcome, u good?✌️</h1>
                </div>
                <div className='z-50'>
                    <HomeButton title='Projects' link='/simple' description='See My Projects' color='bg-white' />
                </div>
                <HomeButton title='Contact Me' link='/contact/contacting' description='I Answer quickly :)' color='bg-accent' />
                <div className='absolute bottom-0 right-0 flex h-8 w-28 items-center justify-center gap-3 rounded-tl-xl bg-blue-300 '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </div>
            </div>
        </motion.div>
    );
};

export default WindowTab;