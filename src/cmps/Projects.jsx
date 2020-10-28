import React, { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { dataService } from '../service/dataService'
import { Carousel } from 'react-responsive-carousel';





export function Projects() {
    const projects = dataService.getProjects()
    const [view, setView] = useState(0)
    const [textDisplay, setTextDisplay] = useState(true)

    function handleChange(selectedView) {
        setTextDisplay(false)
        setTimeout(() => {
            setView(selectedView)
        },100)
        setTimeout(() => {
            setTextDisplay(true)
        },350)
    }

    function onClickProject() {
        window.open(projects[view].link)
    }

    

    return (
        <section className="projects-container">
            <div className="img-carousel">

                <Carousel on showStatus={false} infiniteLoop={true} autoPlay={true} stopOnHover={true} showThumbs={false} interval={5000} onChange={handleChange}>
                    {projects.map((project, idx) => <div className="proj-img-container" key={idx}><div><img src={project.img.default} alt="project.img.title" /></div></div>)}
                </Carousel>

            </div>
            <div className="proj-description" style={{opacity:(textDisplay) ? '100%' : '0%'}}>
                <h2>{projects[view].title}</h2>
                <button className="cta-btn" onClick={onClickProject}>View the project</button>
                <div className="text-container">
                    <p>{projects[view].description}</p>
                    <h3>Tools Used</h3>
                    <ul>
                        {projects[view].tech.map((tech, idx) => <li key={idx}>{tech}</li>)}
                    </ul>
                </div>
            </div>
        </section>
    )
}
