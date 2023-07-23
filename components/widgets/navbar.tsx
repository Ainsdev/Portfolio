"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import { Home, Menu } from "lucide-react"

import { siteConfig } from "@/config/site"

import { ThemeToggle } from "../theme-toggle"

const { lastProject } = siteConfig
const NavBar = () => {
  const pathName = usePathname()
  //Check if the current route is home
  const isHome = pathName === "/" || pathName === "/simple"
  const [show, setShow] = React.useState(false)
  return (
    <nav className="sticky right-0 top-0 z-50 h-full w-full">
      {show && (
        <div className="absolute left-0 top-20 z-40 flex w-72 animate-bounce-in-right gap-3 rounded-r-3xl bg-primary p-6 text-center sm:top-0 sm:rounded-none sm:rounded-br-3xl">
          <Link href="/about">
            <h1 className="w-full animate-bounce-in-right font-bold text-white  dark:text-black">
              About
            </h1>
          </Link>
          <Link href="/projects">
            <h1 className="w-full animate-bounce-in-right font-bold text-white   dark:text-black">
              Projects
            </h1>
          </Link>
          <Link href="/contact">
            <h1 className="w-full animate-bounce-in-right font-bold text-white  dark:text-black">
              Contact
            </h1>
          </Link>
        </div>
      )}
      <div className="absolute right-0 z-40 flex w-72 gap-3 rounded-b-3xl bg-primary p-6 text-center">
        <Link href="/">
          {isHome ? (
            <button
              className="z-[300] h-max w-max"
              onClick={(e) => {
                e.preventDefault()
                setShow(!show)
              }}
            >
              <Menu className="z-[300] h-5 w-5 cursor-pointer text-accent" />
            </button>
          ) : (
            <Home className="h-5 w-5 cursor-pointer text-accent hover:scale-110 " />
          )}
        </Link>
        <h1 className="w-full font-bold text-accent">
          Guilad | Web Developer
        </h1>
      </div>
      <div className="absolute right-0 flex h-36 w-20 items-end justify-center rounded-3xl bg-green-200 p-4 hover:scale-110">
        <ThemeToggle />
      </div>
      <div
        className={clsx(
          "absolute right-0 top-[500px] z-40 hidden translate-x-28 -rotate-90 cursor-pointer rounded-t-3xl bg-accent px-8 py-3 text-center transition-all ease-in-out hover:translate-y-3 sm:flex",
          show ? "bg-green-200 text-black" : "bg-primary text-accent"
        )}
      >
        <Link href={lastProject} className="w-full text-lg font-semibold">
          <h1>Check my last project</h1>
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
