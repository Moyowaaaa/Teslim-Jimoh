import React,{useEffect, useState} from 'react'
import MobileMenu from './MobileMenu'



const MobileNav = () => {
    const [openMenu, setOpenMenu] = useState(true)



    const open = () => {
   setOpenMenu(false)
    }

    const closeMenu = () => {
      setOpenMenu(true)
    }

  



   

  return (
    <div className='flex w-screen  lg:hidden h-[5rem] '>

      <div className='items-center flex w-full justify-between px-4'>
    <div className='flex flex-col justify-center text-base'>
        Teslim Jimoh.
    </div>





  <span id="button" className='text-[40px] cursor-pointer' onClick={open}>
  &#9776;</span>
  </div>



  <MobileMenu openMenu={openMenu} closeMenu={closeMenu} />
    </div>
  )
}

export default MobileNav