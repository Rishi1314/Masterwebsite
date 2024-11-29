import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden">
      <div className=" w-full">
        <Navbar/>
        <Hero/>
      </div>
    </main>
  )
}

export default page