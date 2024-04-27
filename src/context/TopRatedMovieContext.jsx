import React, { createContext, useEffect, useState } from "react";
import api, { apiKey } from "../sevices/config.js";

const TopRatedMovieContext = createContext();

const TopRatedMovieContextProvider = ({ children }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(`/movie/top_rated?${apiKey}`);
                setData(response);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <TopRatedMovieContext.Provider value={data}>
            {children}
        </TopRatedMovieContext.Provider>
    );
};

export default TopRatedMovieContextProvider;
export { TopRatedMovieContext };
