import React from "react";
import Header from "../Layout/Header.jsx";
import WelcomeText from "../components/WelcomeText.jsx";
import SearchBox from "../components/SearchBox.jsx";
import Card from "../components/Card.jsx";

const Home = () => {
    return (
        <main>
            <Header />
            <WelcomeText />
            <SearchBox />
            <Card />
        </main>
    );
};

export default Home;
