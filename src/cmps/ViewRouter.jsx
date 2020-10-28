import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views'
import { Contact } from './Contact'
import { Hero } from './Hero'
import { Projects } from './Projects'
import { Tech } from './Tech'

export function ViewRouter({views}) {

  
  const ref = React.createRef()
  const [canScroll, setCanScroll] = useState(true)
  const location = useLocation()
  const history = useHistory()

  const [view, setView] = useState(0)
  useEffect(() => {

    const currView = views.findIndex(route => route === location.pathname)

    if (currView < 0) return

    setView(currView)
  }, [location.pathname])

  function onScroll(ev) {
    const timeToNotRegister = 1000
    if (!canScroll) return
    setCanScroll(false)
    if (ev.deltaY > 0) {
      changeViewDown()
    } else {
      changeViewUp()
    }
    setTimeout(() => {
      setCanScroll(true)
    }, timeToNotRegister)
  }

  function changeViewDown() {
    if (view + 1 >= views.length) return
    history.push(views[view+1])
  }

  function changeViewUp() {
    if (view === 0) return
    history.push(views[view-1])
  }

  function onSwipe(view,transition) {
    if (transition === 'end') {
      history.push(views[view])
    }
  }

    return (
    <div onWheelCapture={onScroll}>

      <SwipeableViews onSwitching={onSwipe} axis="y" resistance index={view} animateHeight ref={ref}>
        <Hero />
        <Projects />
        <Tech />
        <Contact />
        
      </SwipeableViews>
    </div>
  )
}
