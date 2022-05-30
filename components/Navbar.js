import React,{useState} from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [navbar, setNavbar] = useState("")


  return (
    <div>
        <div className="hidden lg:flex items-center w-7/12 h-[5rem] justify-between px-6 cursor-pointer bg-[black] text-[white] lg:fixed z-50">
        <Link href='/'><p className='hover:border-b-2 border-[blue]'>Teslim Jimoh</p></Link>


        <div className='flex gap-5 cursor-pointer'>
        <a href="#about" className='hover:border-b-2 border-[blue]'>about</a>

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