import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import api, { apiKey } from "../sevices/config";
import BoxMovieSearched from "./BoxMovieSearched.jsx";

const SearchBox = () => {
    const [valueInput, setValueInput] = useState("");
    const [searched, setSearched] = useState([]);

    const searchHandler = (event) => {
        const fetchData = async () => {
            if (valueInput !== "") {
                const response = await api.get(
                    `/search/movie?${apiKey}&query=${valueInput}&page=1`
                );
                setSearched(response.results);
            } else {
                setSearched([]);
            }
        };
        fetchData();
    };

    const noneSearchHandler = (event) => {
        if (event.keyCode == 8 && valueInput === "") {
            setSearched([]);
        }
    };

    return (
        <>
            <div className=" w-full h-10 flex justify-between ">
                <input
                    type="text"
                    placeholder="Enter Movie Name..."
                    className="w-[78%] outline-none box-shadow-input px-6 py-2 rounded-lg text-lg"
                    value={valueInput}
                    onChange={(event) => {
                        setValueInput(event.target.value);
                    }}
                    // onKeyDown={searchHandler}
                    onKeyDown={(event) => {
                        searchHandler(event);
                        noneSearchHandler(event);
                    }}
                />

                <button
                    onClick={searchHandler}
                    className="w-[20%] h-full rounded-full searchBoxShadow flex items-center justify-center gap-3 text-white bg-primaryColor cursor-pointer transition hover:scale-110 dark:bg-pink-700 "
                >
                    <p className="md:text-xl text-2xl sm:text-base am:hidden sm:block">
                        Search
                    </p>
                    <IoSearchOutline className="md:w-10 h-full rounded-lg px-1 text-shadow am:w-8 " />
                </button>
            </div>
            {searched.length > 0 && <BoxMovieSearched searched={searched} />}
        </>
    );
};

export default SearchBox;
