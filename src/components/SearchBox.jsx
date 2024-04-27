import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchBox = () => {
    return (
        <div className=" w-full h-10 flex gap-4">
            <input
                type="text"
                placeholder="Enter Movie Name..."
                className="w-[80%] outline-none box-shadow px-6 py-2 rounded-lg text-lg"
            />
            <IoSearchOutline className="w-10 h-full bg-primaryColor text-white rounded-lg px-1 text-shadow cursor-pointer transition hover:scale-110" />
        </div>
    );
};

export default SearchBox;
