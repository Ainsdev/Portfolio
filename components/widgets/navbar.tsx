"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Menu } from "lucide-react"

import { siteConfig } from "@/config/site"

import { ThemeToggle } from "../theme-toggle"

const { lastProject } = siteConfig
const NavBar = () => {
  const pathName = usePathname()
  //Check if the current route is home
  const isHome = pathName === "/"
  return (
    <nav className="sticky right-0 top-0 z-50 h-full w-full">
      {isHome ? (
        <></>
      ) : (
        <Link href="/contact">
          <div className="absolute left-0 top-0 z-10 cursor-pointer rounded-br-3xl bg-primary px-8 py-3 text-center text-black transition-transform ease-in-out hover:translate-x-3">
            <h1 className="w-full text-xl font-bold">Contact</h1>
          </div>
        </Link>
      )}
      <div className="absolute right-0 z-40 flex w-72 gap-3 rounded-b-3xl bg-primary p-6 text-center">
        <Link href="/">
          {isHome ? (
            <Menu className="z-[300] h-5 w-5 cursor-pointer text-white hover:scale-110 dark:text-black" />
          ) : (
            <Home className="h-5 w-5 cursor-pointer text-white hover:scale-110 dark:text-black" />
          )}
        </Link>
        <h1 className="w-full font-bold text-white dark:text-black">
          Guilad | Web Developer
        </h1>
      </div>
      <div className="absolute right-0 flex h-36 w-20 items-end justify-center rounded-3xl bg-accent p-4 hover:scale-110">
        <ThemeToggle />
      </div>
      <div className="absolute right-0 top-[500px] z-40 hidden translate-x-28 -rotate-90 cursor-pointer rounded-t-3xl bg-accent px-8 py-3 text-center text-black transition-transform ease-in-out hover:translate-y-3 sm:flex">
        <Link
          href={lastProject}
          className="w-full text-lg font-semibold text-primary"
        >
          <h1>Check my last project</h1>
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
