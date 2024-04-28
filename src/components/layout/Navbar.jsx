import React, { useEffect, useRef, useState } from 'react';
import logo from "../../assets/images/remix-logo.svg";
import downArrow from "../../assets/images/down-arrow.svg";
import upArrow from "../../assets/images/up-arrow.svg";
import { LEARNETH_PLUGIN_TUTORIALS_URL, REMIX_DOCS_URL, REMIX_IDE_URL } from "../../constants";

const Navbar = () => {
    const ref = useRef();
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isLearnOpen, setLearnOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(current => !current)

    useEffect(() => {
        const checkIfClickedOutside = e => {

            if (isLearnOpen && ref.current && !ref.current.contains(e.target)) {
                toggleLearnSection()
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isLearnOpen])

    // "Escape" key to close the menu
    useEffect(() => {
        const handleKeyDown = e => {
            if (e.key === "Escape") {
                setMenuOpen(false)
            }
        }
        document.addEventListener("keydown", handleKeyDown)
        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [])

    const toggleLearnSection = () => {
        return setLearnOpen(current => !current)
    }

    return (
        <div
            className={`
                fixed
                font-helvetica
                inset-x-0
                top-0
                z-50
                flex
                items-center
                ${isMenuOpen ? "h-full" : "shadow-md"}
                backdrop-blur[3px]
                blur-backdrop
            `}>
            <div className={`${isMenuOpen ? "h-full" : ""} px-6 sticky w-full top-0 z-10 bg-white  mx-auto max-w-7xl`}>
                <div className={`flex ${isMenuOpen ? "flex-col" : ""} w-full mx-auto max-w-7xl items-center justify-between px-8 h-[var(--space-nav-height)]`}>
                    {/* NAVIGATION BAR DESKTOP/MOBILE */}
                    <div className="flex w-full h-[4.5rem]">
                        {/* DESKTOP MENU ITEMS */}
                        <div className="flex w-full justify-between">
                            <div className="flex flex-shrink-0 items-center">
                                <img
                                    className={`${isMenuOpen ? "hidden" : ""} h-8 w-auto block`}
                                    src={logo}
                                    alt="Remix logo"
                                />
                            </div>
                            <div className="hidden sm:flex sm:flex-row sm:gap-8	">
                                <a
                                    className="relative inline-flex hover:cursor-pointer items-center"
                                    href="/#"
                                >
                                    <div
                                        className={`"text-blue" px-1 pt-1 text-base leading-6 font-normal`}>
                                        Remix Project
                                    </div>
                                    <div className={`block bottom-0 absolute w-full h-0.5 bg-blue`} />
                                </a>

                                <a
                                    className=" relative inline-flex items-center hover:text-blue"
                                    href={REMIX_DOCS_URL}
                                >
                                    <div className={`
                                        text-gray
                                        px-1 pt-1 text-base leading-6 font-normal `}
                                    >
                                        Documentation
                                    </div>
                                </a>

                                <a
                                    className="relative inline-flex hover:cursor-pointer items-center"
                                    href={REMIX_IDE_URL}
                                >
                                    <div className={`text-gray px-1 pt-1 text-base leading-6 font-normal`}>
                                        IDE
                                    </div>
                                </a>

                                <div className="inline-flex items-center" ref={ref}>
                                    <div className="relative px-1 pt-1 text-base leading-6 font-normal text-gray hover:cursor-pointer">
                                        <div className="inline-flex w-full gap-1.5 " onClick={toggleLearnSection}>
                                            Learn <img src={isLearnOpen ? upArrow : downArrow} alt="" />
                                        </div>
                                        {isLearnOpen &&
                                            <div className={`absolute top-8 border border-[#D9D9D9] rounded z-10 w-52 pl-4 py-6 flex flex-col gap-4 bg-white`}>
                                                <a href={LEARNETH_PLUGIN_TUTORIALS_URL}
                                                    target="_blank" rel="noreferrer"
                                                    className="text-gray text-base hover:text-blue hover:cursor-pointer">
                                                    Guided IDE Tutorial
                                                </a>
                                                <a href="https://www.youtube.com/channel/UCjTUPyFEr2xDGN6Cg8nKDaA"
                                                    target="_blank" rel="noreferrer"
                                                    className="text-gray text-base  hover:text-blue hover:cursor-pointer">
                                                    Videos
                                                </a>
                                                <a href="https://medium.com/remix-ide"
                                                    target="_blank" rel="noreferrer"
                                                    className="text-gray text-base hover:text-blue hover:cursor-pointer">
                                                    Articles
                                                </a>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* HAMBURGER/CLOSE BUTTON */}
                        <div className="flex items-center sm:hidden">
                            <div className="md:hidden flex items-center">
                                <button onClick={toggleMenu} className="outline-none ">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d={isMenuOpen ? "M1 21L21 1M21 21L1 1" : "M1.2998 16.9668H22.6331M1.2998 0.966797H22.6331H1.2998ZM1.2998 8.9668H22.6331H1.2998Z"}
                                            stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>

                            </div>
                        </div>
                    </div>
                    {/* MOBILE MENU */}
                    {isMenuOpen &&
                        <div className="pl-14 flex flex-col h-full gap-10 sm:hidden">
                            <a
                                className="relative inline-flex hover:cursor-pointer items-center"
                                href="/#"
                            >
                                <div
                                    className={`"text-blue" px-1 pt-1 text-base leading-6 font-normal`}>
                                    Remix Project
                                </div>
                                <div className={`block bottom-0 absolute w-full h-0.5 bg-blue`} />
                            </a>

                            <a
                                className=" relative inline-flex items-center hover:text-blue"
                                href="https://remix-ide.readthedocs.io/"
                            >
                                <div className={`
                                    text-gray
                                    px-1 pt-1 text-base leading-6 font-normal `}
                                >
                                    Documentation
                                </div>
                            </a>

                            <a
                                className="relative inline-flex hover:cursor-pointer items-center"
                                href={REMIX_IDE_URL}
                            >
                                <div className={`text-gray px-1 pt-1 text-base leading-6 font-normal`}>
                                    IDE
                                </div>
                            </a>
                            <div className="inline-flex items-center" ref={ref}>
                                <div className="relative px-1 pt-1 text-base leading-6 font-normal text-gray hover:cursor-pointer">
                                    <div className="inline-flex w-full gap-1.5 " onClick={toggleLearnSection}>
                                        Learn <img src={isLearnOpen ? upArrow : downArrow} alt="" />
                                    </div>
                                    {isLearnOpen &&
                                        <div className={`absolute top-8 border border-[#D9D9D9] rounded z-10 w-52 end-8 start-unset pl-4 py-6 flex flex-col gap-4 bg-white`}>
                                            <a href={LEARNETH_PLUGIN_TUTORIALS_URL}
                                                target="_blank" rel="noreferrer"
                                                className="text-gray text-base hover:text-blue hover:cursor-pointer">
                                                Guided IDE Tutorial
                                            </a>
                                            <a href="https://www.youtube.com/channel/UCjTUPyFEr2xDGN6Cg8nKDaA"
                                                target="_blank" rel="noreferrer"
                                                className="text-gray text-base  hover:text-blue hover:cursor-pointer">
                                                Videos
                                            </a>
                                            <a href="https://medium.com/remix-ide"
                                                target="_blank" rel="noreferrer"
                                                className="text-gray text-base hover:text-blue hover:cursor-pointer">
                                                Articles
                                            </a>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>

    );
};

export default Navbar;
