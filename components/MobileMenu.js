import React,{useState} from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { useRouter } from "next/router";


const MobileMenu = ({openMenu, closeMenu}) => {
    const router = useRouter()
    

 
    


  return (
      <div className={`w-full border-2 border-[teal] absolute h-screen fixed overlay z-50 ${openMenu ? "hidden":"block"}`}>
          <div className='flex flex-col h-full justify-center items-center'>
              {/* <div className=' text-3xl text-white text-white w-[55px] flex items-center justify-center bg-[skyblue] py-2 px-2 hover:bg-[blue] text-white cursor-pointer rounded-full 'onClick={closeMenu}>X</div> */}
              <div className='text-3xl text-white bg-[blue] py-2 px-4 rounded-full' onClick={closeMenu}>
                X
              </div>

              <div className='flex flex-col justify-center items-center'>
              <Link href='/'><p className='py-4 text-3xl text-white'>home</p></Link>



              <Link href ="/about">
        <p className={` py-4 text-3xl text-white  ${router.pathname === "/about" || router.pathname == '/about' ? " " : ""}` }>about</p>
        </Link>


        <Link href="/projects">
             <p className=' py-4 text-3xl text-white '>projects</p>
        </Link>


        <Link href="/about/#contact">
                
                <p className={`py-4 text-3xl text-white  ${router.pathname === "/about#contac" || router.pathname == '/about#contact' ? "border-b-2 border-[blue] " : ""}`}>contact</p></Link>
        





              </div>
          </div>


     </div>
    
  )
}

export default MobileMenu