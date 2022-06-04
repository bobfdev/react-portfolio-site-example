import React from 'react'
import { useParams } from 'react-router-dom'
import { projectData } from '../data/project-data.js'
import { AiOutlineGithub } from 'react-icons/ai'
import '../styles/ProjectDisplay.css'

function ProjectDisplay() {
    const { id } = useParams();
    const project = projectData[id]

  return (
    <div className='project'>
        <h1>{project.name}</h1> 
        <img src={project.image} alt="" />
        <p>
            <b>Skills:</b> {project.skills}
        </p>
            <AiOutlineGithub />
    </div>
  )
}

export default ProjectDisplay