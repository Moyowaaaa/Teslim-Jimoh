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
    // <div className=' w-full flex flex-col h-auto bg-[black] text-[white] lg:relative'>
    <div className=' h-[2rem] bg-[#98dad9] text-center text-black font-semibold text-base relative'> 

<small>&copy; &nbsp;<span id="demo"></span> &nbsp;Teslim Jimoh Oyewale </small>
    </div>



  )
}

export default Footer