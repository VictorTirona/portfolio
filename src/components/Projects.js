import React from 'react'
import ProjectCard from './ExpCard/ExperienceCard.js'
import projectData from '../projectData.js'

export default function Projects() {
    const projectMapped = projectData.map((perProject)=>{
        return(
            <ProjectCard
                perCardData = {perProject}
            />
        )
    })

    return (
        <div className="Experiences NavbarSection" id="Projects">
            {projectMapped}
            <a className="Main--view-all" href="#projects" target="_blank">View Full Project Archive</a>
        </div>
    )
}