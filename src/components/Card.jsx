import React from "react";
import { removeDecimal } from "../helper/removeDecimal";
import { baseURLImage } from "../sevices/config.js";
import { checkWordCount } from "../helper/checkWordCount.js";

const Card = (props) => {
    const image = baseURLImage + props.img;
    return (
        <div className="cursor-pointer flex flex-col relative cardShadow transition hover:hoverCardShadow w-72 py-6 rounded-xl dark:bg-gray-900 dark:hover:hoverCardShadowDark">
            <img src={image} alt="" className="w-60 h-72 m-auto rounded-lg" />
            <p
                title="User Score"
                className="mx font-bold text-white bg-primaryColor p-2 absolute top-[288px] left-2 rounded-full border-dashed border-2  "
            >
                {`${removeDecimal(props.userScore * 10)}%`}
            </p>
            <span className="w-60 m-auto">
                <h3
                    title={props.title}
                    className="text-black font-bold text-lg mb-1 mt-8 dark:text-white"
                >
                    {checkWordCount(props.title)}
                </h3>
                <h4
                    title="Release Date"
                    className="text-gray-600 text-base dark:text-gray-300"
                >
                    {props.releaseDate}
                </h4>
            </span>
        </div>
    );
};

export default Card;
