import React from 'react'
import Spotify from './Spotify.js'

export default function Header() {

    const [activeNav, setActiveNav] = React.useState("About")

    React.useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.7,
        };

        function updateNav(entries, observer) {
            entries.forEach((entry) => {
                
                console.log(entry)
                if (entry.isIntersecting) {
                    setActiveNav(`${entry.target.id}`)
                }
            })
        };

        const observer = new IntersectionObserver(updateNav, options)

        const targets = document.querySelectorAll(".NavbarSection");

        targets.forEach((target)=> observer.observe(target));

        //cleanupfunction
        return()=>{
            targets.forEach((target)=> observer.unobserve(target))
        };
        
    }, [])

    const styleActiveAbout = {color: (activeNav=="About")?"#e2e8f0":"#94a3b8"}
    const styleActiveExperiences = {color: (activeNav=="Experiences")?"#e2e8f0":"#94a3b8"}
    const styleActiveProjects = {color: (activeNav=="Projects")?"#e2e8f0":"#94a3b8"}

    return (
        <div className="Header">
            <div className="Header--container">
                <h1 className="Header--name"><a href="#">Tor Tirona</a></h1>
                <h2 className="Header--position">Software Engineer</h2>
                <h3 className="Header--subtitle">I like turning ideas into React Web Apps.</h3>

                <ul className="Header--nav">
                    <li className="Header--about"><a href="#" className="Header--nav-link" style={styleActiveAbout}>{(activeNav=="About")?"——":""}— ABOUT</a></li>
                    <li className="Header--experience"><a href="#Experiences" className="Header--nav-link" style={styleActiveExperiences}>{(activeNav=="Experiences")?"——":""}— EXPERIENCE</a></li>
                    <li className="Header--projects"><a href="#Projects" className="Header--nav-link" style={styleActiveProjects}>{(activeNav=="Projects")?"——":""}— PROJECTS</a></li>

                </ul>

                <Spotify />

                <div className="Header--socials">
                    <a href="https://github.com/VictorTirona" target="_blank"><img className="Header--socials-github" src="../images/icons8-github.svg" alt="Github link" /></a>
                    <a href="https://www.linkedin.com/in/victorbtirona/" target="_blank"><img className="Header--socials-linkedin" src="../images/icons8-linkedin.svg" alt="Linkedin link" /></a>
                    <a href="https://www.instagram.com/victortirona/" target="_blank"><img className="Header--socials-instagram" src="../images/icons8-instagram.svg" alt="Instagram link" /></a>
                    <a href="https://myanimelist.net/animelist/arcoa" target="_blank"><img className="Header--socials-myanimelist" src="../images/icons8-myanimelist.svg" alt="MyAnimeList link" /></a>
                    <a href="https://medium.com/@tors20s" target="_blank"><img className="Header--socials-medium" src="../images/icons8-medium.svg" alt="Medium link" /></a>
                </div>
            </div>
        </div>
    )
}