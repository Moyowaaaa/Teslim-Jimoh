import React,{useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faInstagram,faTwitter,faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons'


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
    <div className='relative  w-full py-2 flex flex-col items-center justify-center bottom-0 bg-[#46b1a0]'>
      <div className='h-full w-full flex gap-2 justify-center'>
        <p>&copy;</p>
        <span id="demo"></span>
        <p>Teslim Jimoh</p>
      </div>
    </div>



  )
}

export default Footer