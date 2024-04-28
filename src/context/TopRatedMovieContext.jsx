import React, { createContext, useEffect, useState } from "react";
import api, { apiKey } from "../sevices/config.js";

const TopRatedMovieContext = createContext();

const TopRatedMovieContextProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(
                    `/movie/top_rated?${apiKey}&page=${pageNumber}`
                );
                setData(response);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [pageNumber]);

    return (
        <TopRatedMovieContext.Provider
            value={{ data, pageNumber, setPageNumber }}
        >
            {children}
        </TopRatedMovieContext.Provider>
    );
};

export default TopRatedMovieContextProvider;
export { TopRatedMovieContext };
