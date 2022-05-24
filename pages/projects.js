import React from 'react'
import Link from 'next/link'
import Project from "../assets/Images/Project.png"
import secondProject from "../assets/Images/project3.png"
import thirdProject from "../assets/Images/portfolio4.png"
import Image from "next/image";
import ProjectsHeader from '../components/ProjectsHeader';
import Footer from '../components/Footer'


const projects = () => {
  return (
    <div className='h-screen  flex flex-col'>
      {/* <Link href="/">
        <div className='flex w-full h-[3rem]  items-center  mb-2 text-xl font-semibold cursor-pointer justify-around'>
            <p className='hover:border-b-2 border-b-[green] w-3/12'>Teslim Jimoh.</p>

            <p className='hover:border-b-2 border-b-[green]'>See More</p>
        </div>
        </Link> */}
        <ProjectsHeader />


        <div className='flex flex-col w-11/12 lg:w-8/12 h-screen justify-center  lg:h-auto mx-auto pt-2 items-center'>
          <div className='w-full lg:w-10/12 h-auto'>
            <Image src={Project}  />
          </div>

          <div className='w-full  lg:w-10/12 h-[auto]'>
            <Image src={secondProject}  />
          </div>


          <div className='w-full  lg:w-10/12 h-[auto]'>
            <Image src={thirdProject}  />
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