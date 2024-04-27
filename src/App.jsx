import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ErrorHandler from "./pages/ErrorHandler.jsx";
import PapularMovie from "./pages/PapularMovie.jsx";
import PapularPeople from "./pages/PapularPeople.jsx";
import Login from "./components/Login.jsx";
import SingUp from "./components/SingUp.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/papular-movie" element={<PapularMovie />} />
                <Route path="/papular-people" element={<PapularPeople />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sing-up" element={<SingUp />} />
                <Route path="*" element={<ErrorHandler />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
