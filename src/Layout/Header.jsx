import React from "react";
import { NavLink } from "react-router-dom";
import { FaMoon } from "react-icons/fa";

const Header = () => {
    return (
        <header className="w-full grid grid-flow-col grid-cols-2 items-center justify-between px-14 py-2 mb-14 font-bold shadow-primaryShadow rounded-xl ">
            <ul className="flex items-center gap-7 text-primaryColor">
                <li>
                    <NavLink to="/">
                        <img
                            className="w-12"
                            src="../../public/Logo-MovieShowcase.png"
                            alt="Logo-MovieShowcase.png"
                        />
                    </NavLink>
                </li>
                <li className="btn hover:btn-Hover">
                    <NavLink to="/papular-movie">Papular Movie</NavLink>
                </li>
                <li className="btn hover:btn-Hover">
                    <NavLink to="/papular-people">Papular People</NavLink>
                </li>
            </ul>
            <div className=" flex justify-end items-center">
                <ul className="flex items-center justify-end gap-0 text-primaryColor">
                    <li className="btn hover:btn-Hover">
                        <NavLink to="/login">Login</NavLink>
                    </li>
                    <li className="btn hover:btn-Hover">
                        <NavLink to="/sing-up">Sing Up</NavLink>
                    </li>
                </ul>
                <FaMoon
                    title="Mode.."
                    className="ml-5 cursor-pointer text-xl text-primaryColor transition hover:scale-125"
                />
            </div>
        </header>
    );
};

export default Header;
