import React from 'react'
import Link from 'next/link'

const ProjectsHeader = () => {
  return (
    <div>
        <div className='hidden lg:flex items-center w-full h-[5rem]  cursor-pointer  justify-between px-6'>

            
        <Link href='/'><p className='hover:border-b-2 border-[blue]'>Teslim Jimoh</p></Link>


        <Link href="">See More</Link>
        </div>
    </div>
  )
}

export default ProjectsHeader