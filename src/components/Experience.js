import React from 'react'
import ExperienceCard from './ExperienceCard.js'
import experienceData from '../experienceData.js'

export default function Experience() {
    const experienceCardsMapped = experienceData.map((perCard)=>{
        return(
            <ExperienceCard
                experienceData={perCard}
            />
        )
    })

    return (
        <div className="Experience">
            {experienceCardsMapped}
        </div>
    )
}