import React, { useContext, useEffect, useState } from "react";
import Header from "../Layout/Header.jsx";
import WelcomeText from "../components/WelcomeText.jsx";
import SearchBox from "../components/SearchBox.jsx";
import Card from "../components/Card.jsx";
import { NavLink } from "react-router-dom";
import { TopRatedMovieContext } from "../context/TopRatedMovieContext.jsx";
import Footer from "../Layout/Footer.jsx";

const Home = () => {
    const primaryData = useContext(TopRatedMovieContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = () => {
            try {
                if (primaryData.data && primaryData.data.results) {
                    setData(primaryData.data.results);
                    setLoading(false);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [primaryData]);

    return (
        <main>
            <Header />
            <WelcomeText />
            <SearchBox />
            <div className="mb-8 flex flex-row justify-between">
                <h5 className="text-3xl text-primaryColor font-bold dark:text-primaryColorYellow dark:text-gray-300">
                    Top Rated <span className="font-bold text-2xl">...</span>
                </h5>
                <NavLink to="top-rated">
                    {" "}
                    <p className="text-xl cursor-pointer transition-Primary text-primaryColor font-bold  border-primaryColor px-5 py-1 rounded-xl hover:text-black hover:scale-110 dark:text-gray-300 dark:hover:text-pink-700 ">
                        More...
                    </p>
                </NavLink>
            </div>
            <div className="w-full flex flex-wrap justify-between gap-y-10">
                {loading ? (
                    <h1>Loading</h1>
                ) : (
                    data
                        .slice(0, 4)
                        .map((item) => (
                            <Card
                                key={item.id}
                                title={item.title}
                                releaseDate={item.release_date}
                                userScore={item.vote_average}
                                img={item.poster_path}
                            />
                        ))
                )}
            </div>
            <Footer />
        </main>
    );
};

export default Home;
