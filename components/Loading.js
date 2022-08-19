import React,{useEffect} from 'react'
import {gsap} from "gsap"


const Loading = () => {
    const tl = gsap 

    useEffect(() => {
           tl.to(".first",{
      duration:1.8,
      delay:1.2,
      y:-1200,
      ease:"power2.easeOut",
      
  })

  tl.to(".middle",{
      duration:1.9,
      delay:1.4,
      y:-1400,
      ease:"power3.easeInOut",
      opacity:0
  })

  tl.to(".third",{
      duration:1.7,
      delay:1.2,
      y:-1600,
      ease:"bounce.out",
      opacity:0
}) 
},[])
  return (
    <div className='overlay absolute w-full h-screen '>
        <div className='flex h-full '>
    <div className='first w-4/12 h-full bg-[#46b1a0]'></div>
    <div className='middle w-4/12 h-full bg-[#46b1a0]'></div>
    <div className='third w-4/12 h-full bg-[#46b1a0]'></div>

    <div className='absolute w-full h-full flex items-center justify-center flex-col'>
        
       <h1 className='text-3xl font-bold text-[#112240]'> Teslim Jimoh </h1>
        <h1 className='text-3xl font-bold text-[white]'>Backend Engineer</h1>
        
        </div>
            


        </div>

        </div>
  )
}

export default Loading