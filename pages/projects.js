import React from 'react'
import Link from 'next/link'
import First from "../assets/images/portfolio1.PNG"
import Second from "../assets/images/portfolio.PNG"
import Third from "../assets/images/portfolio2.PNG"
import Fourth from "../assets/images/portfolio5.PNG"
import Fifth from "../assets/images/portfolio4.PNG"
import Image from "next/image";
import ProjectsHeader from '../components/ProjectsHeader';
import Footer from '../components/Footer'
import { faFacebook,faInstagram,faTwitter,faLinkedin,faGithub, fa} from '@fortawesome/free-brands-svg-icons'
import { faCoffee,faEnvelope, faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const projects = () => {
  console.log(First)
  console.log(Second)
  console.log(Third)
  console.log(Fourth)
  console.log(Fifth)
  return (
    <div className='h-content lg:h-auto  flex flex-col bg-black text-white'>
      {/* <Link href="/">
        <div className='flex w-full h-[3rem]  items-center  mb-2 text-xl font-semibold cursor-pointer justify-around'>
            <p className='hover:border-b-2 border-b-[green] w-3/12'>Teslim Jimoh.</p>

            <p className='hover:border-b-2 border-b-[green]'>See More</p>
        </div>
        </Link> */}
        <ProjectsHeader />


        <div className='flex flex-col w-11/12 lg:w-8/12 h-screen justify-center  lg:h-auto mx-auto pt-2 items-center'>

          <div className='w-full lg:w-10/12 h-auto mb-4'>
          <a href="https://organicskin.herokuapp.com/" target="_blank" rel="noreferrer">
          
            <Image src={First} />
            </a>

            <div className='h-[4rem] bg-[blue] text-white flex items-center justify-between px-6 mb-4'>
              <h2 className='hover:underline underline-[teal]'>Abi&apos;s Skincare</h2>

              <div className='flex h-full gap-4 items-center'>
                <a href="https://organicskin.herokuapp.com/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faExternalLinkAlt} width={20} className="hover:text-[grey]" />
              </a>

             <a href="https://github.com/teslim191/organicskin" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} width={20} className="hover:text-[grey]" /></a>
              </div>
            </div>
          </div>

          <div className='w-full  lg:w-10/12 h-[auto] mb-4'>
   
            <Image src={Second} />
            <div className='h-[4rem] bg-[blue] text-white flex items-center justify-between px-6'>
              <h2 className='hover:underline underline-[teal]'>Reboic</h2>

              <div className='flex h-full gap-4 items-center'>
              <FontAwesomeIcon icon={faExternalLinkAlt} width={20} className="hover:text-[grey]" />

              <FontAwesomeIcon icon={faGithub} width={20} className="hover:text-[grey]" />
              </div>
            </div>
          </div>



          <div className='w-full  lg:w-10/12 h-[auto] mb-4'>
            
            <Image src={Third} />
            <div className='h-[4rem] bg-[blue] text-white flex items-center justify-between px-6'>
              <h2 className='hover:underline underline-[teal]'>G Technology</h2>

              <div className='flex h-full gap-4 items-center'>
              <FontAwesomeIcon icon={faExternalLinkAlt} width={20} className="hover:text-[grey]" />

              <FontAwesomeIcon icon={faGithub} width={20} className="hover:text-[grey]" />
              </div>
            </div>

          </div>

          <div className='w-full  lg:w-10/12 h-[auto] mb-4'>
          <Image src={Fourth} />
            <div className='h-[4rem] bg-[blue] text-white flex items-center justify-between px-6'>
              <h2 className='hover:underline underline-[teal]'>------</h2>

              <div className='flex h-full gap-4 items-center'>
              <FontAwesomeIcon icon={faExternalLinkAlt} width={20} className="hover:text-[grey]" />

              <FontAwesomeIcon icon={faGithub} width={20} className="hover:text-[grey]" />
              </div>
            </div>

          </div>



          <div className='w-full  lg:w-10/12 h-[auto] mb-4'>
            <Image src={Fifth} />
            <div className='h-[4rem] bg-[blue] text-white flex items-center justify-between px-6'>
              <h2 className='hover:underline underline-[teal]'>------</h2>

              <div className='flex h-full gap-4 items-center'>
              <FontAwesomeIcon icon={faExternalLinkAlt} width={20} className="hover:text-[grey]" />

              <FontAwesomeIcon icon={faGithub} width={20} className="hover:text-[grey]" />
              </div>
            </div>

          </div>

            {/* <h2 className='text-xl font-semibold text-center my-6'>My works.</h2> */}


{/* 

            <div className=' w-10/12  mx-auto flex flex-wrap gap-12 justify-center py-4'>


                <div className='w-5/12 h-max  flex flex-col'>

                  <div className='h-4/6  border-2'>
                    <Image src={Project} alt="Project1" className='w-full h-full'/>
                  </div>

                  <div className='h-2/6 bg-[teal] '>
                    <p className='py-4 text-center'>Abi Skincare</p>
                  </div>

            
                </div> */}

                {/* ----------------- */}


           {/* <div className='w-5/12 h-max  flex flex-col px-2'>

                  <div className='h-4/6 '>
                    <Image src={secondProject} alt="Project2" className='w-full h-full'/>
                  </div>

                  <div className='h-2/6 bg-[teal] border-2'>
                    <p>Reboic</p>
                  </div>

            
                </div> */}

                {/* ----------- */}

                {/* <div className='w-5/12 h-[15rem] border-2 border-[blue] flex flex-col px-2'>

                  <div className='h-4/6 border-[red] border-2'></div>

                  <div className='h-2/6 border-[teal] border-2'></div>

            
                </div> */}


                {/* ------------ */}

                {/* <div className='w-5/12 h-[15rem] border-2 border-[blue] flex flex-col px-2'>

                  <div className='h-4/6 border-[red] border-2'></div>

                  <div className='h-2/6 border-[teal] border-2'></div>

            
                </div>
            </div> */}
        </div>

        <Footer />
    </div>
  )
}

export default projects