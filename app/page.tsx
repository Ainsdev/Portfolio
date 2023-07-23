"use client"

import React from "react"
import { motion, useScroll } from "framer-motion"

import { projectsData } from "@/config/data"
import variant from "@/config/variants"
import About from "@/components/widgets/about"
import CardSpotlight from "@/components/widgets/card-spotlight"
import Projects from "@/components/widgets/carousel/projects"
import Project from "@/components/widgets/project"
import WindowTab from "@/components/widgets/window"

export default function IndexPage() {
  const { scrollY } = useScroll()
  const [scroll, setscroll] = React.useState<number>(0)

  React.useEffect(() => {
    scrollY.onChange((latest) => {
      if (latest < 1250) {
        setscroll(latest)
      }
    })
  }, [scrollY])
  // custom cursor
  const [cursor, setCursor] = React.useState({
    x: 0,
    y: 0,
  })

  const [cursorProps, setCursorProps] = React.useState("default")
  const [cursorStyle, setCursorStyle] = React.useState(
    "rounded-full pointer-events-none"
  )

  React.useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setCursor({
        x: e.clientX,
        y: e.clientY,
      })
    }
    window.addEventListener("mousemove", mouseMove)
    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  const variants = variant(cursor)

  return (
    <main className="flex h-[1920px] w-screen cursor-none flex-col scroll-smooth">
      <motion.div
        variants={variants as any}
        animate={cursorProps}
        className={"invisible fixed top-0 sm:visible bg-primary " + cursorStyle}
      />
      <section className="w-screen">
        {/* Mobile Title */}
        <div className="absolute top-40 flex w-screen overflow-hidden p-2 md:hidden">
          <motion.h1
            initial="hidden"
            animate={{ x: scroll * -6, opacity: 1 }}
            className="whitespace-nowrap text-5xl  font-bold md:text-[220px]"
          >
            Learning, Building, and Exploring
          </motion.h1>
        </div>
        {/* Mobile Title */}
        {/* Title */}
        <div className="absolute top-28 hidden w-full overflow-hidden sm:flex lg:top-16">
          <motion.h1
            onMouseEnter={() => setCursorProps("text")}
            onMouseLeave={() => setCursorProps("default")}
            initial="hidden"
            animate={{ x: scroll * 1.6, opacity: 1 }}
            transition={{
              x: { type: "spring", stiffness: 100 },
              delay: 0.01,
            }}
            className="hidden whitespace-nowrap text-9xl font-bold tracking-wide text-primary sm:flex lg:text-[180px] xl:text-[210px] 2xl:text-[235px] 3xl:text-[260px] 4xl:text-[300px]"
          >
            I <span className="text-red-300"> LOVE </span> BUILD
          </motion.h1>
        </div>
        <div
          className="rounded-3xl bg-transparent"
          onMouseEnter={() => setCursorProps("hovered")}
          onMouseLeave={() => setCursorProps("default")}
        >
          <WindowTab />
        </div>
        <div
          className="relative top-[250px] z-40 px-5 md:z-0 lg:top-[300px] xl:px-0 2xl:top-[350px] 2xl:z-40 2xl:px-10 3xl:px-5"
          onMouseEnter={() => setCursorProps("text")}
          onMouseLeave={() => setCursorProps("default")}
        >
          <motion.h1
            initial="hidden"
            animate={{ x: scroll * -1.6, opacity: 1 }}
            transition={{
              x: { type: "spring", stiffness: 100 },
              delay: 0.01,
            }}
            className="text-accent-2 absolute hidden whitespace-nowrap text-9xl font-bold tracking-wide md:flex lg:text-[200px] 3xl:text-[215px] "
          >
            THINGS
          </motion.h1>
        </div>
      </section>
      <section className="mt-[100vh] flex h-max w-screen flex-col justify-center">
        <div className="z-40 mt-48 px-20">
          <h1 className="text-5xl font-bold text-accent  underline md:text-7xl">
            About Me
          </h1>
        </div>
        <About setCursorProps={setCursorProps} />
        <div className="z-40 mt-36 inline-block w-full px-20 ">
          <h1 className="text-5xl font-bold text-accent underline md:text-7xl">
            My Projects
          </h1>
        </div>
        {/* <div className="hidden w-full justify-start py-20 sm:flex">
          <Projects setCursorProps={setCursorProps} />
        </div> */}
        <div className="flex h-max w-full flex-col items-center justify-center gap-16 py-20">
          {/* <Project
            setCursorProps={setCursorProps}
            setCursorStyle={setCursorStyle}
            title={"YourMarket"}
            description={
              "Un marketplace de ropa y zapatillas de marca, enfocado para el mercado chileno. Con el feature principal de crear tu tienda, tener engagement y vender desde ahi"
            }
            image={
              "bg-[url('https://res.cloudinary.com/doacxwg1x/image/upload/v1689896991/Captura_web_20-7-2023_194936_yourmarket-liard.vercel.app_xxaqgu.jpg')]"
            }
            links={["https://yourmarket-liard.vercel.app/"]}
            props={[
              { text: "NextJS", color: "green" },
              { text: "TailwindCSS", color: "red" },
              { text: "TypeScript", color: "lime" },
              { text: "MongoDB", color: "green" },
            ]}
            side={"left"}
          />
           */}
          {projectsData.map((project) => (
            <Project
              key={project.title}
              setCursorProps={setCursorProps}
              setCursorStyle={setCursorStyle}
              title={project.title}
              description={project.description}
              image={project.image as string}
              links={project.links}
              props={project.props}
              side={project.side}
            />
          ))}
          <Projects setCursorProps={setCursorProps} />
        </div>
        <div className="z-40 mt-36 inline-block w-full px-20 text-start">
          <h1 className="text-5xl font-bold text-accent">Building... 🛠️</h1>
        </div>
      </section>
    </main>
  )
}
