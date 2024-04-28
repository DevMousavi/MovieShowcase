import React, { createContext, useEffect, useState } from "react";
import api, { apiKey } from "../sevices/config";

const PapularPeopleContext = createContext();
const PapularPeopleContextProvider = ({ children }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(`/person/popular?${apiKey}`);
                setData(response);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <PapularPeopleContext.Provider value={data}>
            {children}
        </PapularPeopleContext.Provider>
    );
};

export default PapularPeopleContextProvider;
export { PapularPeopleContext };
