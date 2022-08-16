import React from 'react'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import {  faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProjectCard = ({work}) => {

  

  return (<>

  


    <div className='w-full lg:w-[30%] mt-2 lg:ml-2 h-[20rem] border-2 border-[#98dad9] px-6'>
      

        <div className='h-5/6 flex flex-col justify-center'>
            <h2 className='text-4xl '>{work.title}</h2>
            <p>{work.description}</p>
            

            <div className='flex gap-4 pt-4 flex-wrap'>
        {work.languages.map((language,index) => (
            <h2 key={index}>{language}</h2>
        ))}
        </div>
        </div>

        

        <div className='h-1/6  bottom-0 w-full flex items-center gap-4 justify-end'>
            <a href={work.view} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faExternalLinkAlt} width={15} className={`hover:text-[#98dad9] ${work.view.length === 0 ? "hidden" : "flex"} `} />
            </a>


            <a href={work.github} target="_blank" rel="noreferrer">
            <FontAwesomeIcon  icon={faGithub} width={20} className={`hover:text-[#98dad9] ${work.github.length === 0 ? "hidden" : "flex"}` } />
            </a>
        </div>
    </div>

  
    </>
  )
}

export default ProjectCard