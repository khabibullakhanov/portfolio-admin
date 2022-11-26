import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import "./Assets/Css/Global.css";
import { Portfolios } from "./Pages/Portfolios/Portfolios";
import { Feedback } from "./Pages/Feedback/Feedback";
import { NavigationBottom } from "./Companents/Navbar/NavigationBottom";
import Paper from '@mui/material/Paper';
import { NavigationTop } from "./Companents/Navbar/NavigationTop";
import { AddPortfolio } from "./Pages/CrudPortfolio/AddPortfolio";
import { EditPortfolio } from "./Pages/CrudPortfolio/EditPortfolio";

export function Router() {
    return (
        <div id="router">
            <NavigationTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolios" element={<Portfolios />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/add_portfolio" element={<AddPortfolio />} />
                <Route path="/portfolios/view_portfolio" element={<EditPortfolio/>} />
            </Routes>
            <Paper sx={MyStyle.Paper} elevation={3}>
                <NavigationBottom />
            </Paper>
        </div>
    );
}

const MyStyle = {
    Paper: {
        maxWidth: "768px",
        width: "100%",
        position: "fixed",
        bottom: 0,
    },
};
