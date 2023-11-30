'use client'
import Image from 'next/image'
import Herosection from './components/herosection'
import Navbar from './components/navbar'
import AboutSection from './components/aboutSection'
import { useEffect } from 'react';

export default function Home() {
useEffect(()=>{
  const handleScroll = () => {
    const herosection = document.getElementById('heroSection');
    const aboutsection = document.getElementById('aboutSection');
    const aboutLink = document.getElementById('about');
    const logoLink = document.getElementById('logo');

    const sections = [
      {section: herosection, link: logoLink},
      {section: aboutsection, link: aboutLink}
    ]

    sections.forEach(({section, link}) => {
      if(section){
        const sectionRect = section.getBoundingClientRect();
        if(sectionRect.top >= 0 ){
          link.style.color = '#007BFF';


        }else{

          link.style.color = '#fff';
        }
      }
    })
  }
  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  }
}, [])

  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container mx-auto mt-24 px-5 py-8">
      <Navbar/>
    <Herosection/>
    <AboutSection/>
    </main>
  )
}
