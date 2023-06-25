"use client"

import Flashcards from "@/components/widgets/projects"

const AboutPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center p-96">
      <div className="w-96 overflow-hidden bg-red-500">
        <div className="w-max">
          <Flashcards />
        </div>
      </div>
    </div>
  )
}

export default AboutPage
