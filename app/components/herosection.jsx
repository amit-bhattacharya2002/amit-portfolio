"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'

function Herosection() {
  return (
    <section id='heroSection'>

    <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
            <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r  from-[#008ed0] to-[#06d2a3]'>Hello, I'm </span>
            <br></br>
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Amit',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1000,
        'UI/UX Designer',
        1000,
        'Mobile Developer',
        1000
      ]}
      wrapper="span"
      speed={50}

      repeat={Infinity}
    />
            </h1>
            <p className='text-[#ADB7BE] mb-7 lg:mb-0 text-lg lg:text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat atque aut dolorum iste ea at quod. Iste tempore consectetur dolores illum aliquid odit quis accusantium rem! Vel quisquam laborum eligendi.
            </p>
            <div>
                <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r  from-[#008ed0] to-[#06d2a3] hover:bg-slate-200 text-white">Hire me</button>
                <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r  from-[#008ed0] to-[#06d2a3] hover:bg-[#1f1f1f] hover:text-white text-white  mt-4">
                  <span  className='block bg-[#1f1f1f] px-5 py-2 rounded-full sm:w-fit'>
                  Download CV
                    </span>
                  </button>
            </div>
        </div>

        <div className="col-span-5 mt-4 lg:mt-0">

            <div className="rounded-full bg-[#181818] w-50 h-100">
                <Image
                src={"/images/samplepic.png"}
                alt='amit bhattacharya'
                width={300}
                height={300}
                className='rounded-full m-auto'
                />
            </div>

        </div>
    </div>
    </section>
  )
}

export default Herosection