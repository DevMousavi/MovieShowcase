import React from "react";
import Header from "../Layout/Header.jsx";
import WelcomeText from "../components/WelcomeText.jsx";
import SearchBox from "../components/SearchBox.jsx";

const Home = () => {
    return (
        <main>
            <Header />
            <WelcomeText />
            <SearchBox />
        </main>
    );
};

export default Home;
