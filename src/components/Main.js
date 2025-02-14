import React from 'react'
import About from './About.js'
import Experiences from './Experiences.js'
import Projects from './Projects.js'
import Footer from './Footer.js'

export default function Main() {    
    return (
        <div className="Main">
            <About />
            <Experiences />
            <Projects />
            <Footer />
        </div>
    )
}