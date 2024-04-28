import React, { useContext, useEffect, useState } from "react";
import Header from "../Layout/Header.jsx";
import Footer from "../Layout/Footer.jsx";
import { PapularMovieContext } from "../context/PapularMovieContext.jsx";
import Card from "../components/Card.jsx";

const PapularMovie = () => {
    const primaryData = useContext(PapularMovieContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = () => {
            try {
                if (primaryData && primaryData.results) {
                    setData(primaryData.results);
                    setLoading(false);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
        // console.log(primaryData);
        // console.log(data);
    }, [primaryData]);

    return (
        <main>
            <Header />
            <main className="w-full flex flex-wrap justify-between gap-y-10">
                {loading ? (
                    <h1>Loading</h1>
                ) : (
                    data.map((item) => (
                        <Card
                            key={item.id}
                            title={item.title}
                            releaseDate={item.release_date}
                            userScore={item.vote_average}
                            img={item.poster_path}
                        />
                    ))
                )}
            </main>
            <Footer />
        </main>
    );
};

export default PapularMovie;
