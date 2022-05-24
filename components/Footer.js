import React,{useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    useEffect(() => {

        function process() {
          const d = new Date();
          const year = d.getFullYear();
          document.getElementById('demo').innerHTML = year;
        }
        process();
    
      })


  return (
    <div className='lg:h-20  h-[3rem]  bottom-0 w-[100%] flex flex-col items-center justify-center  '>
        <hr className='h-[5px] w-10/12 mb-4'></hr>
        <small>&copy; &nbsp;<span id="demo"></span> &nbsp;Moyowa.  All Rights Reserved. </small>


      {/* <div className='py-12 w-full flex flex-col items-center justify-center'>
        <hr className='h-[5px] w-10/12 '></hr>
    <span className='flex items-center  justify-center h-full'>
        
        <small>&copy; &nbsp;<span id="demo"></span> &nbsp;Moyowa.  All Rights Reserved. </small>

      
    </span>
    
    </div> */}
    </div>



  )
}

export default Footer