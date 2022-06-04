import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { projectData } from '../data/project-data';
import '../styles/Project.css';

function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projectList">
        {projectData.map((project, index) => {
          return (
            <ProjectCard 
              key={index}
              name={project.name}
              image={project.image}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Projects