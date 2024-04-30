import React, { useContext, useEffect, useState } from "react";
import Header from "../Layout/Header.jsx";
import Footer from "../Layout/Footer.jsx";
import Card from "../components/Card.jsx";
import { TopRatedMovieContext } from "../context/TopRatedMovieContext.jsx";
import NumberPageHandler from "../components/NumberPageHandler.jsx";
import { Link } from "react-router-dom";

const TopRated = () => {
    const primaryData = useContext(TopRatedMovieContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [numberPage, setNumberPage] = useState(1);

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

    useEffect(() => {
        primaryData.setPageNumber(numberPage);
    }, [numberPage, primaryData.PageNumber]);

    return (
        <>
            <Header />
            <main>
                <div className="w-full flex flex-wrap justify-between gap-y-10">
                    {loading ? (
                        <h1>Loading</h1>
                    ) : (
                        data.map((item) => (
                            <Link to={`/about-movie/${item.id}`} key={item.id}>
                                <Card
                                    key={item.id}
                                    title={item.title}
                                    releaseDate={item.release_date}
                                    userScore={item.vote_average}
                                    img={item.poster_path}
                                />
                            </Link>
                        ))
                    )}
                </div>
                <div></div>
            </main>
            <NumberPageHandler
                numberPage={numberPage}
                setNumberPage={setNumberPage}
                number={numberPage}
            />
            <Footer />
        </>
    );
};

export default TopRated;
