import React, { useContext, useEffect, useState } from "react";
import Header from "../Layout/Header.jsx";
import WelcomeText from "../components/WelcomeText.jsx";
import SearchBox from "../components/SearchBox.jsx";
import Card from "../components/Card.jsx";
import { Link, NavLink } from "react-router-dom";
import { TopRatedMovieContext } from "../context/TopRatedMovieContext.jsx";
import Footer from "../Layout/Footer.jsx";

const Home = () => {
    const primaryData = useContext(TopRatedMovieContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAlert(true);
        }, 3000);
        const timerDelete = setTimeout(() => {
            setShowAlert(false);
        }, 9000);

        return () => clearTimeout(timer);
    }, []);

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
            {showAlert && (
                <h3 className="bg-primaryColor text-white am:p-3 sm:p-5 am:rounded-2xl am:rounded-t-none sm:rounded-xl sm:rounded-t-none box-shadow-alert am:w-72 sm:w-[500px] absolute top-0 left-1/2 transform -translate-x-1/2 justify-center items-center dark:bg-pink-700">
                    Should the images fail to load, we recommend utilizing a VPN
                    for uninterrupted browsing experience...
                </h3>
            )}

            <Header />
            <WelcomeText />
            <SearchBox />
            <div className="mb-8 mt-14 flex flex-row justify-between">
                <h5 className="text-primaryColor font-bold dark:text-primaryColorYellow dark:text-gray-300 am:text-base sm:text-lg md:text-3xl">
                    Top Rated <span className="font-bold text-2xl">...</span>
                </h5>
                <NavLink to="top-rated">
                    <p className="cursor-pointer transition-Primary text-primaryColor font-bold  border-primaryColor px-5 py-1 rounded-xl hover:text-black hover:scale-110 dark:text-gray-300 dark:hover:text-pink-700 am:text-base sm:text-lg md:text-3xl">
                        More...
                    </p>
                </NavLink>
            </div>
            <div className="w-full flex flex-wrap md:justify-between am:gap-4 md:gap-y-10">
                {loading ? (
                    <h1>Loading</h1>
                ) : (
                    data.slice(0, 4).map((item) => (
                        <Link to={`/about-movie/${item.id}`} key={item.id}>
                            <Card
                                title={item.title}
                                releaseDate={item.release_date}
                                userScore={item.vote_average}
                                img={item.poster_path}
                            />
                        </Link>
                    ))
                )}
            </div>
            <Footer />
        </main>
    );
};

export default Home;
