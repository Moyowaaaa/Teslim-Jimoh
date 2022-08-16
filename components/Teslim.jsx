import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {gsap} from "gsap"

import picture from "../images/2.jpg";

const Teslim = () => {

  const tl = gsap.timeline()

  useEffect(() => {
    
    tl
    .from(".number", { duration: 2, opacity: 0, y: -300, ease: "Bounce.easeOut" })
    .from(".teslim", {
      duration:1,
      ease:"power3.inOut",
      scale:2.5,
      delay:0,
    })
  })


  return (
    <div className="h-full  py-[2rem] lg:py-0  w-full flex flex-col justify-center items-center">
      <div className="number h-4/6 w-full flex flex-col items-center justify-center lg:w-11/12">
        <Image src={picture} alt="teslim" className="teslim object-cover h-48 w-96" />
      </div>
    </div>
  );
};

export default Teslim;
