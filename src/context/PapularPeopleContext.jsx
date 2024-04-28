import React, { createContext, useEffect, useState } from "react";
import api, { apiKey } from "../sevices/config";

const PapularPeopleContext = createContext();
const PapularPeopleContextProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(
                    `/person/popular?${apiKey}&page=${page}`
                );
                setData(response);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [page]);

    return (
        <PapularPeopleContext.Provider value={{ data, setPage, page }}>
            {children}
        </PapularPeopleContext.Provider>
    );
};

export default PapularPeopleContextProvider;
export { PapularPeopleContext };
