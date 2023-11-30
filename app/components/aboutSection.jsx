"use client"
import React, {useState, useTransition} from 'react'
import Image from 'next/image'
import TabButton from './tabButton'

const TAB_DATA = [
    {
        title:"Skills",
        id:"skills",
        content:(
            <ul className='list-disc pl-2'>
                <li>Node JS</li>
                <li>Express</li>
                <li>Next JS</li>
                <li>React JS</li>
                <li>MongoDB</li>
                <li>Java</li>
            </ul>
        )
    },
    {
        title:"Experience",
        id:"experience",
        content:(
            <ul className='list-disc pl-2'>
                <li>Coding Teacher - Code Ninjas (2022)</li>
                <li>Web Designer - Destination Global Educational Services (2019 - 2021)</li>

            </ul>
        )
    },
    {
        title:"Education",
        id:"education",
        content:(
            <ul className='list-disc pl-2'>
                <li>Diploma in Computing Studies and Information Systems (CSIS) <br></br>Douglas College, New Westminster, BC <br></br>Graduated - 2023</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState('skills')
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }
  return (
    <section id='aboutSection'><div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        
        <Image
            src={"/images/aboutimage.jpg"}
            width={500}
            height={500}
        />
        <div className='mt-4 md:mt-0 flex flex-col h-full'>
            <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
            <p className='text-base lg:text-lg'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aperiam consequuntur accusantium et labore quibusdam temporibus expedita ut quidem nesciunt vitae, architecto commodi earum eaque delectus enim voluptatibus deserunt maxime nemo. Sapiente doloremque consectetur maiores eum inventore expedita doloribus laudantium labore accusamus quo aliquid magni quis ipsum, corrupti aspernatur eligendi! Iste, quaerat iure. </p>

            <div className="flex flex-row mt-8">
                <TabButton selectTab={() => handleTabChange("skills")} active={tab ==="skills"} children={"Skills"}> Skills </TabButton>
                
                <TabButton selectTab={() => handleTabChange("experience")} active={tab ==="experience"} children={"Experience"}> Experience </TabButton>
                <TabButton selectTab={() => handleTabChange("education")} active={tab ==="education"} children={"Education"}> Education </TabButton>
                
                
            </div>

            <div className="mt-8">
                {TAB_DATA.find((t) => t.id === tab).content}
            </div>
        </div>
    </div></section>
  )
}

export default AboutSection