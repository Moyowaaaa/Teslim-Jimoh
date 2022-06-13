import React from 'react'
import Link from 'next/link'
import { faFacebook,faInstagram,faTwitter,faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ProjectsHeader = () => {
  return (
    <div>
        <div className='w-screen flex items-center lg:w-full h-[4rem] shadow-md shadow-blue-100 cursor-pointer  justify-between px-6 bg-[#edeced] text-[black] fixed z-50 '>

            
        <Link href='/'><p className='hover:border-b-2 border-[blue]'>Teslim Jimoh.</p></Link>


        <Link href='https://github.com/teslim191?tab=repositories' target="_blank" rel="noreferrer"><div className='flex items-center cursor-pointer hover:underline hover:text-[blue]'><span className='hidden lg:flex'>See More</span> &nbsp;&nbsp;<FontAwesomeIcon icon={faGithub} width={20} className="hover:text-[blue]" /></div></Link>
        </div>
    </div>
  )
}

export default ProjectsHeader