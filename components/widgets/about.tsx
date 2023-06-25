"use client"

import React, { SetStateAction, type FC } from "react"
import Link from "next/link"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface AboutProps {
  setCursorProps: {
    (value: SetStateAction<string>): void
    (arg0: string): void
  }
}

const About: FC<AboutProps> = ({ setCursorProps }) => {
  return (
    <section className="mt-20 flex h-max w-screen flex-col justify-evenly lg:flex-row">
      <article
        className="h-full w-full px-20"
        onMouseEnter={() => setCursorProps("sText")}
        onMouseLeave={() => setCursorProps("default")}
      >
        <div className="flex flex-col hover:text-red-500 sm:flex-row">
          <div className="flex">
            <h3 className="flex items-center justify-start py-5 align-middle text-4xl font-bold">
              {" "}
              Im
            </h3>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <h1 className="animate-wobble-ver-left px-2 text-6xl font-bold text-primary">
                    Guilad
                  </h1>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Yes, is prounounce like that😑</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="flex">
            <p className="flex items-center justify-start align-middle text-4xl font-bold sm:py-5">
              from
            </p>
            <p className="flex items-center justify-start px-2 align-middle text-4xl font-extrabold underline decoration-wavy sm:py-5">
              Chile
            </p>
          </div>
        </div>
        <p className="pt-5 text-lg font-medium leading-relaxed tracking-tight sm:pr-72 sm:leading-loose">
          I love💖 solving problems with technology, Im an enthusiast of
          bussiness and impact the user with creativity 🪄, I simply like
          everything that goes behind the creation of a solution.
        </p>
        <p className="underline">Know More</p>
        <div className="mt-5 flex flex-col items-start justify-start">
          <div className="flex flex-row">
            <p className="text-lg font-light">👀SEARCHING</p>
            <p className="text-lg font-bold text-primary">NEW</p>
            <p className="text-lg font-light">ADVENTURES</p>
          </div>
          <div className="flex flex-row items-start justify-center">
            <p className="text-lg font-light">👨‍💻</p>
            <p className="text-lg font-bold text-primary">DEVELOPING</p>
            <p className="text-lg font-light">SOLUTIONS</p>
          </div>
          {/* <div className="mt-2 flex flex-row items-start justify-center">
            <div className="flex flex-col items-center justify-stretch gap-0 rounded-xl bg-secondary p-2 text-white">
            <p className="text-xl font-extrabold leading-loose">+2</p>
            <p className="text-lg font-semibold">YEARS</p>
            <p className="text-lg font-bold">CODING</p>
          </div>
          </div> */}
        </div>
      </article>
      <article
        className="relative mt-5 h-full w-full overflow-hidden text-primary sm:bg-secondary"
        style={{
          clipPath: "polygon(0 2%, 100% 0, 100% 100%, 12% 100%)",
        }}
      >
        <div className="left-0 mt-10 flex animate-marquee2 text-6xl sm:text-8xl">
          <h1 className="pl-16 font-bold">The</h1>
          <h1 className="pl-10 font-bold text-pink-400">Best</h1>
          <h1 className="pl-16 font-bold">Way</h1>
          <h1 className="pl-16 font-bold">To</h1>
          <h1 className="pl-10 font-bold text-pink-200">Predict</h1>
          <h1 className="pl-10 font-bold">The</h1>
          <h1 className="text-underline pl-16 font-bold">Future</h1>
          <h1 className="pl-10 font-bold">Is</h1>
          <h1 className="pl-10 font-bold text-pink-400 underline decoration-wavy">
            Creating
          </h1>
          <h1 className="pl-10 font-bold">It</h1>
          <div className="w-36 pl-10"></div>
        </div>
        <div className="left-0 mt-20 flex animate-marquee text-4xl sm:text-6xl">
          <h1 className="pl-20 font-bold">Creating</h1>
          <h1 className="pl-20 font-bold">Innovating</h1>
          <h1 className="pl-20 font-bold">Learning</h1>
          <h1 className="pl-20 font-bold">New</h1>
          <h1 className="pl-20 font-bold">Perspectives</h1>
          <h1 className="pl-20 font-bold">Influence</h1>
          <h1 className="pl-20 font-bold">Creative</h1>
          <h1 className="pl-20 font-bold">Changes</h1>
          <h1 className="pl-20 font-bold">Lifes</h1>
          <h1 className="pl-20 font-bold">Stay Hungry</h1>
          <h1 className="pl-20 font-bold">Stay Foolish</h1>
        </div>
      </article>
    </section>
  )
}

export default About
