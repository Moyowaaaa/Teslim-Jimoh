import React,{useEffect, useState} from 'react'




const MobileNav = () => {
    const [show, setShow] = useState(false)


    const openNav = () => {
        setShow(true)
    }

    const closeNav = () => {
        setShow(false)
    }
    // useEffect(() => {
    //     window.addEventListener("load", this.myfunction);
    // })


    // const openNav = () => {
    //     document.getElementById("mobile").class.width = "100%";
    // }

    // const closeNav = () => {
    //     document.getElementById("mobile").style.width = "0";
    // }

  return (
    <div className='flex  lg:hidden h-[5rem] items-center justify-between px-4'>
    
    <div className='flex flex-col justify-center text-2xl'>
        Teslim Jimoh
    </div>


    {/* <div id ="mobile" className={`${show ? "hidden" :"" }`}>
      <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
      <div class="ml"  onClick="closeNav">
         <a href="#">Home</a>
        <a href="#about">About Me</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </div>
  </div> */}


  <span id="button" className='text-[40px] cursor-pointer'  onClick={openNav}>
  &#9776;</span>
    </div>
  )
}

export default MobileNav