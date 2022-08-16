import React,{useEffect, useState} from 'react'
import MobileMenu from './MobileMenu'

import Link from 'next/link'
import Router from 'next/router'
import { useRouter } from "next/router";



const MobileNav = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const router = useRouter();

    const closeMenu = () => {
      setOpenMenu(false)
    }
  

    return (

      <div className='lg:hidden z-50 bg-[black] text-[#98dad9]'>
        
        
      {openMenu ?  <button className="top-6 right-10 fixed z-50 text-4xl " onClick={() => setOpenMenu(!openMenu)}> &#9776;</button>:
        "" }


      <button className="top-6 right-10 fixed z-50 text-4xl" onClick={() => setOpenMenu(!openMenu)}> &#9776;</button>

      <div className={`"top-0 right-0 fixed text-[darkslategrey] bg-[#98dad9] shadow-lg h-full w-screen z-50 ease-in-out duration-700 " ${openMenu ? " translate-x-0" : " translate-x-full"} `}>
      <button className='top-6 right-12 fixed z-50 text-2xl' onClick={closeMenu}>X</button>



      <div className='w-full h-4/6'>
        <div className=' flex flex-col h-full items-center justify-center gap-8' >
          <Link href='/' >
            <p onClick={closeMenu}>home</p>
          </Link>

        <Link href ="/about">
        <p onClick={closeMenu} className={`hover:border-b-2 border-[#98dad9] ${router.pathname === "/about" || router.pathname == '/about' ? " " : ""}` }>about</p>
        </Link>


        <Link href="/projects">
             <p onClick={closeMenu} className='hover:border-b-2 border-[blue]'>projects</p>
        </Link>

        <Link href="/about/#contact">
                
                <p onClick={closeMenu} className={`hover:border-b-2 border-[blue] ${router.pathname === "/about#contac" || router.pathname == '/about#contact' ? "border-b-2 border-[blue] " : ""}`}>contact</p></Link>


        </div>

        </div>
     
        </div>
    </div>
  )
}

export default MobileNav