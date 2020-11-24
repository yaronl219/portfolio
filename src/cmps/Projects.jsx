import { Dialog } from '@material-ui/core';
import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import { dataService } from '../service/dataService'
import { ProjectPopover } from './ProjectPopover';
import { ProjectPreview } from './ProjectPreview';


export function Projects() {
    const projects = dataService.getProjects()

    const location = useLocation()
    const history = useHistory()

    function openDialog() {
        history.push('/projects/all')
    }

    function closeDialog() {
        history.push('/projects')
    }
    // const [view, setView] = useState(0)
    // const [textDisplay, setTextDisplay] = useState(true)

    // function handleChange(selectedView) {
    //     setTextDisplay(false)
    //     setTimeout(() => {
    //         setView(selectedView)
    //     },100)
    //     setTimeout(() => {
    //         setTextDisplay(true)
    //     },350)
    // }



    // projects v1
    // return (
    //     <section className="projects-container">
    //         <div className="img-carousel">
    //             <Carousel on showStatus={false} infiniteLoop={true} autoPlay={true} stopOnHover={true} showThumbs={false} interval={5000} onChange={handleChange}>
    //                 {projects.map((project, idx) => <div className="proj-img-container" key={idx}><div><img src={project.img.default} alt="project.img.title" /></div></div>)}
    //             </Carousel>
    //         </div>

    //         <div className="proj-description" style={{opacity:(textDisplay) ? '100%' : '0%'}}>
    //             <h2>{projects[view].title}</h2>
    //             <button className="cta-btn" onClick={onClickProject}>View the project</button>
    //             <div className="text-container">
    //                 <p>{projects[view].description}</p>
    //                 <h3>Tools Used</h3>
    //                 <ul>
    //                     {projects[view].tech.map((tech, idx) => <li key={idx}>{tech}</li>)}
    //                 </ul>
    //             </div>
    //         </div>
    //     </section>
    // )


    // projects v2
    return (
        <section className="projects-container">
            <h2>Selected Projects</h2>
            <div className="project-grid">
                {projects.filter(project => project.isDisplayed).map((project, idx) => <ProjectPreview project={project} key={idx} />)}
            </div>
            <div className="view-projects-btn-container">
                <button onClick={openDialog} className="cta">View more projects</button>
            </div>
            <Dialog fullWidth onClose={closeDialog} onBackdropClick={closeDialog} open={(location.pathname === '/projects/all')}>
                <ProjectPopover projects={projects} onClose={closeDialog} />
            </Dialog>
        </section>
    )
}
