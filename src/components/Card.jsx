import React from "react";

const Card = () => {
    return (
        <div className="flex flex-col relative cardShadow w-72 py-6 rounded-xl">
            <img src="" alt="" className="w-60 h-72 m-auto rounded-lg" />
            <p
                title="User Score"
                className="mx font-bold text-white bg-primaryColor p-2 absolute top-[280px] left-2 rounded-full border-dashed border-2"
            >
                81%
            </p>
            <span className="w-60 m-auto">
                <h3 className="text-black font-bold text-xl mb-1 mt-8">Name</h3>
                <h4 className="text-gray-600 text-base">Apr 19 ,2024</h4>
            </span>
        </div>
    );
};

export default Card;
