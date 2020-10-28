import React from 'react'
import { useLocation } from 'react-router-dom';
import ContactButtons from './ContactButtons';

export default function Footer() {

    const location = useLocation()
    

    return (
        <div className="footer">
            <div className="copyrights">
                <small>All rights reserved</small><br />
                <small>Yaron Lipshitz</small>
            </div>
            <div className={`contact-btns-container contact-${(location.pathname === '/contact') ? 'hidden' : 'visible'}`}>
                <ContactButtons />
            </div>
        </div>
    )
}
