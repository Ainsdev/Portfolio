"use client"

import React, { SetStateAction } from "react"
import Image from "next/image"
import clsx from "clsx"
import { motion } from "framer-motion"
import { render } from "react-dom"

import move from "./moveFunction"
import { shittyProjects } from "@/config/data"

const CARD_OFFSET = 10
const SCALE_FACTOR = 0.06
interface ProjectsProps {
  setCursorProps: {
    (value: SetStateAction<string>): void
    (arg0: string): void
  }
  data?: Array<any>
}

const Projects = ({ setCursorProps, data }: ProjectsProps) => {
  const [cards, setCards] = React.useState(shittyProjects)
  const moveToEnd = (from: number) => {
    setCards(move(cards, from, shittyProjects.length - 1))
  }

  return (
    <div className="relaltive flex h-max w-2/3 flex-row-reverse items-center justify-center self-start overflow-hidden border-2 border-l-0  border-white bg-secondary md:rounded-r-3xl lg:mr-28">
      {/* <button
        onMouseEnter={() => setCursorProps("sText")}
        onMouseLeave={() => setCursorProps("default")}
        className="inline-flex h-12 animate-background-shine items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        Click Me
      </button> */}
      <h3 className="text-5xl font-bold text-accent underline">Old Stuff</h3>
      <ul className="relative mt-20 flex h-96 w-2/3">
        {cards.map((card, index) => {
          const canDrag = index === 0
          return (
            <motion.li
              key={card.title}
              className={clsx(
                "absolute w-2/3 h-72 rounded-xl list-none origin-top flex items-center justify-center",
                card.color,
                canDrag ? "cursor-grab" : "cursor-auto"
              )}
              animate={{
                top: index * CARD_OFFSET * -2,
                rotate: index * SCALE_FACTOR,
                scale: 1 - index * SCALE_FACTOR,
                zIndex: shittyProjects.length - index,
              }}
              drag={canDrag}
              dragConstraints={{
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              }}
              onDragEnd={() => moveToEnd(index)}
            >
              <div className="group relative flex h-full w-full flex-col items-center justify-center gap-4">
                <h1 className="text-3xl font-bold text-white group-hover:text-accent">
                  {card.title}
                </h1>
                {/* Technologies Used */}
                <p className="text-sm italic text-white group-hover:text-accent">
                  {card.technologies}
                </p>
                <button
                  onClick={() => window.open(card.link, "_blank")}
                  onMouseEnter={() => setCursorProps("sText")}
                  onMouseLeave={() => setCursorProps("default")}
                  className="inline-flex h-8 animate-background-shine items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                  View
                </button>
              </div>
            </motion.li>
          )
        })}
      </ul>
    </div>
  )
}

export default Projects
