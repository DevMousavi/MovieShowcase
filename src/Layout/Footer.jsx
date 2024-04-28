import React from "react";
import { FaTelegram } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full mt-14 flex items-center justify-center gap-8 px-4 py-2 font-bold shadow-primaryShadow rounded-xl text-primaryColor">
            <a
                href="https://t.me/DevMousavi"
                target="_blank"
                className="flex items-center gap-1 dark:transition-Primary dark:hover:text-white"
            >
                <FaTelegram />
                DevMousavi
            </a>
            <span className="flex items-center gap-[2px] dark:transition-Primary dark:hover:text-white">
                <BiLogoGmail />
                mousavii.dev@gmail.com
            </span>
            <a
                href="https://github.com/DevMousavi"
                target="_blank"
                className="flex items-center gap-[2px] dark:transition-Primary dark:hover:text-white"
            >
                <FaGithub /> DevMousavi
            </a>
        </footer>
    );
};

export default Footer;
