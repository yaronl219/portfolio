import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import { IconButton, Tooltip } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import { redirectService } from '../service/redirectService';

export default function ContactButtons() {
    return (
        <div className="contact-btns">
            <Tooltip title="Mail me">
                <IconButton onClick={() => { redirectService.onRedirect('mail') }}>
                    <MailOutlineIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Linkedin">
                <IconButton onClick={() => { redirectService.onRedirect('linkedin') }}>
                    <LinkedInIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Github">
                <IconButton onClick={() => { redirectService.onRedirect('github') }}>
                    <GitHubIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Facebook">
                <IconButton onClick={() => { redirectService.onRedirect('facebook') }}>
                    <FacebookIcon />
                </IconButton>
            </Tooltip>
        </div>
    )
}
