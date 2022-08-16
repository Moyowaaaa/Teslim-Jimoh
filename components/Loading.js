import React,{useEffect} from 'react'
import {gsap} from "gsap"


const Loading = () => {
    const tl = gsap 

    useEffect(() => {
        tl.to(".first",{
            duration:1,
            delay:1.8,
            y:-1200,
            ease:"power2.easeOut"
        })
    
        tl.to(".middle",{
            duration:2,
            delay:1.4,
            y:-1400,
            ease:"power3.easeInOut"
        })
    
        tl.to(".third",{
            duration:2,
            delay:1.2,
            y:-1600,
            ease:"bounce.out"
        })
    })
  return (
    <div className='absolute w-full h-screen  z-50'>
        <div className='flex h-full '>
            <div className='first w-4/12 h-full bg-[#98dad9]'></div>
            <div className='middle w-4/12 h-full bg-[#98dad9]'></div>
            <div className='third w-4/12 h-full bg-[#98dad9]'></div>
            


        </div>

        </div>
  )
}

export default Loading