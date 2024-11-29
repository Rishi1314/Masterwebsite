"use client";
 
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import mycartoon from "@/images/mycartoon.png"
import { Spotlight } from "./ui/Spotlight";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
const Hero = () => {
    const words = [
        {
          text: "Hi,",
        },
        {
          text: "I",
        },
        {
          text: "am",
        },
        {
          text: "Rishi Raj",
          className: " text-purple-300 dark:text-purple-300",
        },
      ];
  return (
    <div className="h-[50rem] w-full dark:bg-gray-950 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
          />
          
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <motion.div
        initial={{
          opacity: 0,
          scale:0.2
        }}
        animate={{
          scale:1,
          opacity:  1,
        }}
        transition={{
          duration: 1,
        }}
      >
<Image
                    src={mycartoon}
                    alt="me"
                    className="z-10 rounded-full bored border-solid border-[2px] border-gray-600 bg-[#706e6ec6] profilePhoto aspect-square w-[15rem]"
                />
      </motion.div>
      
          <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
              <TypewriterEffectSmooth className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8" words={words} />

      </p>
    </div>  )
}

export default Hero