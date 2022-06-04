import React from 'react'

function ProjectCard({ image, name }) {
  return (
    <div className='projectCard'>
    <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
    <h1>{name}</h1>
    </div>
  )
}

export default ProjectCard; 