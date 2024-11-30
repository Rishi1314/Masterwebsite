import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'
import Grid from "@/components/Grid"

const page = () => {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden">
      <div className=" w-full">
        <Navbar/>
        <Hero />
        <Grid/>
      </div>
    </main>
  )
}

export default page