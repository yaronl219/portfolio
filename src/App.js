import './assets/styles/global.scss'
import Navbar from './cmps/Navbar';
import Footer from './cmps/Footer';
import { Hero } from './cmps/Hero';
import { Projects } from './cmps/Projects';
import { Tech } from './cmps/Tech';
import { Contact } from './cmps/Contact';
import React, { useState } from 'react';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import ReactVisibilitySensor from 'react-visibility-sensor';
import ReactGA from 'react-ga';


function App() {

  const location = useLocation()
  const heroRef = useRef()
  const projectsRef = useRef()
  const techRef = useRef()

  const contactRef = useRef()
  const views = ['/', '/projects', '/tech', '/contact']
  const [elInView, setElInView] = useState('/')
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

  ReactGA.initialize('G-B3YC07Q3DX');
ReactGA.pageview(window.location.pathname + window.location.search);

  useEffect(() => {
    onPathChange(location.pathname)
  }, [location.pathname])

  function onPathChange(path) {
    let ref;
    switch (path) {
      case '/projects':
        ref = projectsRef
        break;
      case '/tech':
        ref = techRef
        break;
      case '/contact':
        ref = contactRef
        break;
      default:
        ref = heroRef
    }
    
    scrollToRef(ref)
  }


  function onHeroVisible(isVisible) {
    if (isVisible) return setElInView('/')
  }

  function onProjectsVisible(isVisible) {
    if (isVisible) return setElInView('/projects')
  }

  function onTechVisible(isVisible) {
    if (isVisible) return setElInView('/tech')
  }

  function onContactVisible(isVisible) {
    if (isVisible) return setElInView('/contact')
  }


  return (
    
    <div className="App">
      <header className="app-header">
        <Navbar views={views} elInView={elInView} />
      </header>
      <main className="main">
        {/* <ViewRouter views={views}/> */}
        <ReactVisibilitySensor scrollCheck onChange={onHeroVisible}>
          <div className="hero-ref" ref={heroRef}>
            <Hero />
          </div>
        </ReactVisibilitySensor>
        <ReactVisibilitySensor scrollCheck onChange={onProjectsVisible}>
          <div className="projects-ref" ref={projectsRef}>
            <Projects />
          </div>
        </ReactVisibilitySensor>
          <div className="tech-ref" ref={techRef}>
            <Tech onTechVisible={onTechVisible} />
          </div>
        <ReactVisibilitySensor scrollCheck onChange={onContactVisible}>
          <div className="contact-ref" ref={contactRef}>
            <Contact elInView={elInView}/>
          </div>
        </ReactVisibilitySensor>

      </main>
      <footer>
        <Footer elInView={elInView}/>
      </footer>
    </div>
  );
}

export default App;
