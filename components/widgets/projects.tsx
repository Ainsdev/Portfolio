"use client"

import React, { MouseEvent, useContext, useState } from "react"
import clsx from "clsx"
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion"

const wrapperVariants = {
  initial: {
    clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
    transition: { duration: 0.4 },
  },
  animate: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: { duration: 0.4, staggerChildren: 0.1 },
  },
  exit: {
    clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
    transition: { duration: 0.4 },
  },
}
const squareVariants = {
  initial: {
    opacity: 0,
    scale: 0.3,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
}
const ClipPathTransition = () => {
  const [selectedSquare, setSelectedSquare] = useState(null) as any
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect()

    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }
  const renderSquares = () => {
    const squares = ["yellow", "green", "green", "secondary"]
    return squares.map((color, i) => (
      // <motion.div
      //   key={i}
      //   className='relative m-16 h-64 w-64 cursor-pointer rounded-2xl bg-secondary shadow-2xl transition-all hover:translate-y-3'
      //   onClick={() => setSelectedSquare(color)}
      //   variants={squareVariants}
      //   transition={{ duration: .2, type: 'spring' }}
      // >
      //   <h1 className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white">{color}</h1>
      // </motion.div>
      <div
        key={i}
        className="group relative w-max rounded-xl border border-white/10 bg-gray-900 px-8 py-16 shadow-2xl"
        onMouseMove={handleMouseMove}
      >
        <motion.div
          onClick={() => setSelectedSquare(color)}
          variants={squareVariants}
          transition={{ duration: 0.2, type: "spring" }}
          className="relative gap-8 -inset-px m-16 flex h-64 w-96 cursor-pointer flex-col rounded-xl  opacity-0 ring-1 ring-primary drop-shadow-[0_20px_40px_rgba(14,_0,_255,_0.4)] backdrop-blur-xl transition-all"
          style={{
            background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.16),
              transparent 80%
            )
          `,
          }}
        >
          <div className="bg-base-2 flex h-10  w-full items-center justify-end space-x-1.5 rounded-t-lg px-4">
            <div className="mr-20 rounded-b-lg bg-black p-2 font-semibold text-white">
              YOURMARKET
            </div>
            <div className="h-2 w-2 rounded-full bg-green-400"></div>
            <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
            <div className="h-2 w-2 rounded-full bg-red-500"></div>
          </div>
        </motion.div>
      </div>
    ))
  }
  return (
    <div
      className={`cp-transition cp-transition__container cp-transition__container--${selectedSquare}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {selectedSquare ? (
          <motion.div
            className={`card card__wrapper card__wrapper--${selectedSquare} bg-red-500`}
            key="card"
            variants={wrapperVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Lorem ipsum</h2>
              <button
                className="bg-transparent text-white focus:outline-none"
                onClick={() => setSelectedSquare(null)}
              >
                X
              </button>
            </div>
            <div className="grid grid-cols-1 content-center gap-8 ">
              <div className="h-36 w-36 rounded-3xl bg-slate-500" />
              <div className="text-justify text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                ea neque quidem exercitationem possimus.
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="flex h-full w-full items-center justify-center"
            key="squares"
            variants={wrapperVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {renderSquares()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ClipPathTransition
