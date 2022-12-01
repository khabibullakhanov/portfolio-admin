import React from 'react'
import "./NavigationTop.css"
import myImage from "../../Assets/Images/My Image.jpg"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LogoutIcon from '@mui/icons-material/Logout';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export function NavigationTop() {

    const menuOpen = (e) => {
        window.location.reload();
        localStorage.clear()
        sessionStorage.clear()
    }

    return (
        <div id='navigation-top-main'>
            <div id='navigation-more-info'>
                <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (

                        <React.Fragment>
                            <IconButton variant="contained" {...bindTrigger(popupState)}>
                                <MoreVertIcon />
                            </IconButton>
                            <Menu {...bindMenu(popupState)}>
                                <MenuItem onClick={() => { menuOpen(popupState.close) }} >Log Out <IconButton>
                                    <LogoutIcon />
                                </IconButton></MenuItem>
                            </Menu>
                        </React.Fragment>
                    )}
                </PopupState>

            </div>
            <figure >
                <img src={myImage} alt="" />
            </figure>
        </div>
    )
}
