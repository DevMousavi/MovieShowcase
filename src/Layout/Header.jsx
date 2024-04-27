import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="w-full grid grid-flow-col grid-cols-2 items-center justify-between px-10 py-2 font-bold shadow-primaryShadow rounded-xl ">
            <ul className="flex items-center gap-16 text-primaryColor">
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
            <div>
                <ul className="flex items-center justify-end gap-7 text-primaryColor">
                    <li className="btn hover:btn-Hover">
                        <NavLink to="/login">Login</NavLink>
                    </li>
                    <li className="btn hover:btn-Hover">
                        <NavLink to="/sing-up">Sing Up</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
