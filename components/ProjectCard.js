import React from 'react'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import {  faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProjectCard = ({work}) => {

  

  return (<>

  


    <div className='w-full bg-[#112240] lg:w-[30%] mt-4 lg:ml-4 h-[18rem] hover:text-[#46b1a0] px-6 shadow-sm shadow-[#112240]'>
    <div className='h-1/6  bottom-0 w-full flex items-center gap-4 justify-end'>
            <a href={work.view} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faExternalLinkAlt} width={15} className={`hover:text-[#46b1a0] ${work.view.length === 0 ? "hidden" : "flex"} `} />
            </a>


            <a href={work.github} target="_blank" rel="noreferrer">
            <FontAwesomeIcon  icon={faGithub} width={20} className={`hover:text-[#46b1a0] ${work.github.length === 0 ? "hidden" : "flex"}` } />
            </a>
        </div>
      

        <div className='h-4/6 flex flex-col '>
            <h2 className='text-3xl  w-max'>{work.title}</h2>
            <p className='py-2 '>{work.description}</p>
            

          
        </div>

        <div className='flex gap-4 pt-4 flex-wrap h-1/6 '>
        {work.languages.map((language,index) => (
            <h2 key={index} className="border-b-2 border-b-[#46b1a0]">{language}</h2>
        ))}
        </div>

        

       
    </div>

  
    </>
  )
}

export default ProjectCard