import React, { useContext, useEffect, useState } from "react";
import Header from "../Layout/Header.jsx";
import Footer from "../Layout/Footer.jsx";
import CardPeopleShow from "../components/CardPeopleShow.jsx";
import { PapularPeopleContext } from "../context/PapularPeopleContext.jsx";
import NumberPageHandler from "../components/NumberPageHandler.jsx";

const PapularPeople = () => {
    const primaryData = useContext(PapularPeopleContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [numberPage, setNumberPage] = useState(1);

    useEffect(() => {
        primaryData.setPage(numberPage);
    }, [numberPage, primaryData.setPage]);

    useEffect(() => {
        const fetchData = () => {
            try {
                if (primaryData.data && primaryData.data.results) {
                    setData(primaryData.data.results);
                    setLoading(false);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [primaryData]);
    return (
        <>
            <Header />
            <main className="w-full flex flex-wrap justify-between gap-y-10">
                {loading ? (
                    <h1>Loading</h1>
                ) : (
                    data.map((item) => (
                        <CardPeopleShow
                            key={item.id}
                            name={item.original_name}
                            img={item.profile_path}
                        />
                    ))
                )}
            </main>
            {/* <button onClick={numberPageHandler}>Click Me</button> */}
            <NumberPageHandler
                numberPage={numberPage}
                setNumberPage={setNumberPage}
                number={numberPage}
            />
            <Footer />
        </>
    );
};

export default PapularPeople;
