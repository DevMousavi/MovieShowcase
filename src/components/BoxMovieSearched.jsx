import React, { useEffect, useState } from "react";
import { baseURLImage } from "../sevices/config";
import { removeDecimal } from "../helper/removeDecimal";
import { Link } from "react-router-dom";
import { checkWordCount } from "../helper/checkWordCount";

const BoxMovieSearched = ({ searched }) => {
    return (
        <div className="w-[78%] bg-gray-200 flex flex-col gap-5 rounded-br-3xl rounded-b-3xl px-8 py-2 dark:transition-Primary  dark:bg-gray-900 dark:hover:hoverCardShadowDark">
            <h2 className="mt-1 text-primaryColor text-center dark:text-gray-200 am:text-base am:font-bold sm:text-3xl ">
                Searched...
            </h2>
            {searched.map((movie) => (
                <Link to={`/about-movie/${movie.id}`} key={movie.id}>
                    <div className="flex sm:flex-row am:flex-col items-center justify-between am:px-1 am:py-2 sm:py-2 sm:px-7 rounded-xl cursor-pointer border-dashed border-black transition-Primary hover:bg-purple-300 dark:text-white dark:hover:bg-gray-400 dark:hover:text-black">
                        <img
                            className="rounded-full w-24 h-24 border-primaryColor border-4 border-dashed"
                            src={baseURLImage + movie.poster_path}
                            alt={`${movie.title}.png`}
                        />
                        <span className="am:mt-3 sm:mt-0">
                            <h2
                                title={movie.title}
                                className="am:text-base am:font-bold sm:text-xl"
                            >
                                {checkWordCount(movie.title)}
                            </h2>
                            <p className="am:text-sm sm:text-base">{`Release Date: ${movie.release_date}`}</p>
                        </span>
                        <span className="am:hidden md:block">
                            <p>{`langue: ${movie.original_language}`}</p>

                            <p>{`User Score: ${removeDecimal(
                                movie.vote_average * 10
                            )}%`}</p>
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default BoxMovieSearched;
