import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import "./Assets/Css/Global.css";
import { Portfolios } from "./Pages/Portfolios/Portfolios";
import { Feedback } from "./Pages/Feedback/Feedback";


export function Router() {
    return (
        <div id="router">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolios />} />
                <Route path="/feedback" element={<Feedback />} />
            </Routes>
        </div>
    );
}
