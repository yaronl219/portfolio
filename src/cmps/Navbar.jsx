import { AppBar, Tabs, Tab } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'


export default function Navbar({views, elInView}) {

    const location = useLocation()
    const history = useHistory()
    const [view, setView] = useState(0)
    
    useEffect(() => {
      const currView = views.findIndex(route => route === location.pathname)
      if (currView < 0) return
      setView(currView)
    }, [location.pathname])

    useEffect(() => {
        const currView = views.findIndex(view => view === elInView)
        if (currView < 0) return
        setView(currView)
    },[elInView])

    function handleChange(ev,val) {
        setView(val)
        history.push(views[val])
    }


    return (
        <nav>
            <AppBar className="nav-app-bar" position="static">
                <Tabs value={view} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="About" />
                    <Tab label="Projects"  />
                    <Tab label="Tech"  />
                    <Tab label="Contact"  />
                </Tabs>
            </AppBar>

        </nav>
    )
}
