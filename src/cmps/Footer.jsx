import React from 'react'

import ContactButtons from './ContactButtons';

export default function Footer({elInView}) {

    return (
        <div className="footer">
            <div className="copyrights">
                <small>All rights reserved</small><br />
                <small>Yaron Lipshitz</small>
            </div>
            <div className={`contact-btns-container contact-${(elInView === '/contact') ? 'hidden' : 'visible'}`}>
                <ContactButtons />
            </div>
        </div>
    )
}
