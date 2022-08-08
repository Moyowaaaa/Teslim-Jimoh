import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { useState,useEffect,useRef } from 'react'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import MobileNav from '../components/MobileNav'

import { faFacebook,faInstagram,faTwitter,faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons'
import teslim from "../images/teslim.jpg"

import Navbar from '../components/Navbar'
import Teslim from '../components/Teslim'





export default function Home() {

  

    
const [openMenu, setOpenMenu] = useState(true)
const closeMenu = () => {
  setOpenMenu(true)
}




useEffect(() => {
  setOpenMenu(true)
  console.log(content)
  const Header = content.children[1]

  const stack = content.children[3]

 
})

 



  return (
    <div className=''onScroll={closeMenu}  >
      <Head>
        <title>Teslim Jimoh</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MobileNav  />
      <div className=' pt-[3rem] flex flex-col-reverse lg:flex-row h-auto justify-between lg:pt-0' >
        

        <div className='w-12/12 lg:w-7/12 h-screen  px-auto'>


          <Navbar />

  
          {/* ---------- */}
          <div className='w-full h-full flex flex-col items-center justify-center bg-[#edeced] text-[black]'>


            <div className=' w-full h-full flex flex-col  lg:justify-center pt-[3rem] lg:pt-0'>
              <div className='w-10/12 lg:w-7/12 mx-auto  flex flex-col lg:justify-center' >
                <h1 className='font-semibold text-[blue] text-xl lg:text-2xl'>HELLO, EARTHLINGS.</h1>
            <h2 className='text-2xl lg:text-4xl font-bold mb-3 '>
I&apos;m Jimoh Teslim Oyewale.
</h2>

<p className='w-full lg:w-full text-sm   mx-auto py-4 text-justify'>

I&apos;m an Innovative Software Engineer with more than 2 years of experience in Web Application Development. Demonstrated talent for front and back-end web development. Detail-oriented, with a passion for writing clean and reusable codes in problem-solving. I am passionate about transforming ideas into reality and is always motivated to take up new challenges that will enable me learn and improve on my skillset.
</p>
<p className='mb-2 text-xl font-lg text-[blue]'>| Backend Engineer |</p>


<div className='w-full flex items-center gap-5 my-2 cursor-pointer'>
<a href='https://github.com/teslim191' target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faGithub} width={25} className="hover:text-[blue]" /></a>
<a href="https://www.linkedin.com/in/teslim-jimoh-52056818a" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faLinkedin} width={25} className='text-[blue] hover:text-black' /></a>
<a href='https://mobile.twitter.com/Teslim_96' target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faTwitter} width={25} className="hover:text-[blue]" /></a>


</div>






<div className='flex mt-5'>

<a href="https://drive.google.com/file/d/1BSOp8LtiwsQtPJx3oJwBsTRf4g9h_Uq_/view?usp=drivesdk" target="_blank" rel="noreferrer">
<button className='h-auto px-6 lg:px-12 bg-[green] py-4 mr-4 text-white hover:border-[green] hover:border-2 hover:text-[black] hover:bg-[white] rounded-lg' >Resumé</button>
</a>




<Link href="/about/#contact">
<button className='h-auto px-6 lg:px-12 bg-[white] py-4 mr-4 text-black border-[blue] border-2 hover:bg-[blue] hover:text-white hover:border-0 rounded-lg'>Hire Me</button>
</Link>
</div>

            </div>


            

            </div>

            </div>

          


            
        </div>



        
          
    

          <div className='w-11/12 mx-[auto]  lg:w-4/12 lg:h-screen'> 
        <Teslim />
        </div>

      </div>


    </div>
  )
}
