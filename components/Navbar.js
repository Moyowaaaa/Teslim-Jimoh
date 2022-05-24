import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        <div className='hidden lg:flex items-center w-full h-[5rem] justify-between px-6 cursor-pointer bg-[black] text-[white]'>
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