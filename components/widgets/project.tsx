import React, { FC, SetStateAction } from "react"
import clsx from "clsx"

import { Button } from "../ui/button"

type Props = {
  text: string
  color: string
}

interface ProjectProps {
  setCursorProps: {
    (value: SetStateAction<string>): void
    (arg0: string): void
  }
  setCursorStyle: React.Dispatch<React.SetStateAction<string>>
  title: string
  side: string
  description: string
  image: string
  links: Array<string>
  props: Array<Props>
}

const Project: FC<ProjectProps> = ({
  setCursorProps,
  setCursorStyle,
  title,
  description,
  image,
  links,
  props,
  side,
}) => {
  return (
    <div
      key={title}
      onMouseEnter={() => {
        setCursorProps("project")
        setCursorStyle(
          "rounded-3xl opacity-50 pointer-events-none cursor-pointer  bg-center bg-cover bg-no-repeat " +
            image
        )
      }}
      onMouseLeave={() => {
        setCursorProps("default")
        setCursorStyle("rounded-full pointer-events-none")
      }}
      className={clsx(
        "relaltive flex h-56 w-3/4 items-center justify-start overflow-hidden  bg-secondary hover:bg-secondary/70 transition-all duration-500 ease-in-out",
        side === "left"
          ? "md:rounded-r-3xl self-start"
          : "md:rounded-l-3xl self-end flex-row-reverse"
      )}
    >
      <div
        onClick={() => {
          window.open(links[1], "_blank")
        }}
        className="flex h-full w-3/4 flex-col items-start justify-evenly px-2 hover:cursor-pointer"
      >
        <h1 className="text-[78px] font-bold tracking-wide text-white xl:text-8xl 3xl:text-9xl">
          {title}
        </h1>
        <p className="text-ellipsis text-sm italic text-white">{description}</p>
      </div>
      <div className="h-full w-1/4 flex-col items-end justify-center hover:cursor-default">
        <div className="flex h-1/2 w-full flex-wrap items-center justify-center p-1">
          {props.map((prop) => (
            <span
              key={prop.text}
              className={
                 clsx(
                  "mr-2 rounded-full px-2.5 py-0.5 text-xs font-medium",
                  prop.color === "pink" ? "bg-pink-800 text-pink-200" : "bg-green-800 text-green-200",
                  prop.color === "red" ? "bg-red-800 text-red-200" : "bg-green-800 text-green-200",
                  prop.color === "blue" ? "bg-blue-800 text-blue-200" : "bg-green-800 text-green-200",
                  prop.color === "yellow" ? "bg-yellow-800 text-yellow-200" : "bg-green-800 text-green-200",
                  prop.color === "purple" ? "bg-purple-800 text-purple-200" : "bg-green-800 text-green-200",
                )
              }
            >
              {prop.text}
            </span>
          ))}
        </div>
        <div className="flex h-1/2 w-full items-center justify-center">
          <Button variant="default">
            <a href={links[0]} target="_blank" rel="noreferrer">
              Ver Proyecto
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Project
