import { Collapse } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

export function Hero() {

    const timeToDisplay = 1500
    const [display, setDisplay] = useState(false)
    const [scrollDownDisplay, setDropDownDisplay] = useState(false)

    const history = useHistory()

    useEffect(() => {

        setTimeout(() => {
            setDisplay(true)
        }, 1000)

        setTimeout(() => {
            setDropDownDisplay(true)
        }, 5000)

    }, [])
    const tagline = ['Full', 'Stack', 'Developer']



    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className="horizontal-cutoff" />
                <div className="hero-overlay">
                    <div className="title-container">
                        <h1 className="title">Yaron Lipshitz</h1>
                        {/* <h2 className="second"><span><Collapse in={display} timeout={timeToDisplay*1}>Full</Collapse></span> <span><Collapse in={display} timeout={timeToDisplay*2}>Stack</Collapse></span> <span><Collapse in={display} timeout={timeToDisplay*3}>Developer</Collapse></span></h2> */}
                        <div className="tagline-container">
                            {tagline.map((word, idx) => <Collapse in={display} key={idx} timeout={timeToDisplay * (idx + 1)}> <div className={`word ${word.toLowerCase()}`} key={idx}><h2>{word}</h2></div> </Collapse>)}
                        </div>
                    </div>
                    <div className="about-container">
                        <h2>Me</h2>
                        {/* <p>After ten years in customer-facing and management roles, the last two and half of them at a wonderful startup company, I've decided to take the plunge and switch to development.</p> */}
                        <p>I'm very passionate about UX, Frontend development, and finding creative solutions to rising issues. <span onClick={() => {history.push('/contact')}}>Let's talk about your next project!</span></p>
                    </div>
                </div>
                <div className="hero-placeholder">
                </div>
                <div className="img-container">
                </div>

            </div>
            <div className="scroll-down-container" onClick={() => {history.push('/projects')}} style={{ display: (scrollDownDisplay) ? 'block' : 'none' }}>
                <div className="chevron"></div>
                <div className="chevron"></div>
                <div className="chevron"></div>
                <span className="text">Scroll down</span>
            </div>

        </section>
    )
}
