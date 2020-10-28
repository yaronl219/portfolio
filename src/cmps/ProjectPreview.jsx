import React from 'react'

export function ProjectPreview({project}) {

    function onClickProject() {
        window.open(project.link)
    }

    
    return (
        <div className="project-preview-container">
            <div className="project-img" style={{backgroundImage:`url(${project.img.default}`}} />
            
            <div className="project-txt">
                <div className="project-title">
                    <h3>{project.title}</h3>
                </div>
                <button className="cta" onClick={onClickProject}>View the project</button>
                <div className="project-description">
                    <p>{project.description}</p>
                </div>
                <div className="tools-used-container">
                    <h4>Tools used</h4>
                    <ul>
                        {project.tech.map((item,idx) => <li key={idx}>{item}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}
