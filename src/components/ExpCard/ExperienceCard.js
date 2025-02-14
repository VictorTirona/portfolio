import React from 'react'
import ExpLink from './ExpLink.js'
import Skills from './Skills.js'

export default function ExperienceCard(props) {
    const data = props.perCardData;

    const [showHighlight, setShowHighlight] = React.useState(false)

    function handleEnter() {
        setShowHighlight(true)
    }

    function handleLeave() {
        setShowHighlight(false)
    }

    const styleHighlight = { color: showHighlight ? "#5eead4" : "#e2e8f0" }
    const styleHighlightRaise = { fontSize: showHighlight ? "1rem" : "0.875rem" }
    const styleHighlightImage = { backgroundColor: `rgba(255, 255, 255, ${showHighlight ? "0.3" : "0.1"})` }

    const showCompanyContent = data.showCompany && <span> <span className="ExpCard--title-bullet">&#x2022;</span> {data.company}</span>

    const dateOrImageContent = data.dateOrImage ? <h4 className="ExpCard--date">{data.startYear} &mdash; {data.endYear}</h4> : <div className="ExpCard--image-container" style={styleHighlightImage}><img className="ExpCard--image" src={data.expCardImage} /></div>

    return (
        <div className="ExpCard" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            {showHighlight && <a href={data.link} target="_blank"><div className="ExpCard--highlight" ></div></a>}
            <div className="ExpCard--container">
                <div className="ExpCard--subcontent">{dateOrImageContent}</div>
                <div className="ExpCard--content">
                    <h2 className="ExpCard--title" style={styleHighlight}>
                        {data.title}{showCompanyContent} <span style={styleHighlightRaise}>&#x2197;</span></h2>
                    <h3 className="ExpCard--description">{data.description}</h3>
                    <ExpLink
                        attachedLinks={data.attachedLinks}
                    />
                    <Skills
                        skillsData={data.skills}
                    />
                </div>
            </div>
        </div>
    )
}