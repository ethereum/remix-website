import React, { useEffect, useRef, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { ReactComponent as RemixLogo } from '../../assets/images/remix-logo.svg';
import { ReactComponent as Hamburger } from '../../assets/images/hamburger.svg';
import { ReactComponent as Close } from '../../assets/images/close.svg';
import { ReactComponent as DownArrow } from "../../assets/images/down-arrow.svg";
import { ReactComponent as UpArrow } from "../../assets/images/up-arrow.svg";
import { ReactComponent as NEArrow } from "../../assets/images/northeast-arrow.svg";
import { LEARNETH_PLUGIN_TUTORIALS_URL, REMIX_HOME_URL, REMIX_IDE_URL } from "../../constants";
import ThemeDropdown from "../ui/ThemeDropdown"
import DocsLink from '../ui/DocsLink';

const Navbar = ({ colorState, intlState }) => {
    const learnRef = useRef();
    const langRef = useRef();
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isLearnOpen, setLearnOpen] = useState(false);
    const [isLangOpen, setLangOpen] = useState(false);

    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (isLangOpen && langRef.current && !langRef.current.contains(e.target)) {
                setLangOpen(false)
            }
            if (isLearnOpen && learnRef.current && !learnRef.current.contains(e.target)) {
                toggleLearnSection()
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isLearnOpen, isLangOpen])

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

    const { locales, setLocale } = intlState

    const toggleMenu = () => setMenuOpen(current => !current)

    const toggleLearnSection = () => {
        return setLearnOpen(current => !current)
    }

    const toggleLangSection = () => {
        return setLangOpen(current => !current)
    }

    return (
        <div
            className={` fixed font-helvetica inset-x-0 top-0 z-50 flex items-center ${isMenuOpen ? "h-full" : "shadow-md"} backdrop-blur[3px] blur-backdrop`}>
            <div className={`${isMenuOpen ? "h-full" : ""} sticky w-full top-0 z-10 mx-auto max-w-7xl`}>
                <div className={`flex ${isMenuOpen ? "flex-col" : "flex-row"} w-full mx-auto max-w-7xl ${isMenuOpen ? "items-start" : "items-center"} justify-between px-8 h-[var(--space-nav-height)]`}>
                    {/* NAVIGATION BAR DESKTOP/MOBILE */}
                    <div className="flex w-full h-[4.25rem] items-center gap-4">
                        {/* DESKTOP MENU ITEMS */}
                        <div className="flex w-full justify-between h-[4.25rem]">
                            <a href={REMIX_HOME_URL} className="flex flex-shrink-0 items-center">
                                <RemixLogo className={`text-primary h:[30px] w-auto block`} alt="Remix logo" />
                            </a>
                            <div className="hidden sm:flex flex-row gap-4">
                                <a
                                    className="relative inline-flex hover:cursor-pointer items-center shadow-underline"
                                    href={REMIX_HOME_URL}
                                >
                                    <div
                                        className="text-primary px-2 text-base leading-6 font-normal">
                                        <FormattedMessage id='navbar.remixProject' />
                                    </div>
                                </a>

                                <DocsLink className="group relative inline-flex items-center hover:text-primary hover:shadow-thick-underline">
                                    <div className="text-body group-hover:text-primary px-2 text-base leading-6 font-normal"
                                    >
                                        <FormattedMessage id='navbar.documentation' />
                                    </div>
                                </DocsLink>

                                <a
                                    className="group relative inline-flex hover:cursor-pointer items-center hover:shadow-thick-underline"
                                    href={REMIX_IDE_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="text-body group-hover:text-primary px-2 text-base leading-6 font-normal">
                                        <FormattedMessage id='navbar.ide' />
                                    </div>
                                </a>

                                <div className="relative inline-flex items-center" ref={learnRef}>
                                    <div className="group relative text-base leading-6 font-normal text-body h-full">
                                        <button className="inline-flex px-2 items-center w-full gap-1.5 h-full group-hover:text-primary hover:shadow-thick-underline" onClick={toggleLearnSection}>
                                            <FormattedMessage id='navbar.learn' /> {isLearnOpen ? <UpArrow /> : <DownArrow />}
                                        </button>

                                        {isLearnOpen &&
                                            <div className={`absolute top-16 right-0 border border-primary rounded-md z-10 w-max p-6 flex flex-col gap-1.5 bg-background tracking-tight leading-6`}>
                                                <a href={LEARNETH_PLUGIN_TUTORIALS_URL}
                                                    target="_blank" rel="noreferrer"
                                                    className="flex items-center gap-1 text-body leading-5 text-base hover:text-primary hover:cursor-pointer py-1.5">
                                                    <FormattedMessage id='navbar.tutorials' /> <NEArrow />
                                                </a>
                                                <a href="https://www.youtube.com/channel/UCjTUPyFEr2xDGN6Cg8nKDaA"
                                                    target="_blank" rel="noreferrer"
                                                    className="flex items-center gap-1 text-body leading-5 text-base hover:text-primary hover:cursor-pointer py-1.5">
                                                    <FormattedMessage id='navbar.videos' /> <NEArrow />
                                                </a>
                                                <a href="https://medium.com/remix-ide"
                                                    target="_blank" rel="noreferrer"
                                                    className="flex items-center gap-1 text-body leading-5 text-base hover:text-primary hover:cursor-pointer py-1.5">
                                                    <FormattedMessage id='navbar.articles' /> <NEArrow />
                                                </a>
                                            </div>
                                        }
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* LANGUAGE DROPDOWN MENU */}
                        <div className="relative inline-flex items-center h-full" ref={langRef}>
                            <div className="group relative text-base leading-6 font-normal text-body h-full">
                                <button className="inline-flex px-2 items-center w-full gap-1.5 h-full whitespace-nowrap group-hover:text-primary hover:shadow-thick-underline" onClick={toggleLangSection}>
                                    <FormattedMessage id='navbar.language' />
                                    <DownArrow className={isLangOpen ? "scale-y-[-1]" : ""} />
                                </button>
                                {isLangOpen && (
                                    <div className="origin-top-right absolute right-0 top-12 w-max rounded-lg bg-background border-[1px] border-primary z-10">
                                        <div className="grid gap-1 px-2 py-4" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            {locales.map(locale => {
                                                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                                const isActive = document.documentElement.lang === locale.code
                                                return (
                                                    <button
                                                        className={`leading-5 ${isActive ? "text-primary" : "text-base"} hover:text-hover px-4 py-2`}
                                                        key={locale.code}
                                                        onClick={() => {
                                                            setLocale(locale)
                                                            toggleLangSection()
                                                        }}
                                                    >
                                                        {locale.localeName}
                                                    </button>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>


                        {/* THEME DROPDOWN (desktop + mobile) */}
                        <ThemeDropdown colorState={colorState} />

                        {/* HAMBURGER/CLOSE BUTTON (desktop + mobile) */}
                        <div className="flex items-center sm:hidden">
                            <div className="md:hidden flex items-center">
                                <button onClick={toggleMenu} className="outline-none text-body p-1.5">
                                    {isMenuOpen ? <Close /> : <Hamburger />}
                                </button>

                            </div>
                        </div>
                    </div>
                    {/* MOBILE MENU */}
                    {isMenuOpen &&
                        <div className="pt-8 flex flex-col h-full gap-10 sm:hidden">
                            <a
                                className="relative inline-flex items-center hover:text-primary w-fit hover:shadow-thick-underline focus:shadow-box shadow-underline"
                                href={REMIX_HOME_URL}
                            >
                                <div className={`text-body px-1 pt-1 leading-6 font-normal`}>
                                    <FormattedMessage id="navbar.remixProject" />
                                </div>
                            </a>

                            <DocsLink className="relative inline-flex items-center hover:text-primary w-fit hover:shadow-thick-underline focus:shadow-box">
                                <div className="text-body group-hover:text-primary px-1 pt-1 text-base leading-6 font-normal">
                                    <FormattedMessage id="navbar.documentation" />
                                </div>
                            </DocsLink>

                            <a
                                className="relative inline-flex items-center hover:text-primary w-fit hover:shadow-thick-underline focus:shadow-box"
                                href={REMIX_IDE_URL}
                            >
                                <div className="text-body group-hover:text-primary px-1 pt-1 text-base leading-6 font-normal">
                                    <FormattedMessage id="navbar.ide" />
                                </div>
                            </a>

                            {/* LEARN DROPDOWN MENU */}
                            <div className="inline-flex items-center h-full" ref={learnRef}>
                                <div className="relative px-1 pt-1 text-base leading-6 font-normal text-body h-full">
                                    <span className="inline-flex items-center w-full gap-1.5 h-full text-primary font-bold uppercase">
                                        <FormattedMessage id='navbar.learn' />
                                    </span>
                                    <div className={`relative top-0 rounded my-8 pl-4 flex flex-col gap-8`}>
                                        <a href={LEARNETH_PLUGIN_TUTORIALS_URL} target="_blank" rel="noreferrer"
                                            className="relative items-center hover:text-primary w-fit hover:shadow-thick-underline focus:shadow-box"
                                        >
                                            <FormattedMessage id='navbar.tutorials' /> <NEArrow className="inline" />
                                        </a>
                                        <a href="https://www.youtube.com/channel/UCjTUPyFEr2xDGN6Cg8nKDaA" target="_blank" rel="noreferrer"
                                            className="relative items-center hover:text-primary w-fit hover:shadow-thick-underline focus:shadow-box"
                                        >
                                            <FormattedMessage id='navbar.videos' /> <NEArrow className="inline" />
                                        </a>
                                        <a href="https://medium.com/remix-ide" target="_blank" rel="noreferrer"
                                            className="relative items-center hover:text-primary w-fit hover:shadow-thick-underline focus:shadow-box"
                                        >
                                            <FormattedMessage id='navbar.articles' /> <NEArrow className="inline" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* LANGUAGE DROPDOWN MENU */}
                            <div className="inline-flex items-center">
                                <div className="relative px-1 pt-1 text-base leading-6 font-normal text-gray hover:cursor-pointer">
                                    <div className="inline-flex w-full gap-1.5 " onClick={toggleLangSection}>
                                        <FormattedMessage id='navbar.language' /> <DownArrow className={isLangOpen ? "scale-y-[-1]" : ""} />
                                    </div>
                                    {isLangOpen && <div className={`absolute top-8 border border-[#D9D9D9] rounded z-10 w-32 pl-4 py-6 flex flex-col gap-4 bg-white`}>
                                        {locales.map(locale => {
                                            // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                            return (
                                                <button
                                                    className="text-gray text-base hover:text-blue hover:cursor-pointer"
                                                    key={locale.code}
                                                    onClick={() => {
                                                        setLocale(locale)
                                                        toggleLangSection()
                                                    }}
                                                >
                                                    {locale.localeName}
                                                </button>
                                            )
                                        })}
                                    </div>}
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
