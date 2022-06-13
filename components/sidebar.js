import React,{useState} from 'react'

const Sidebar = () => {
  const[openMenu, setOpenMenu] = useState(false)


  const closeMenu = () => {
    setOpenMenu(false)
  }

 

  return (
    <div className='lg:hidden z-50'>
      {openMenu ?  <button className="top-6 right-10 fixed z-50 text-4xl" onClick={() => setOpenMenu(!openMenu)}> &#9776;</button>:
        "" }


      <button className="top-6 right-10 fixed z-50 text-4xl" onClick={() => setOpenMenu(!openMenu)}> &#9776;</button>

      <div className={`"top-0 right-0 fixed text-white bg-black shadow-lg h-full w-screen z-50 ease-in-out duration-300 " ${openMenu ? " translate-x-0" : " translate-x-full"} `}>
      <button className='top-4 right-4 fixed z-50' onClick={closeMenu}>X</button>
        <div className='flex flex-col items-center justify-center'>

        </div>
     
        </div>
  
    </div>
  )
}

export default Sidebar