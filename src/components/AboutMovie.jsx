import React, { useEffect, useState } from "react";
import Header from "../Layout/Header.jsx";
import Footer from "../Layout/Footer.jsx";
import { useParams } from "react-router-dom";
import api, { apiKey, baseURLImage, baseURLPoster } from "../sevices/config.js";
import { displayYearOnly } from "../helper/displayYearOnly.js";
import { removeDecimal } from "../helper/removeDecimal.js";

const AboutMovie = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get(`/movie/${params.id}?${apiKey}`);
            setData(response);
            setLoading(true);
        };
        fetchData();
    }, []);
    const params = useParams();
    return (
        <>
            <Header />
            <main>
                {loading ? (
                    <div className="w-full">
                        <div className="relative">
                            <img
                                className="w-full h-[600px] rounded-3xl"
                                src={baseURLPoster + data.backdrop_path}
                                alt={`${data.title}(backdrop).png`}
                            />
                            <img
                                className="m-auto rounded-2xl absolute top-[700px] left-0 right-0 bottom-0 border-[6px] border-white border-solid"
                                src={baseURLImage + data.poster_path}
                                alt={`${data.title}(poster).png`}
                            />
                        </div>
                        <div className="w-full mt-9 bg-gray-200 box-shadow text-gray-700 font-bold p-4 rounded-lg flex flex-col gap-3 transition-Primary dark:bg-gray-900 dark:hover:hoverCardShadowDark dark:text-white">
                            <h1>
                                <span className="text-primaryColor text-xl font-bold dark:text-pink-700">
                                    Name :
                                </span>
                                {`${data.title} ( ${displayYearOnly(
                                    data.release_date
                                )} )`}
                            </h1>
                            <h2>
                                <span className="text-primaryColor text-xl font-bold dark:text-pink-700">
                                    languages:
                                </span>
                                {data.spoken_languages.map(
                                    (language, index) => (
                                        <p key={index}>
                                            &nbsp; {language.name} ...
                                        </p>
                                    )
                                )}
                            </h2>
                            <h2>
                                <span className="text-primaryColor text-xl font-bold dark:text-pink-700">
                                    Production Countries :
                                </span>
                                {data.production_countries.map((i, index) => (
                                    <p key={index}>&nbsp;{i.name} ...</p>
                                ))}
                            </h2>
                            <h2>
                                <span className="text-primaryColor text-xl font-bold dark:text-pink-700">
                                    Genres :
                                </span>
                                {data.genres.map((i, index) => (
                                    <p key={index}>&nbsp;{i.name} ...</p>
                                ))}
                            </h2>

                            <p>
                                <span className="text-primaryColor text-xl font-bold dark:text-pink-700">
                                    Running Time : &nbsp;
                                </span>
                                {`${data.runtime} m`}
                            </p>

                            <p>
                                <span className="text-primaryColor text-xl font-bold dark:text-pink-700">
                                    Status :&nbsp;
                                </span>
                                {data.status}
                            </p>
                            <h2>
                                <span className="text-primaryColor text-xl font-bold dark:text-pink-700">
                                    User Score:&nbsp;
                                </span>
                                {`${removeDecimal(data.vote_average * 10)} %`}
                            </h2>
                            <h2>
                                <span className="text-primaryColor text-xl font-bold dark:text-pink-700">
                                    Vote :&nbsp;
                                </span>
                                {data.vote_count}
                            </h2>
                        </div>
                        <h3 className="mt-3 box-shadow p-4 rounded-lg  transition-Primary dark:hover:hoverCardShadowDark">
                            <p className="text-primaryColor text-xl font-bold dark:text-pink-700">
                                Summery :
                            </p>
                            <span className="text-black dark:text-white">
                                {data.overview}
                            </span>
                        </h3>
                    </div>
                ) : (
                    <h1>Loading</h1>
                )}
            </main>
            <Footer />
        </>
    );
};

export default AboutMovie;
