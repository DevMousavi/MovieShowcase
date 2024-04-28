import React, { useEffect, useState } from "react";
import api, { apiKey } from "../sevices/config";
import { createContext } from "react";

const PapularMovieContext = createContext();
const PapularMovieContextProvider = ({ children }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(
                    `/movie/popular?${apiKey}&page=${1}`
                );
                setData(response);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <PapularMovieContext.Provider value={data}>
            {children}
        </PapularMovieContext.Provider>
    );
};

export default PapularMovieContextProvider;
export { PapularMovieContext };
