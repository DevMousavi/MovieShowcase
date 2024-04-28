import React from "react";
import { baseURLImage } from "../sevices/config.js";

const CardPeopleShow = (props) => {
    return (
        <div>
            <div className="flex flex-col cardShadow transition hover:hoverCardShadow w-72 py-6 rounded-xl">
                <img
                    src={baseURLImage + props.img}
                    alt=""
                    className="w-60 h-72 m-auto rounded-lg"
                />

                <span className="w-60 m-auto">
                    <h3 className="text-primaryColor name-shadow font-bold text-xl mb-1 mt-8">
                        {props.name}
                    </h3>
                    <span>
                        <h3 className="text-sm mt-3 mb-2">Papular Movie:</h3>
                    </span>
                </span>
            </div>
        </div>
    );
};

export default CardPeopleShow;
