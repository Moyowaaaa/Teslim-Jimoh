import React,{useRef, useState,useEffect} from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { useRouter } from "next/router";
import {gsap} from "gsap"


const Navbar = () => {

  const router = useRouter();

  const tl = gsap.timeline()

  useEffect(() => {
    tl.from(".name",{
      duration:1,
      delay:1,
      x:-200,
      ease:"power2.out"
    })

    tl.from(".links", {
      stagger:1.5,
      y:"-200",
      duration:1,
      delay:0.2,
      ease:"power3.out"
    })

    // tl.from(".secondLink", {
    //   stagger:1.5,
    //   y:1200,
    //   duration:0.6,
    //   delay:0.1,
    //   ease:"power3.out"
    // })


    // tl.from(".thirdLink", {
    //   stagger:1.5,
    //   y:1200,
    //   duration:0.6,
    //   delay:0.1,
    //   ease:"power3.out"
    // })





  },[])





  return (
    <div>
        <div className={`hidden lg:flex items-center w-full h-[4rem] justify-between px-6 cursor-pointer bg-[#0a192f] text-[white] lg:fixed z-50 shadow-lg shadow-blue-200" ${router.pathname === "/about" || router.pathname == '/about' ? "w-screen" : ""}`} >
        <Link href='/'><p className='name link' >Teslim Jimoh.</p></Link>


        <div className='flex gap-5 cursor-pointer links'>
          <Link href ="/about"  >
        <p className={`link firstLink ${router.pathname === "/about" || router.pathname == '/about' ? " " : ""}` }>about</p>
        </Link>

        <Link href="/projects" >
             <p className='secondLink link'>projects</p>
        </Link>


        
              <Link href="/about/#contact" >
                
                <p className={`link thirdLink ${router.pathname === "/about#contac" || router.pathname == '/about#contact' ? "border-b-2 border-[#46b1a0] " : ""}`}>contact</p></Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar