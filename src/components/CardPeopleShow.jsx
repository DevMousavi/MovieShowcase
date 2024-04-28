import React from "react";
import { baseURLImage } from "../sevices/config.js";

const CardPeopleShow = (props) => {
    return (
        <div>
            <div className="flex flex-col cardShadow transition hover:hoverCardShadow w-72 py-6 rounded-xl  dark:bg-[#2a424d] dark:cardShadowDarkMode dark:hover:hoverCardShadowDarkMode">
                <img
                    src={baseURLImage + props.img}
                    alt=""
                    className="w-60 h-72 m-auto rounded-lg"
                />

                <span className="w-60 m-auto">
                    <h3 className="text-primaryColor name-shadow font-bold text-xl mb-1 mt-8 dark:text-primaryColorYellow">
                        {props.name}
                    </h3>
                </span>
            </div>
        </div>
    );
};

export default CardPeopleShow;
