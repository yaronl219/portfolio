import { Fade } from '@material-ui/core'
import { AlternateEmail, Facebook, GitHub, LinkedIn } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import { redirectService } from '../service/redirectService';
const cvLink = require('../assets/CV/Yaron Lipshitz Full Stack Dev CV.pdf')

export function Contact({elInView}) {

    // const [isInView, setInView] = useState(false)
    const [displayText, setDisplayText] = useState(false)
    // const location = useLocation()

    useEffect(() => {
        if (elInView === '/contact') {
            // setInView(true)
                setDisplayText(true)
            // setTimeout(() => {
                //     setDisplayText(true)
            // }, 1000)
        }
        return () => {

            // setInView(false)
            setDisplayText(false)

        }
    }, [elInView])

    function onClickChat() {
        window.open('https://api.whatsapp.com/send?phone=972525595204')
    }
    return (
        <section className="contact-section">
            {/* <div className={`background ${(isInView) ? 'background-regular' : 'background-wide'}`} /> */}
            
            <Fade in={displayText}>
                <div className="content-container">
                    <div className="call-to-action">
                        <h2>Let's <span onClick={onClickChat}>Chat!</span></h2>
                        <h3>I'm currently seeking a position as a Front-End or Fullstack Developer</h3>
                        <button className="cta" onClick={() => {window.open(cvLink.default)}}>Download my CV</button>
                    </div>
                    <div className="contact-info-container">
                        <div className="contact-info">
                            <ul>
                                <li><PersonIcon />Yaron Lipshitz</li>
                                <li><AlternateEmail />lipshitzyaron@gmail.com</li>
                                <li><PhoneIcon />+972-52-5595-204</li>
                            </ul>
                        </div>
                        <div className="contact-btns">
                            <ul>
                                <li onClick={() => {redirectService.onRedirect('linkedin')}}><LinkedIn />Linkedin</li>
                                <li onClick={() => {redirectService.onRedirect('github')}}><GitHub />Github</li>
                                <li onClick={() => {redirectService.onRedirect('facebook')}}><Facebook />Facebook</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    )
}
