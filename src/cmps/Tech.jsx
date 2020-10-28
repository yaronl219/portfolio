import React, { useState } from 'react'
import ReactVisibilitySensor from 'react-visibility-sensor';
import { dataService } from '../service/dataService';
import { TechTab } from './TechTab';


export function Tech(props) {

    const tabs = dataService.getTechStack()
    const [openTab, setOpenTab] = useState(0)

    return (
        <section className="tech-container">
            <ReactVisibilitySensor  onChange={props.onTechVisible}>
                <div className="horizontal-cutoff" />
            </ReactVisibilitySensor>
            {tabs.map((tab, idx) => <TechTab setOpen={setOpenTab} openTab={openTab} data={tab} tab={idx} key={idx} />)}
        </section>
    )
}
