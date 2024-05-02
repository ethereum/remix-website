import React, { useEffect, useRef, useState } from 'react';
import { ReactComponent as Logo } from '../../assets/images/remix-logo.svg';
import { ReactComponent as Hamburger } from '../../assets/images/hamburger.svg';
import { ReactComponent as Close } from '../../assets/images/close.svg';
import { ReactComponent as DownArrow } from "../../assets/images/down-arrow.svg";
import { ReactComponent as UpArrow } from "../../assets/images/up-arrow.svg";
import { ReactComponent as NEArrow } from "../../assets/images/northeast-arrow.svg";
import { LEARNETH_PLUGIN_TUTORIALS_URL, REMIX_DOCS_URL, REMIX_IDE_URL } from "../../constants";
import ThemeDropdown from "../ui/ThemeDropdown"

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
            <div className={`${isMenuOpen ? "h-full" : ""} sticky w-full top-0 z-10 mx-auto max-w-7xl`}>
                <div className={`flex ${isMenuOpen ? "flex-col" : ""} w-full mx-auto max-w-7xl items-center justify-between px-8 h-[var(--space-nav-height)]`}>
                    {/* NAVIGATION BAR DESKTOP/MOBILE */}
                    <div className="flex w-full h-[4.25rem] items-center gap-4">
                        {/* DESKTOP MENU ITEMS */}
                        <div className="flex w-full justify-between h-[4.25rem]">
                            <div className="flex flex-shrink-0 items-center">
                                <Logo className={`${isMenuOpen ? "hidden" : ""} text-primary h:[30px] w-auto block`} alt="Remix logo" />
                            </div>
                            <div className="hidden sm:flex flex-row gap-7">
                                <a
                                    className="relative inline-flex hover:cursor-pointer items-center shadow-underline"
                                    href="/#"
                                >
                                    <div
                                        className="text-primary px-2 text-base leading-6 font-normal">
                                        Remix Project
                                    </div>
                                </a>

                                <a
                                    className="group relative inline-flex items-center hover:text-primary hover:shadow-thick-underline"
                                    href={REMIX_DOCS_URL}
                                >
                                    <div className="text-body group-hover:text-primary px-2 text-base leading-6 font-normal"
                                    >
                                        Documentation
                                    </div>
                                </a>

                                <a
                                    className="group relative inline-flex hover:cursor-pointer items-center hover:shadow-thick-underline"
                                    href={REMIX_IDE_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="text-body group-hover:text-primary px-2 text-base leading-6 font-normal">
                                        IDE
                                    </div>
                                </a>

                                <div className=" relative inline-flex items-center" ref={ref}>
                                    <div className="group relative px-2 text-base leading-6 font-normal text-body /hover:cursor-pointer h-full">
                                        <button className="inline-flex items-center w-full gap-1.5 h-full group-hover:text-primary hover:shadow-thick-underline" onClick={toggleLearnSection}>
                                            Learn {isLearnOpen ? <UpArrow /> : <DownArrow />}
                                        </button>

                                        {isLearnOpen &&
                                            <div className={`absolute top-16 right-0 border border-primary rounded-md z-10 w-max p-6 flex flex-col gap-1.5 bg-background tracking-tight leading-6`}>
                                                <a href={LEARNETH_PLUGIN_TUTORIALS_URL}
                                                    target="_blank" rel="noreferrer"
                                                    className="flex items-center gap-1 text-body leading-5 text-base hover:text-primary hover:cursor-pointer py-1.5">
                                                    Guided IDE Tutorial <NEArrow />
                                                </a>
                                                <a href="https://www.youtube.com/channel/UCjTUPyFEr2xDGN6Cg8nKDaA"
                                                    target="_blank" rel="noreferrer"
                                                    className="flex items-center gap-1 text-body leading-5 text-base hover:text-primary hover:cursor-pointer py-1.5">
                                                    Videos <NEArrow />
                                                </a>
                                                <a href="https://medium.com/remix-ide"
                                                    target="_blank" rel="noreferrer"
                                                    className="flex items-center gap-1 text-body leading-5 text-base hover:text-primary hover:cursor-pointer py-1.5">
                                                    Articles <NEArrow />
                                                </a>
                                            </div>
                                        }
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* THEME DROPDOWN (desktop + mobile) */}
                        <ThemeDropdown />

                        {/* HAMBURGER/CLOSE BUTTON (desktop + mobile) */}
                        <div className="flex items-center sm:hidden">
                            <div className="md:hidden flex items-center">
                                <button onClick={toggleMenu} className="outline-none text-body">
                                    {isMenuOpen ? <Close /> : <Hamburger />}
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
                                    className={`"text-primary" px-1 pt-1 text-base leading-6 font-normal`}>
                                    Remix Project
                                </div>
                                <div className={`block bottom-0 absolute w-full h-[1px] bg-primary`} />
                            </a>

                            <a
                                className=" relative inline-flex items-center hover:text-primary"
                                href={REMIX_DOCS_URL}
                            >
                                <div className={`
                                    text-body
                                    px-1 pt-1 text-base leading-6 font-normal `}
                                >
                                    Documentation
                                </div>
                            </a>

                            <a
                                className="relative inline-flex hover:cursor-pointer items-center"
                                href={REMIX_IDE_URL}
                            >
                                <div className={`text-body px-1 pt-1 text-base leading-6 font-normal`}>
                                    IDE
                                </div>
                            </a>

                            <div className="inline-flex items-center h-full" ref={ref}>
                                <div className="relative px-1 pt-1 text-base leading-6 font-normal text-body hover:cursor-pointer h-full">
                                    <button className="inline-flex w-full gap-1.5 h-full" onClick={toggleLearnSection}>
                                    Learn {isLearnOpen ? <UpArrow /> : <DownArrow />}
                                    </button>
                                    {isLearnOpen &&
                                        <div className={`absolute top-8 border border-[#D9D9D9] rounded z-10 w-52 end-8 start-unset pl-4 py-6 flex flex-col gap-4 bg-background`}>
                                            <a href={LEARNETH_PLUGIN_TUTORIALS_URL}
                                                target="_blank" rel="noreferrer"
                                                className="text-body text-base hover:text-primary hover:cursor-pointer">
                                                Guided IDE Tutorial
                                            </a>
                                            <a href="https://www.youtube.com/channel/UCjTUPyFEr2xDGN6Cg8nKDaA"
                                                target="_blank" rel="noreferrer"
                                                className="text-body text-base  hover:text-primary hover:cursor-pointer">
                                                Videos
                                            </a>
                                            <a href="https://medium.com/remix-ide"
                                                target="_blank" rel="noreferrer"
                                                className="text-body text-base hover:text-primary hover:cursor-pointer">
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
