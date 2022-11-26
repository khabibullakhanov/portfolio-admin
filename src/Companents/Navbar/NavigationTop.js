import React, { useState } from 'react'
import "./NavigationTop.css"
import myImage from "../../Assets/Images/My Image.jpg"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';

export function NavigationTop() {
    const [open, setOpen] = useState(false)
    return (
        <div id='navigation-top-main'>
            <div id='navigation-more-info'>
                <IconButton onClick={() => {
                    setOpen(true)
                }}>
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    id='more-info-menu'
                    open={open}
                    onClose={() => {
                        setOpen(!open);
                    }}
                    style={open ? { display: "block" } : { display: "none" }}>
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>My account</MenuItem>
                    <MenuItem>Logout</MenuItem>
                </Menu>
            </div>
            <figure >
                <img src={myImage} alt="" />
            </figure>
        </div>
    )
}
