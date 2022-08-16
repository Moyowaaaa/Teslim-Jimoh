import React,{useRef, useState,useEffect} from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { useRouter } from "next/router";
// import {gsap, Power3, Elastic, } from 'gsap';

const Navbar = () => {
  const [navbar, setNavbar] = useState("")
  const router = useRouter();
  let navbarRef =  useRef(null);
  // let linkRef = useRef(null);
  // const tl = gsap.timeline()
  // let elastic = Elastic.easeOut;
  // let ease = Power3.easeOut;


  useEffect(() => {

    // tl.fromTo(navbarRef, 
      // {
      //   duration:1,
      //   y:-1200,
      // }, {
      //   duration:2,
      //   y:0,
      //   stagger:3.8,
      //   ease:"elastic.easeOut",
      //   delay:1,
        
      // }
      // {
      //   duration:2,
      //   delay:1,
      //   y:0,
      //   ease:"elastic.out"
      // },
      // {
      //   duration:2,
      //   y:0,
      //   ease:"elastic.out"
      // }
      // )
  
    // tl.from(linkRef,{
    //   duration: 3,
    //   stagger:0.8,
    //   opacity:1,
    //   delay:1
    // })
  })




  return (
    <div>
        <div className={`hidden lg:flex items-center w-full h-[4rem] justify-between px-6 cursor-pointer bg-[black] text-[white] lg:fixed z-50 shadow-lg shadow-blue-200" ${router.pathname === "/about" || router.pathname == '/about' ? "w-screen" : ""}`} ref={el=> {navbarRef = el }}>
        <Link href='/'><p className='link'>Teslim Jimoh.</p></Link>


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