"use client"

import ClipPathTransition from "@/components/widgets/projects"

const AboutPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center p-16">
      <div className="flex h-1/2 w-2/3 flex-row items-center justify-center overflow-hidden bg-green-500">
        <div className="flex h-max w-max items-center justify-center overflow-x-scroll">
          <ClipPathTransition />
        </div>
      </div>
    </div>
  )
}

export default AboutPage
