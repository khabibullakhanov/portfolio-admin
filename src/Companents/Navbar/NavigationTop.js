import React from 'react'
import "./NavigationTop.css"
import myImage from "../../Assets/Images/My Image.jpg"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {  useDispatch } from 'react-redux';
import { acOpenMenu } from '../../Redux/OpenMenu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';

export function NavigationTop() {
    const dispatch = useDispatch()

    return (
        <div id='navigation-top-main'>
            <figure >
                <img src={myImage} alt="" />
            </figure>
            <IconButton onClick={() => {
                dispatch(acOpenMenu(true))
            }}>
                <MoreVertIcon />
            </IconButton>
            <Menu style={{display:"block"}}>
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </div>
    )
}
