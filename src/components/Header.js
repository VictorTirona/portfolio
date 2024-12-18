import React from 'react'

export default function Header() {
    return (
        <div className="Header">
            <div className="Header--container">
                <h1 className="Header--name"><a href="#">Tor Tirona</a></h1>
                <h2 className="Header--position">Software Engineer</h2>
                <h3 className="Header--subtitle">Product/Project/Software OR I could just put which languages I'm proficient in here</h3>

                <ul className="Header--nav">
                    <li className="Header--about"><a href="#about" className="Header--nav-link">ABOUT</a></li>
                    <li className="Header--experience"><a href="#experience" className="Header--nav-link">EXPERIENCE</a></li>
                    <li className="Header--projects"><a href="#project" className="Header--nav-link">PROJECTS</a></li>
                    
                </ul>

                <div className="Header--socials">
                    <img className="Header--socials-github" src="../images/socials-gh.png" alt="Github link" />
                    <img className="Header--socials-linkedin" src="../images/socials-fb.png" alt="Linkedin link" />
                    <img className="Header--socials-instagram" src="../images/socials-ig.png" alt="Instagram link" />
                    <img className="Header--socials-myanimelist" src="../images/socials-fb.png" alt="MyAnimeList link" />
                    <img className="Header--socials-medium" src="../images/socials-fb.png" alt="Medium link" />
                </div>
            </div>
        </div>
    )
}