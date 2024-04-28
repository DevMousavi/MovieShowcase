import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ErrorHandler from "./pages/ErrorHandler.jsx";
import PapularMovie from "./pages/PapularMovie.jsx";
import PapularPeople from "./pages/PapularPeople.jsx";
import Login from "./components/Login.jsx";
import SingUp from "./components/SingUp.jsx";
import TopRated from "./pages/TopRated.jsx";
import TopRatedMovieContextProvider from "./context/TopRatedMovieContext.jsx";
import PapularMovieContextProvider from "./context/PapularMovieContext.jsx";
import PapularPeopleContextProvider from "./context/PapularPeopleContext.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    index
                    element={
                        <TopRatedMovieContextProvider>
                            <Home />
                        </TopRatedMovieContextProvider>
                    }
                />
                <Route
                    path="top-rated"
                    element={
                        <TopRatedMovieContextProvider>
                            <TopRated />
                        </TopRatedMovieContextProvider>
                    }
                />
                <Route
                    path="/papular-movie"
                    element={
                        <PapularMovieContextProvider>
                            <PapularMovie />
                        </PapularMovieContextProvider>
                    }
                />
                <Route
                    path="/papular-people"
                    element={
                        <PapularPeopleContextProvider>
                            <PapularPeople />
                        </PapularPeopleContextProvider>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/sing-up" element={<SingUp />} />
                <Route path="*" element={<ErrorHandler />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
