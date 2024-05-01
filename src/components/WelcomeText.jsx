import React from "react";

const WelcomeText = () => {
    return (
        <div className="my-14">
            <h1 className="mb-10 mt-24 text-primaryColor am:block  at:hidden  xl:text-7xl md:text-4xl sm:text-3xl text-shadow font-bold dark:text-primaryColorYellow dark:text-gray-300">
                Welcome To "Movie Showcase"...
            </h1>
            <h1 className="mb-10 mt-24 am:hidden text-primaryColor text-shadow font-bold dark:text-primaryColorYellow dark:text-gray-300">
                Movie Showcase
            </h1>
            <h2 className="mb-3 text-2xl text-primaryColor xl:text-5xl  md:text-3xl sm:text-xl am:text-sm am:block   at:hidden font-bold dark:text-primaryColorYellow dark:text-gray-300">
                Millions of movies and people to discover...
            </h2>
            <h3 className="mb-3 text-xl text-primaryColor font-bold xl:text-5xl  md:text-3xl sm:text-xl am:text-sm am:block   at:hidden dark:text-primaryColorYellow dark:text-gray-300">
                Explore now...
            </h3>
        </div>
    );
};

export default WelcomeText;
