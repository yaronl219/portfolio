import React, { useState } from 'react'
import { dataService } from '../service/dataService';
import { TechTab } from './TechTab';


export function Tech() {

    const tabs = dataService.getTechStack()
    const [openTab, setOpenTab] = useState(0)
    
    return (
        <section className="tech-container">
            {tabs.map((tab,idx) => <TechTab setOpen={setOpenTab} openTab={openTab} data={tab} tab={idx} key={idx} />)}
        </section>
    )
}
