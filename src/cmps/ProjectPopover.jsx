import { Fab, IconButton } from '@material-ui/core'
import { CloseOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import { ProjectPreview } from './ProjectPreview'

export function ProjectPopover({ projects, onClose }) {

    const [filterBy, setFilterBy] = useState('')

    function filterTech(techObj) {
        for (let i = 0; i < techObj.length; i++) {
            if (techObj[i].text.toLowerCase().includes(filterBy)) return true
        }
        return false
    }

    function getProjectsLength() {
        return projects.filter(project => project.title.toLowerCase().includes(filterBy) || filterTech(project.tech)).length
    }

    return (

        <div className="project-popover-container">
            <div className="header">
                <h1>Projects</h1>
                <div className="close-container">
                    <IconButton onClick={onClose}>
                        <CloseOutlined style={{color:"white"}} />
                    </IconButton>
                </div>
            </div>
            <div className="filter-container">
                <input type="text" placeholder="Enter a project's title or technology" value={filterBy} onChange={(ev) => setFilterBy(ev.target.value.toLowerCase())} />
            </div>
            {(getProjectsLength()) ? <div className="all-projects-container">
                {projects
                    .filter(project => project.title.toLowerCase().includes(filterBy) || filterTech(project.tech))
                    .map((project, idx) => <ProjectPreview project={project} key={idx} />)}
            </div> :
                <div className="empty-state-container">
                    <h3>Oops... no projects :(</h3>
                    <p>Try revising your search query</p>
                </div>}
        </div>
    )
}
