import React from "react";
import { baseURLImage } from "../sevices/config";
import { removeDecimal } from "../helper/removeDecimal";

const BoxMovieSearched = ({ searched }) => {
    return (
        <div className="w-[78%] bg-gray-200 flex flex-col gap-5 rounded-br-3xl rounded-b-3xl px-8 py-2 dark:transition-Primary dark:bg-gray-900 dark:hover:hoverCardShadowDark">
            <h2 className="mt-1 text-3xl text-primaryColor text-center dark:text-gray-200 ">
                Searched...
            </h2>
            {searched.map((movie) => (
                <div
                    key={movie.id}
                    className="flex items-center justify-between py-2 px-7 rounded-xl cursor-pointer border-dashed border-black transition-Primary hover:bg-purple-300 dark:text-white dark:hover:bg-gray-400 dark:hover:text-black"
                >
                    <img
                        className="rounded-full w-24 h-24 border-primaryColor border-4 border-dashed"
                        src={baseURLImage + movie.poster_path}
                        alt={`${movie.title}.png`}
                    />
                    <span>
                        <h2 className="text-xl">{movie.title}</h2>
                        <p>{`Release Date: ${movie.release_date}`}</p>
                    </span>
                    <span>
                        <p>{`langue: ${movie.original_language}`}</p>

                        <p>{`User Score: ${removeDecimal(
                            movie.vote_average * 10
                        )}%`}</p>
                    </span>
                </div>
            ))}
        </div>
    );
};

export default BoxMovieSearched;
