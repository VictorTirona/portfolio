import React from 'react'
import ExperienceCard from './ExpCard/ExperienceCard.js'
import experienceData from '../experienceData.js'

export default function Experiences() {
    const experienceCardsMapped = experienceData.map((perCard)=>{
        return(
            <ExperienceCard
                perCardData={perCard}
            />
        )
    })


    return (
        <div className="Experiences NavbarSection" id="Experiences">
            {experienceCardsMapped}
            <a className="Main--view-all" href="#resume" target="_blank">View Full Resume</a>
        </div>
    )
}