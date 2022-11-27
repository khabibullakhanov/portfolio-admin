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
import "./NavigationBottom.css"
import DashboardIcon from '@mui/icons-material/Dashboard';

export function NavigationBottom() {
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
                        id="navigation-bottom-icons"
                        label="Home"
                        icon={<HomeIcon style={{ color: "grey" }} />}
                        onClick={() => {
                            navigate("/");
                        }}
                    />
                    <BottomNavigationAction
                        id="navigation-bottom-icons"
                        label="Portfolios"
                        icon={
                            <DashboardIcon style={{ color: "grey" }} />
                        }
                        onClick={() => {
                            navigate("/portfolios");
                        }}
                    />

                    <BottomNavigationAction
                        id="navigation-bottom-icons"
                        label="Feedback"
                        icon={
                            <RateReviewIcon style={{ color: "grey" }} />
                        }
                        onClick={() => {
                            navigate("/feedback");
                        }}
                    />
                    <BottomNavigationAction
                        id="navigation-bottom-icons"
                        label="Add"
                        icon={
                            <AddBoxIcon style={{ color: "grey" }} />
                        }
                        onClick={() => {
                            navigate("/add_portfolio");
                        }}
                    />
                </BottomNavigation>
            </Box>
        </div>
    )
}
