import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const NumberPageHandler = (props) => {
    const plusNumberHandler = () => {
        if (props.numberPage >= 1) {
            props.setNumberPage((numberPage) => numberPage + 1);
        }
    };

    const lowNumber = () => {
        if (props.numberPage > 1) {
            props.setNumberPage((numberPage) => numberPage - 1);
        }
    };

    return (
        <div className="w-80 mx-auto my-6 flex flex-row items-center justify-center py-1 text-3xl">
            <button
                onClick={lowNumber}
                className=" transition rounded-xl hover:bg-primaryColor hover:text-white"
            >
                <MdKeyboardArrowLeft />
            </button>
            <span>...</span>
            <p className="text-xl  bg-primaryColor text-white px-2 rounded-full">
                {props.numberPage}
            </p>
            <span>...</span>
            <button
                onClick={plusNumberHandler}
                className=" transition rounded-xl hover:bg-primaryColor hover:text-white"
            >
                <MdKeyboardArrowRight />
            </button>
        </div>
    );
};

export default NumberPageHandler;
