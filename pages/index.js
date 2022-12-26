import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import MobileNav from "../components/MobileNav";
import Loading from "../components/Loading";

import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import teslim from "../images/teslim.jpg";

import Navbar from "../components/Navbar";
import Teslim from "../components/Teslim";
import {gsap} from "gsap"

export default function Home() {
  const [preloader,setPreloader] = useState(true)
  const [timer,setTimer] = useState(3)
  const id = useRef(null)

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false)
  }



  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer -1)
    }, 1000)
  },[])

  useEffect(() => {
    if (timer === 0){
      clear()
    }
  },[timer])


  const tl = gsap 
  const [openMenu, setOpenMenu] = useState(true);
  const closeMenu = () => {
    setOpenMenu(true);
  };

  useEffect(() => {
    setOpenMenu(true);
    // tl.from(".greeting",{
    //   stagger:1.5,
    //   x:"-1200",
    //   duration:2,
    //   delay:1.2,
    //   ease: "power3.out"
    // })
    // tl.from(".stack",{
    //   stagger:1.5,
    //   x:"-800",
    //   duration:1.2,
    //   delay:0,
    //   ease: "power3.out"
    // })
    
    // tl.from(".about",{
    //   duration:1.2,
    //   y:1200,
    //   ease: "power2.inOut"
    // })
    // tl.from(".lolo",{
    //   duration:1,
    //   delay:1.2,
    //   y:1300,
    //   ease:"power3.out"
    // })
    tl.from(".introduction-greeting", {
      duration:1,
      opacity:0,
      y:"100",
      ease:"power3.easeinOut",
      delay:3.2
    })
    tl.from(".introduction-name",{
      duration:1,
      opacity:0,
      y:"100",
      delay:3,
      ease: "power2.easeOut"
    })


    tl.from(".introduction-about",{
      duration:1.2,
      delay:1.2,
      y:"100",
      ease:"power3.easeinOut",
      opacity:0
    })
    tl.from(".introduction-stack",{
      duration:1,
      opacity:0,
      y:"-100",
      delay:3,
      ease: "power2.easeOut"
    })

    tl.from([".introduction-links", ".introduction-buttons"],{
      duration:1,
      opacity:0,
      y:"-100",
      delay:3.2,
      ease: "power2.easeOut"
    })
    
 

  },[]);

  return (
    <>
    {preloader ?  (
    <Loading />
    ) : (



    <div className="overflow-hidden" onScroll={closeMenu}>
<Head>
<title>Teslim Jimoh - Backend Engineer</title>
<meta name="description" content="Generated by create next app" />
<link rel="icon" href="/favicon.ico" />
</Head>


<MobileNav />
<div className=" pt-[3rem] flex flex-col-reverse lg:flex-row h-auto justify-between lg:pt-0">
<div className="w-12/12 lg:w-7/12 h-screen  px-auto">
  
  <Navbar />

  {/* ---------- */}
  <div className="w-full h-full flex flex-col items-center justify-center bg-[#0a192f] text-[white]">
    <div className=" w-full h-full flex flex-col  lg:justify-center pt-[3rem] lg:pt-0">
      <div className=" w-10/12 lg:w-7/12 mx-auto  flex flex-col lg:justify-center">
        <h1 className="introduction-greeting font-semibold text-[#46b1a0] text-xl lg:text-2xl">
          HELLO, EARTHLINGS.
        </h1>
        <h2 className="introduction-name text-2xl lg:text-4xl font-bold mb-3 ">
          I&apos;m Jimoh Teslim Oyewale.
        </h2>

        <p className="introduction-about w-full lg:w-full text-sm   mx-auto py-4 text-justify">
          I&apos;m an Innovative Software Engineer with more than 2
          years of experience in Web Application Development.
          Demonstrated talent for front and back-end web development.
          Detail-oriented, with a passion for writing clean and reusable
          codes in problem-solving. I am passionate about transforming
          ideas into reality and is always motivated to take up new
          challenges that will enable me learn and improve on my
          skillset.
        </p>
        <p className="introduction-stack mb-2 text-xl font-lg text-[#46b1a0]">
          | Backend Engineer |
        </p>

        <div className="introduction-links w-full flex items-center gap-5 my-2 cursor-pointer">
          <a
            href="https://github.com/teslim191"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              width={25}
              className="hover:text-[#46b1a0]"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/teslim-jimoh-52056818a"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              width={25}
              className="text-[#46b1a0] hover:text-black"
            />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              width={25}
              className="hover:text-[#46b1a0]"
            />
          </a>
        </div>

        <div className="introduction-buttons flex mt-5">
          <a
            href="https://drive.google.com/file/d/1BSOp8LtiwsQtPJx3oJwBsTRf4g9h_Uq_/view?usp=drivesdk"
            target="_blank"
            rel="noreferrer"
          >
            <button className="h-auto px-6 lg:px-12 bg-[#46b1a0] py-4 mr-4 text-white hover:border-[#46b1a0] hover:border-2 hover:text-[white] hover:bg-[#98dad9] rounded-lg">
              Resumé
            </button>
          </a>

          <Link href="/about/#contact">
            <button className="h-auto px-6 lg:px-12 bg-[white] py-4 mr-4 text-black  border-2 hover:bg-[#46b1a0] hover:text-white hover:border-0 rounded-lg">
              Hire Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="w-11/12 mx-[auto]  lg:w-4/12 lg:h-screen">
  <Teslim />
</div>
</div>
    </div>
    )
}
    </>
  );
}
