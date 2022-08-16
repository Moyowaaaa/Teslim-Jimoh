import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faEnvelope, faEarthAmerica, faSliders, faComment,faDatabase,faServer } from "@fortawesome/free-solid-svg-icons";
import MobileNav from "../components/MobileNav";
import { faHtml5, faCss3, faCss3Alt,faJs,faNodeJs,faPython, faBootstrap,faPhp} from '@fortawesome/free-brands-svg-icons'
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import teslim from "../images/teslim.jpg";

import Navbar from "../components/Navbar";
import {db} from "../firebase"
import { addDoc,collection } from "firebase/firestore";
import {gsap, Power3} from 'gsap';





const About = () => {
  
  const [openMenu, setOpenMenu] = useState(true)
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")

  const [submitted,setSubmited] = useState(false)



  
const closeMenu = () => {
  setOpenMenu(true)
}


useEffect(() => {
  setOpenMenu(true)
})



const userCollectionRef = collection(db,"messages")
const handleSubmit = (e) => {
  e.preventDefault()
  addDoc(userCollectionRef,{
    name,
    email,
    message
  })
  .then(() => {

    alert("Message sent 🙂")
    setName("")
    setEmail("")
    setMessage("")
   
    
  }, 2000)
  .catch(err => {
    alert(err)
  }
  )

}


  return (
    <div className="bg-[black] text-white">
  <Head>
        <title>Teslim Jimoh - Backend Engineer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<MobileNav openMenu={openMenu} closeMenu={closeMenu} />


<Navbar />

<div className="flex flex-col pt-[4.1rem]  w-11/12 lg:w-6/12 mx-auto">

  
  <div className="h-auto lg:h-screen w-full flex flex-col  justify-center ">
  <h2  className="flex   text-2xl text-[#98dad9]  font-black text-center py-6" >What Can I Do For You?</h2>
  <p className="text-justify w-full px-auto">
    I will help you design and develop fast and responsive websites and
    websites application at a very affordable price. I am open for
    collaboration with other developers to plan, design and develop life
    changing software. I am an experienced IT Instructor that is willing
    to help you navigate the world of IT. I am also available as a
    software tester prior to live deployment of your web application.
  </p>


  <div className="flex flex-col gap-12 w-full gap-4 lg:gap-[4rem] pt-12 justify-center lg:flex-row">
      <div className="flex flex-col items-center gap-3 hover:text-[#98dad9] cursor-pointer">
          <FontAwesomeIcon icon={faEarthAmerica} width={25} />
          <p>Web Development</p>
      </div>

    

      <div className="flex flex-col items-center gap-3 hover:text-[#98dad9] cursor-pointer">
          <FontAwesomeIcon icon={faSliders} width={25} />
          <p>Software Testing</p>
      </div>

      <div className="flex flex-col items-center gap-3 hover:text-[#98dad9] cursor-pointer">
          <FontAwesomeIcon icon={faComment} width={25} />
          <p>Consultancy</p>
      </div>
      </div>



      <div className="flex flex-col mt-[6rem]  w-full ">
      <h1 className=" font-bold text-2xl text-[#98dad9] py-6">Skills</h1>

      <div className="w-10/12 mx-auto justify-center py-2 flex gap-[3.5rem] flex-wrap ">

        
      <div className="flex flex-col items-center gap-3 h-[4rem]  hover:text-[#98dad9] cursor-pointer">
  <FontAwesomeIcon icon={faHtml5}   />
  <p className="text-sm">HTML</p>
  </div>

  <div className="flex flex-col items-center gap-3 h-[4rem] hover:text-[#98dad9] cursor-pointer">
  <FontAwesomeIcon icon={faCss3Alt}  />
  <p className="text-sm">CSS</p>
  </div>

  <div className="flex flex-col items-center gap-3 h-[4rem] hover:text-[#98dad9] cursor-pointer">
  <FontAwesomeIcon icon={faJs}  />
  <p className="text-sm">JavaScript</p>
  </div>
  
  <div className="flex flex-col items-center gap-3 h-[4rem] hover:text-[#98dad9] cursor-pointer">
  <FontAwesomeIcon icon={faBootstrap}  />
  <p className="text-sm">Bootstrap</p>
  </div>

  <div className="flex flex-col items-center gap-3 h-[4rem] hover:text-[#98dad9] cursor-pointer">
  <FontAwesomeIcon icon={faPhp} className="lg:w-[45px]" />
  <p className="text-sm">PHP</p>
  </div>
  
  <div className="flex flex-col items-center gap-3 h-[4rem] hover:text-[#98dad9] cursor-pointer">
  <FontAwesomeIcon icon={faPython}  />
  <p className="text-sm">Python</p>
  </div>

  <div className="flex flex-col items-center gap-3 h-[4rem] hover:text-[#98dad9] cursor-pointer">
  <FontAwesomeIcon icon={faNodeJs}  />
  <p className="text-sm">NodeJS /Express</p>
  </div>



  <div className="flex flex-col items-center gap-3 h-[4rem] hover:text-[#98dad9] cursor-pointer">
  <FontAwesomeIcon icon={faDatabase}  />
  <p className="text-sm">MongoDB /MySQL</p>
  </div>



  <div className="flex flex-col items-center gap-3 h-[4rem] hover:text-[#98dad9] cursor-pointer">
      <FontAwesomeIcon icon={faGithub}  />
      <p className="text-sm">Git/Github</p>
  </div>

  </div>
      </div>





  </div>


  <div className="w-11/12 mx-auto lg:mx-0 lg:w-full flex flex-col h-screen pt-12 lg:pt-0">
  <h1 className="w-auto font-bold text-2xl text-[#98dad9] py-6">Work Experience</h1>

  <div className="w-full flex flex-col gap-2  ">

  <h2 className="font-bold text-xl ">
  Femtech Information Technology Institute, Ilorin
</h2>
<p className="text-sm underline underline-offset-4 decoration-[#98dad9]">Dec 2020 - Present</p>


<div className="w-full mx-auto">
<li className="text-justify">
  Design, implement and maintain various backend technologies for the
  institute.
</li>
<li className="text-justify">
  Fix bugs and write clean reusable codes to improve the efficiency of
  existing applications.
</li>
<li className="text-justify">
  Supervise student&apos;s projects from development to production using
  technologies like JavaScript, PHP and NodeJS.
</li>
<li className="text-justify">
  Collaborate with other developers in building responsive and scalable
  web applications using technologies like PHP, Django and NodeJS.
</li>
<li className="text-justify">
  Create clear, engaging lessons to draw interest and develop students
  in Web Application Development.
</li>
</div>


    </div>

    <div className="w-full  flex flex-col gap-2 mt-[7rem]">

    <h2 className="font-bold text-xl ">Freelance</h2>
<p className="text-sm underline underline-offset-4 decoration-[#98dad9] ">Feb 2020 - Present</p>


<li className="text-justify">
  I help clients transform their ideas into reality.
</li>

<li>Design websites based on clients specifications.</li>

    </div>


    
  </div>



  <div className="w-full flex mt-[7rem] flex-col h-screen justify-center items-center lg:mt-0" id="contact">
  <h1 className="w-auto font-bold text-2xl text-[#98dad9] py-6">Contact </h1>


  <div className="w-full mt-[2rem] flex flex-col mx-auto ">
    <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
            <input type="text" placeholder="Name" className="bg-[black] border-b-[2px]  focus:border-[#98dad9] w-full px-2 py-2 outline-none placeholder:text-white focus:placeholder:text-[white] text-[white]"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            
            ></input>

            <input type="text" placeholder="Email" className="bg-[black] border-b-[2px] text-white focus:border-[#98dad9] w-full px-2 py-2 outline-none placeholder:text-white focus:placeholder:text-[white] text-[white]"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            ></input>

            {/* <input type="text" placeholder="Subject" className="bg-[#edeced] border-b-[2px]  focus:border-[#98dad9] w-full px-2 py-2 outline-none placeholder:text-black focus:placeholder:text-[darkslategrey]"></input> */}
            
            <textarea placeholder="Message" className="h-36  border-b-[2px] focus:border-[#98dad9] bg-[black] resize-none px-2 pt-2 outline-none placeholder:text-white focus:placeholder:text-[white] text-[white]"
             value={message}
            onChange={(e)=>setMessage(e.target.value)}
           
            ></textarea>


            {/* <p className={`${submitted ? "block" : "hidden"}`}>Message Submitted 🙂</p> */}
            </div>

            <button className="h-auto py-2 px-4 mt-12 border-[2px]  outline-none w-full bg-black text-white">Submit</button>
    </form>

    
</div>
<div className='flex items-center gap-5 my-2 cursor-pointer mt-4'>
<a href='https://github.com/teslim191' target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faGithub} width={15} className="hover:text-[#98dad9]" /></a>
<a href="https://www.linkedin.com/in/teslim-jimoh-52056818a" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faLinkedin} width={15} className='text-[#98dad9] hover:text-black' /></a>
<a href='https://mobile.twitter.com/Teslim_96' target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faTwitter} width={15} className="hover:text-[#98dad9]" /></a>

        
        </div>





  </div>

</div>


<Footer />
    </div>
  );
};

export default About;
