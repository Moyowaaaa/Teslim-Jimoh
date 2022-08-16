import React,{useRef, useState,useEffect} from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { useRouter } from "next/router";


const Navbar = ({timeline, ease}) => {

  const router = useRouter();





  return (
    <div>
        <div className={`hidden lg:flex items-center w-full h-[4rem] justify-between px-6 cursor-pointer bg-[black] text-[white] lg:fixed z-50 shadow-lg shadow-blue-200" ${router.pathname === "/about" || router.pathname == '/about' ? "w-screen" : ""}`} >
        <Link href='/'><p className='link' >Teslim Jimoh.</p></Link>


        <div className='flex gap-5 cursor-pointer'>
          <Link href ="/about"  >
        <p className={`link ${router.pathname === "/about" || router.pathname == '/about' ? " " : ""}` }>about</p>
        </Link>

        <Link href="/projects">
             <p className='link'>projects</p>
        </Link>


        
              <Link href="/about/#contact"  >
                
                <p className={`link ${router.pathname === "/about#contac" || router.pathname == '/about#contact' ? "border-b-2 border-[#98dad9] " : ""}`}>contact</p></Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar