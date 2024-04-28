import React, { useContext, useEffect, useState } from "react";
import Header from "../Layout/Header.jsx";
import Footer from "../Layout/Footer.jsx";
import CardPeopleShow from "../components/CardPeopleShow.jsx";
import { PapularPeopleContext } from "../context/PapularPeopleContext.jsx";

const PapularPeople = () => {
    const primaryData = useContext(PapularPeopleContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = () => {
            try {
                if (primaryData && primaryData.results) {
                    setData(primaryData.results);
                    setLoading(false);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
        console.log(primaryData);
        // console.log(data);
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
                            movie1={item.known_for[0].original_title}
                            movie2={item.known_for[1].original_title}
                            movie3={item.known_for[2].original_title}
                            name={item.original_name}
                            img={item.profile_path}
                        />
                    ))
                )}

                <Footer />
            </main>
        </>
    );
};

export default PapularPeople;
