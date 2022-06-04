import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProjectCard({ image, name, id }) {
    const navigate = useNavigate();

  return (
    <div 
      className='projectCard' 
      onClick={() => {
        navigate('/projects/' + id);
      }}
    >
    <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
    <h1>{name}</h1>
    </div>
  )
}

export default ProjectCard; 