"use client"

import About from "@/components/widgets/about";
import CardWithGlow from "@/components/widgets/card";
import WindowTab from "@/components/widgets/window";
import { motion, useScroll } from "framer-motion";
import React from "react";

export default function IndexPage() {

  const { scrollY } = useScroll();
  const [scroll, setscroll] = React.useState<number>(0);

  React.useEffect(() => {
    scrollY.onChange((latest) => {
      if (latest < 950) {
        setscroll(latest)
      }
    });
  }, [scrollY])
  // custom cursor
  const [cursor, setCursor] = React.useState({
    x: 0,
    y: 0,
  })
  const [cursorProps, setCursorProps] = React.useState('default')

  React.useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setCursor({
        x: e.clientX,
        y: e.clientY,
      })
    }
    window.addEventListener('mousemove', mouseMove)
    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])
  const variants = {
    default: {
      x: cursor.x - 24,
      y: cursor.y - 24,
      zIndex: 999,
      backgroundColor: '#fff',
      width: 48,
      height: 48,
      transition: {
        duration: 0.1,
        type: 'spring',
      }
    },
    hovered: {
      x: cursor.x - 24,
      y: cursor.y - 24,
      zIndex: 30,
      transition: {
        duration: 0.1,
        type: 'spring',
      }
    },
    text: {
      backgroundColor: '#fff',
      x: cursor.x - 24,
      y: cursor.y - 24,
      zIndex: 99,
      width: 120,
      height: 120,
      mixBlendMode: 'difference',
      transition: {
        duration: 0.1,
        type: 'spring',
      }
    },
    sText: {
      backgroundColor: '#fff',
      x: cursor.x - 24,
      y: cursor.y - 24,
      zIndex: 99,
      width: 120,
      height: 120,
      mixBlendMode: 'overlay',
      transition: {
        duration: 0.1,
        type: 'spring',
      }
    }
  }
  return (
    <main className='flex h-[1920px] w-screen cursor-none flex-col scroll-smooth'>
      <motion.div
        variants={variants as any}
        animate={cursorProps}
        className='pointer-events-none invisible fixed left-0 top-0 rounded-full sm:visible' />
      <section className='w-screen'>
        {/* Mobile Title */}
        <div className='absolute top-40 flex w-screen overflow-hidden md:hidden'>
          <motion.h1
            initial="hidden"
            animate={{ x: scroll * -6, opacity: 1 }}
            className='whitespace-nowrap text-9xl  font-bold md:text-[220px]'>I LOVE BUILD THINGS</motion.h1>
        </div>
        {/* Mobile Title */}
        {/* Title */}
        <div className='absolute top-28 hidden w-full overflow-hidden sm:flex lg:top-16'>
          <motion.h1
            onMouseEnter={() => setCursorProps("text")}
            onMouseLeave={() => setCursorProps('default')}
            initial="hidden"
            animate={{ x: scroll * 1.6, opacity: 1 }}
            transition={{
              x: { type: "spring", stiffness: 100 },
              delay: 0.01,
            }}
            className='hidden whitespace-nowrap text-9xl font-bold tracking-wide text-primary sm:flex lg:text-[180px] xl:text-[210px] 2xl:text-[235px] 3xl:text-[260px] 4xl:text-[300px]'>I <span className="text-red-300"> LOVE </span> BUILD</motion.h1>
        </div>
        <div onMouseEnter={() => setCursorProps("hovered")} onMouseLeave={() => setCursorProps('default')} >
          <WindowTab />
        </div>
        <div className='relative top-[250px] z-40 px-5 md:z-0 lg:top-[400px] xl:top-[500px] xl:px-0 2xl:z-40 2xl:px-10 3xl:px-5' onMouseEnter={() => setCursorProps("text")}
          onMouseLeave={() => setCursorProps('default')}>
          <motion.h1
            initial="hidden"
            animate={{ x: scroll * -1.6, opacity: 1 }}
            transition={{
              x: { type: "spring", stiffness: 100 },
              delay: 0.01,
            }}
            className='text-accent-2 absolute hidden whitespace-nowrap text-9xl font-bold tracking-wide md:flex lg:text-[180px] 2xl:text-[200px] 3xl:text-[215px] 4xl:text-[240px]'>THINGS</motion.h1>
        </div>
      </section>
      <div className='absolute bottom-5 left-1/2 animate-bounce'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
      <div className='h-screen'></div>
      <div className='z-40 mt-20 px-20 sm:mt-48'>
        <h1 className='text-5xl font-bold text-accent underline md:text-7xl'>About Me</h1>
      </div>
      <About setCursorProps={setCursorProps} />
      <div className='z-40 mt-36 inline-block w-max px-20 text-center'>
        <h1 className='text-7xl font-bold text-accent underline'>My Projects</h1>
      </div>
      {/* <CardWithGlow /> */}
      <div className='z-40 mt-36 inline-block w-max px-20 text-center'>
        <h1 className='text-7xl font-bold text-accent'>Building... 🛠️</h1>
      </div>
    </main>
  )
}
