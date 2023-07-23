"use client"


const AboutPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center p-16">
      <div className="flex h-1/2 w-2/3 flex-row items-center justify-center overflow-hidden bg-green-500">
        <div className="flex h-max w-max items-center justify-center overflow-x-scroll">
          <h1 className="text-9xl text-white">About</h1>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
