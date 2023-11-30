"use client";
import React, {useState} from 'react'
import Link from 'next/link'
import NavLink from './navLink'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid'

import MenuOverlay from './menuOverlay';

const navLinks = [
    {
        title: "About",
        path:"#about",
        id:"about"
    },
    {
        title: "Projects",
        path:"#projects",
        id:"projects"
    },
    {
        title: "Contact",
        path:"#contact",
        id:"contact"
    },
]
function Navbar() {



    const [ navbarOpen, setNavbarOpen] = useState(false)
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-1'>

    <div className='flex flex-wrap items-center justify-between mx-auto py-4 px-4'>  
        <Link href={'/'} className='text-5xl text-white font-semibold' id='logo'>A B</Link>
        <div className='mobile-menu block md:hidden'> 
        {
            !navbarOpen ? (
                <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded-full border-slate-200 text-slate hover:text-white'><Bars3Icon className='w-5 h-5'/></button>
            ) : (
                <button  onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded-full border-slate-200 text-slate hover:text-white'><XMarkIcon className='w-5 h-5'/></button>
            )
        }
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className='flex md:p-0 md:flex-row md:space-x-8 mt-0'>
                    {navLinks.map((items, index)=> (
                        <li key={index}>
                            <NavLink href={items.path} title={items.title} id={items.id}/>
                        </li>
                    ))}
            </ul>
        </div>
    </div>

    {navbarOpen ? <MenuOverlay links={navLinks}/> : null}
    </nav>
  )
}

export default Navbar