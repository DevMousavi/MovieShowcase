import React from "react";
import { removeDecimal } from "../helper/removeDecimal";
import { baseURLImage } from "../sevices/config.js";

const Card = (props) => {
    const image = baseURLImage + props.img;
    return (
        <div className="flex flex-col relative cardShadow transition hover:hoverCardShadow w-72 py-6 rounded-xl">
            <img src={image} alt="" className="w-60 h-72 m-auto rounded-lg" />
            <p
                title="User Score"
                className="mx font-bold text-white bg-primaryColor p-2 absolute top-[288px] left-2 rounded-full border-dashed border-2"
            >
                {`${removeDecimal(props.userScore * 10)}%`}
            </p>
            <span className="w-60 m-auto">
                <h3 className="text-black font-bold text-xl mb-1 mt-8">
                    {props.title}
                </h3>
                <h4 title="Release Date" className="text-gray-600 text-base">
                    {props.releaseDate}
                </h4>
            </span>
        </div>
    );
};

export default Card;
