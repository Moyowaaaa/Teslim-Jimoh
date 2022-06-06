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
    <div className='flex flex-col h-auto bg-[#edeced] text-[black]'>

      <div className='my-4 w-full flex justify-center px-6 lg:justify-end lg:items-flex-end '>
        {/* <div>
          <p className='text-base lg:text-xl font-bold'>Teslim Jimoh.</p>
        </div> */}

      
        <div className='flex items-center gap-5 my-2 cursor-pointer'>
<a href='https://github.com/teslim191' target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faGithub} width={15} className="hover:text-[blue]" /></a>
<a href="https://www.linkedin.com/in/teslim-jimoh-52056818a" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faLinkedin} width={15} className='text-[blue] hover:text-black' /></a>
<a href='https://mobile.twitter.com/Teslim_96' target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faTwitter} width={15} className="hover:text-[blue]" /></a>

        
        </div>

      </div>

      <div className='flex flex-col items-center justify-center  '>
        <div className='bg-[blue] text-white w-full flex flex-col items-center justify-center py-2'>
     
        <small>&copy; &nbsp;<span id="demo"></span> &nbsp;by Moyowa. </small>
        </div>

</div>
    </div>



  )
}

export default Footer