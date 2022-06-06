import React,{useState} from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { useRouter } from "next/router";

const Navbar = () => {
  const [navbar, setNavbar] = useState("")
  const router = useRouter();

  return (
    <div>
        <div className={`hidden lg:flex items-center w-7/12 h-[5rem] justify-between px-6 cursor-pointer bg-[#edeced] text-[black] lg:fixed z-50" ${router.pathname === "/about" || router.pathname == '/about' ? "w-screen" : ""}`}>
        <Link href='/'><p className='hover:border-b-2 border-[blue]'>Teslim Jimoh.</p></Link>


        <div className='flex gap-5 cursor-pointer'>
          <Link href ="/about">
        <p className={`hover:border-b-2 border-[blue] ${router.pathname === "/about" || router.pathname == '/about' ? "underline decoration-[blue] " : ""}` }>about</p>
        </Link>

        <Link href="/projects">
             <p className='hover:border-b-2 border-[blue]'>projects</p>
        </Link>
              {/* <a href="#resume" className='hover:border-b-2 border-[blue]'>resumé</a> */}
              <a href="#contact" className='hover:border-b-2 border-[blue]'>contact</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar