import React from "react";
import { NavLink } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const Header = () => {
    const changeHandler = () => {
        const mode = localStorage.getItem("mode");

        if (mode === "light") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("mode", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("mode", "light");
        }
    };

    React.useEffect(() => {
        const mode = localStorage.getItem("mode");

        if (mode === "dark") {
            document.documentElement.classList.add("dark");
        }
    }, []);

    const boxPages = document.querySelector(".backGround-Gradient");
    const showBaxPages = () => {
        boxPages.classList.toggle("at:hidden");
    };

    return (
        <>
            <header className="w-full grid grid-flow-col grid-cols-2 items-center justify-between px-14 py-2 mb-14 font-bold shadow-primaryShadow rounded-xl ">
                <ul className="flex items-center gap-7 text-primaryColor at:w-full dark:text-gray-300">
                    <li className=" at:flex at:w-full at:items-center at:justify-between lg:w-14">
                        <FaBars
                            onClick={showBaxPages}
                            className="text-xl  cursor-pointer transition-all ease-in duration-700 hover:primary-rotate lg:hidden dark:text-gray-300 dark:hover:text-orange-600"
                        />
                        <NavLink to="/">
                            <img
                                className="lg:w-12 transition-Primary hover:scale-125 at:w-9  lg:block"
                                src="../../public/Logo-MovieShowcase.png"
                                alt="Logo-MovieShowcase.png"
                            />
                        </NavLink>
                    </li>
                    <li className="btn hover:btn-Hover dark:hover:bg-pink-700 at:hidden  lg:block">
                        <NavLink to="/papular-movie">Papular Movie</NavLink>
                    </li>
                    <li className="btn hover:btn-Hover  dark:hover:bg-pink-700 at:hidden  lg:block">
                        <NavLink to="/papular-people">Papular People</NavLink>
                    </li>
                </ul>
                <div className=" flex justify-end items-center">
                    {/* <ul className="flex items-center justify-end gap-0 text-primaryColor dark:text-primaryColorYellow dark:text-gray-300">
                    <li className="btn hover:btn-Hover  dark:hover:bg-pink-700">
                        <NavLink to="/login">Login</NavLink>
                    </li>
                    <li className="btn hover:btn-Hover  dark:hover:bg-pink-700">
                        <NavLink to="/sing-up">Sing Up</NavLink>
                    </li>
                </ul> */}
                    <FaMoon
                        onClick={changeHandler}
                        title="Mode.."
                        className="ml-5 cursor-pointer text-xl text-primaryColor transition hover:scale-125 dark:text-gray-300 dark:hover:text-orange-600"
                    />
                </div>
            </header>
            <div className="backGround-Gradient box-shadow sm:w-[25%] rounded-md p-2 am:text-sm am:w-full am:ml-0 at:hidden lg:hidden dark:backGround-Gradient-Dark ">
                <ul className="flex flex-col items-center gap-3 text-gray-900 dark:text-gray-300">
                    <li className="btn hover:btn-Hover dark:hover:bg-pink-700  ">
                        <NavLink to="/">Home</NavLink>
                    </li>

                    <li className="btn hover:btn-Hover dark:hover:bg-black ">
                        <NavLink to="/papular-movie">Papular Movie</NavLink>
                    </li>
                    <li className="btn hover:btn-Hover  dark:hover:bg-black ">
                        <NavLink to="/papular-people">Papular People</NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Header;
