import React from "react";
import {
    Box,
    BottomNavigation,
    BottomNavigationAction,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AddBoxIcon from '@mui/icons-material/AddBox';
import RateReviewIcon from '@mui/icons-material/RateReview';
import { useNavigate } from "react-router-dom";
import "./Navbar.css"


export function Navbar() {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();


    return (
        <div>
            <Box
                sx={{
                    width: "100%",
                    height: "auto",
                    backgroundColor: "#ccc",
                    zIndex: "99999",
                }}
            >
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    {/* <BottomNavigationAction
                        label="Menu"
                        icon={<LunchDiningIcon />}
                        onClick={() => {
                            dispatch(acOpenMenu(true));
                            navigate("/");
                        }}
                    /> */}
                    <BottomNavigationAction
                        label="Home"
                        icon={<HomeIcon />}
                        onClick={() => {
                            navigate("/");
                        }}
                    />
                    <BottomNavigationAction
                        label="Portfolios"
                        icon={
                            <AddBoxIcon />
                        }
                        onClick={() => {
                            navigate("/portfolios");
                        }}
                    />

                    <BottomNavigationAction
                        label="Feedback"
                        icon={
                            <RateReviewIcon />
                        }
                        onClick={() => {
                            navigate("/feedback");
                        }}
                    />
                </BottomNavigation>
            </Box>
        </div>
    )
}
