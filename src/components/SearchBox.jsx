import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchBox = () => {
    return (
        <div className=" w-full h-10 flex justify-between mb-14">
            <input
                type="text"
                placeholder="Enter Movie Name..."
                className="w-[78%] outline-none box-shadow-input px-6 py-2 rounded-lg text-lg "
            />
            <span className="w-[20%] h-full rounded-full searchBoxShadow flex items-center justify-center gap-3 text-white bg-primaryColor cursor-pointer transition hover:scale-110 dark:bg-pink-700 ">
                <p className="text-2xl">Search</p>
                <IoSearchOutline className="w-10 h-full rounded-lg px-1 text-shadow " />
            </span>
        </div>
    );
};

export default SearchBox;
