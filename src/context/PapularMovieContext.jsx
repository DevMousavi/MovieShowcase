import React, { useEffect, useState } from "react";
import api, { apiKey } from "../sevices/config";
import { createContext } from "react";

const PapularMovieContext = createContext();
const PapularMovieContextProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [numberPage, setNumberPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(
                    `/movie/popular?${apiKey}&page=${numberPage}`
                );
                setData(response);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [numberPage]);

    return (
        <PapularMovieContext.Provider
            value={{ data, numberPage, setNumberPage }}
        >
            {children}
        </PapularMovieContext.Provider>
    );
};

export default PapularMovieContextProvider;
export { PapularMovieContext };
