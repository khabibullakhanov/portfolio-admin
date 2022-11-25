import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import "./Assets/Css/Global.css";
import { Portfolios } from "./Pages/Portfolios/Portfolios";
import { Feedback } from "./Pages/Feedback/Feedback";
import { Navbar } from "./Companents/Navbar/Navbar";
import Paper from '@mui/material/Paper';

export function Router() {
    return (
        <div id="router">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolios" element={<Portfolios />} />
                <Route path="/feedback" element={<Feedback />} />
            </Routes>
            <Paper sx={MyStyle.Paper} elevation={3}>
                <Navbar />
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
