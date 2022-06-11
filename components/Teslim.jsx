
import React,{useState,useEffect} from 'react'
import Image from "next/image";
import picture from "../images/9.jpg";

const Teslim = () => {
  return (
    <div className='h-full  w-full flex flex-col justify-center'>
      <div className='h-4/6 w-11/12 flex flex-col items-center justify-center'>
      <Image src={picture} alt='teslim' className='object-cover h-48 w-96'/>
      </div>
    </div>
  )
}

export default Teslim