import { Tooltip } from '@material-ui/core'
import React from 'react'

export function ProjectPreview({ project }) {

    function onClickProject() {
        window.open(project.link)
    }



    return (
        <div className="project-preview-container">
            <div className="project-img" style={{ backgroundImage: `url(${project.img.default}` }} />
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
                        {project.tech.map((item, idx) => {
                            return (<li key={idx}>
                                <Tooltip title={item.text}>
                                    <div className="tool-img-container">
                                        <img src={item.logo} alt={item.text} />
                                    </div>
                                </Tooltip>
                            </li>)
                        }
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}
