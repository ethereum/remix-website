import React, {useEffect, useRef, useState} from 'react';
import { FormattedMessage } from 'react-intl';
import logo from "../../assets/images/remix-logo.svg";
import downArrow from "../../assets/images/down-arrow.svg";
import upArrow from "../../assets/images/up-arrow.svg";
import {useScrollSection} from "../../scroll-section";
import {sectionId} from "../../constants";

const Navbar = ({ locales, onSelectLocale }) => {
    const ref = useRef();
    const aboutSection = useScrollSection(sectionId.about)
    const ideSection = useScrollSection(sectionId.ide)
    const pluginsSection = useScrollSection(sectionId.plugins)
    const librariesSection = useScrollSection(sectionId.libraries)
    const eventsSection = useScrollSection(sectionId.events)
    const rewardsSection = useScrollSection(sectionId.rewards)
    const teamSection = useScrollSection(sectionId.team)

    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isLearnOpen, setLearnOpen] = useState(false);
    const [isLangOpen, setLangOpen] = useState(false);

    const openMenu = () => {
        return setMenuOpen(current => !current)
    }

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

    const toggleLearnSection = () => {
        return setLearnOpen(current => !current)
    }

    const toggleLangSection = () => {
        return setLangOpen(current => !current)
    }

    const navigateToSection = (section) => {
        openMenu()
        return section
    }

    return (
        <>
            <div
                className={`${isMenuOpen ? "h-full" : "shadow-menu"} px-6 fixed w-full top-0 z-10 bg-white  md:px-[6.2rem]`}>
                <div className="flex h-24 md:h-[4.5rem]">
                    <div className="flex justify-between w-full">
                        <div className="flex flex-shrink-0 items-center">
                            <img
                                className={`${isMenuOpen ? "hidden" : ""} h-8 w-auto block`}
                                src={logo}
                                alt="Your Company"
                            />
                        </div>
                        <div className="hidden sm:flex sm:flex-row sm:gap-8	">
                            <div onClick={aboutSection.onClick}
                                 className=" relative inline-flex items-center">
                                <div className={`${aboutSection.selected ? "text-blue" : "text-gray"}  hover:cursor-pointer
                                                  px-1 pt-1 text-base leading-6 font-normal `}>
                                    <FormattedMessage id='navbar.about' />
                                </div>
                                <div
                                    className={`${aboutSection.selected ? "block" : "hidden"} bottom-0 absolute w-full h-1 rounded bg-blue`}></div>
                            </div>
                            <div className="inline-flex items-center" ref={ref}>
                                <div className="relative px-1 pt-1 text-base leading-6 font-normal text-gray hover:cursor-pointer">
                                    <div className="inline-flex w-full gap-1.5 " onClick={toggleLearnSection}>
                                        <FormattedMessage id='navbar.learn' />
                                        {isLearnOpen &&
                                            <img src={upArrow} alt=""/>
                                        }
                                        {!isLearnOpen &&
                                            <img src={downArrow} alt=""/>
                                        }
                                    </div>
                                    { isLearnOpen &&
                                            <div className={`absolute top-8 border border-[#D9D9D9] rounded z-10 w-52 pl-4 py-6 flex flex-col gap-4 bg-white`}>
                                                <a href="https://remix-ide.readthedocs.io/en/latest/index.html"
                                                   target="_blank" rel="noreferrer"
                                                   className="text-gray text-base hover:text-blue hover:cursor-pointer">
                                                    <FormattedMessage id='navbar.documentation' />
                                                </a>
                                                <a href="https://remix.ethereum.org/?#activate=LearnEth"
                                                   target="_blank" rel="noreferrer"
                                                   className="text-gray text-base hover:text-blue hover:cursor-pointer">
                                                    <FormattedMessage id='navbar.learnEth' />
                                                </a>
                                                <a href="https://www.youtube.com/channel/UCjTUPyFEr2xDGN6Cg8nKDaA"
                                                   target="_blank" rel="noreferrer"
                                                   className="text-gray text-base  hover:text-blue hover:cursor-pointer">
                                                    <FormattedMessage id='navbar.videos' />
                                                </a>
                                                <a href="https://medium.com/remix-ide"
                                                   target="_blank" rel="noreferrer"
                                                   className="text-gray text-base hover:text-blue hover:cursor-pointer">
                                                    <FormattedMessage id='navbar.articles' />
                                                </a>
                                            </div>
                                    }
                                </div>
                            </div>
                            <div
                                onClick={ideSection.onClick}
                                className="relative inline-flex hover:cursor-pointer items-center"
                            >
                                <div
                                    className={`${ideSection.selected ? "text-blue" : "text-gray"} px-1 pt-1 text-base leading-6 font-normal`}>
                                    IDE

                                </div>
                                <div
                                    className={`${ideSection.selected ? "block" : "hidden"} bottom-0 absolute w-full h-1 rounded bg-blue`}></div>

                            </div>
                            <div onClick={pluginsSection.onClick}
                                 className="relative inline-flex hover:cursor-pointer items-center"
                            >
                                <div
                                    className={`${pluginsSection.selected ? "text-blue " : "text-gray"} px-1 pt-1 text-base leading-6 font-normal`}>
                                    <FormattedMessage id='navbar.plugins' />
                                </div>
                                <div
                                    className={`${pluginsSection.selected ? "block" : "hidden"} bottom-0 absolute w-full h-1 rounded bg-blue`}></div>
                            </div>
                            <div
                                onClick={librariesSection.onClick}
                                className="relative inline-flex hover:cursor-pointer items-center"
                            >
                                <div
                                    className={`${librariesSection.selected ? "text-blue " : "text-gray"} px-1 pt-1 text-base leading-6 font-normal`}>
                                    <FormattedMessage id='navbar.libraries' />
                                </div>
                                <div
                                    className={`${librariesSection.selected ? "block" : "hidden"} bottom-0 absolute w-full h-1 rounded bg-blue`}></div>

                            </div>
                            <div onClick={eventsSection.onClick}
                                 className="relative inline-flex hover:cursor-pointer items-center">

                                <div
                                    className={`${eventsSection.selected ? "text-blue " : "text-gray"} px-1 pt-1 text-base leading-6 font-normal`}>
                                    <FormattedMessage id='navbar.events' />
                                </div>
                                <div
                                    className={`${eventsSection.selected ? "block" : "hidden"} bottom-0 absolute w-full h-1 rounded bg-blue`}></div>
                            </div>
                            <div onClick={rewardsSection.onClick}
                                 className="relative inline-flex hover:cursor-pointer items-center">
                                <div
                                    className={`${rewardsSection.selected ? "text-blue " : "text-gray"} inline-flex hover:cursor-pointer items-center px-1 pt-1 text-base leading-6 font-normal`}>
                                    <FormattedMessage id='navbar.rewards' />
                                </div>
                                <div
                                    className={`${rewardsSection.selected ? "block" : "hidden"} bottom-0 absolute w-full h-1 rounded bg-blue`}></div>
                            </div>
                            <div
                                onClick={teamSection.onClick}
                                className="relative inline-flex hover:cursor-pointer items-center">
                                <div
                                    className={`${teamSection.selected ? "text-blue " : "text-gray"} inline-flex hover:cursor-pointer items-center px-1 pt-1 text-base leading-6 font-normal`}>
                                    <FormattedMessage id='navbar.team' />
                                </div>
                                <div
                                    className={`${teamSection.selected ? "block" : "hidden"} bottom-0 absolute w-full h-1 rounded bg-blue`}></div>
                            </div>
                            <div className="inline-flex items-center">
                                <div className="relative px-1 pt-1 text-base leading-6 font-normal text-gray hover:cursor-pointer">
                                    <div className="inline-flex w-full gap-1.5 " onClick={toggleLangSection}>
                                        <FormattedMessage id='navbar.language' />
                                        {isLangOpen &&
                                            <img src={upArrow} alt=""/>
                                        }
                                        {!isLangOpen &&
                                            <img src={downArrow} alt=""/>
                                        }
                                    </div>
                                    {isLangOpen && <div className={`absolute top-8 border border-[#D9D9D9] rounded z-10 w-32 pl-4 py-6 flex flex-col gap-4 bg-white`}>
                                        {locales.map(locale => {
                                            return (
                                                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                                <a
                                                    className="text-gray text-base hover:text-blue hover:cursor-pointer"
                                                    key={locale.code}
                                                    onClick={() => {
                                                        onSelectLocale(locale)
                                                        toggleLangSection()
                                                    }}
                                                >
                                                    {locale.localeName}
                                                </a>
                                            )
                                        })}
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center sm:hidden">
                        <div className="md:hidden flex items-center">
                            <button onClick={openMenu} className="outline-none ">
                                {isMenuOpen &&
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 21L21 1M21 21L1 1" stroke="black" strokeLinecap="round"
                                              strokeLinejoin="round"/>
                                    </svg>

                                }
                                {!isMenuOpen &&
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1.2998 16.9668H22.6331M1.2998 0.966797H22.6331H1.2998ZM1.2998 8.9668H22.6331H1.2998Z"
                                            stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                }
                            </button>

                        </div>
                    </div>
                </div>
                {isMenuOpen &&
                    <div className="pl-14 flex flex-col h-full gap-10 sm:hidden">
                        <div onClick={() => navigateToSection(aboutSection.onClick())}
                             className={`${aboutSection.selected ? "text-blue" : "text-gray"} text-2xl font-normal  hover:cursor-pointer`}>
                            <FormattedMessage id='navbar.about' />
                        </div>
                        <div >
                            <div className={`${isLearnOpen ? "mb-6" : ""} text-2xl inline-flex gap-4  text-gray hover:cursor-pointer`}
                                 onClick={toggleLearnSection}>
                                <FormattedMessage id='navbar.learn' />
                                {isLearnOpen &&
                                    <img src={upArrow} alt=""/>
                                }
                                {!isLearnOpen &&
                                    <img src={downArrow} alt=""/>
                                }

                            </div>
                            {isLearnOpen &&
                            <div className="pl-4 flex flex-col gap-5 ">
                                    <a href="https://remix-ide.readthedocs.io/en/latest/index.html"
                                        target="_blank" rel="noreferrer"
                                        className="text-gray text-2xl hover:text-blue hover:cursor-pointer">
                                        <FormattedMessage id='navbar.documents' />
                                    </a>
                                <a href="https://remix.ethereum.org/?#activate=LearnEth"
                                    target="_blank" rel="noreferrer"
                                    className="text-gray text-2xl hover:text-blue hover:cursor-pointer">
                                    <FormattedMessage id='navbar.learnEth' />
                                </a>
                                <a href="https://www.youtube.com/channel/UCjTUPyFEr2xDGN6Cg8nKDaA"
                                    target="_blank" rel="noreferrer"
                                    className="text-gray text-2xl  hover:text-blue hover:cursor-pointer">
                                    <FormattedMessage id='navbar.videos' />
                                </a>
                                <a href="https://medium.com/remix-ide"
                                    target="_blank" rel="noreferrer"
                                    className="text-gray text-2xl hover:text-blue hover:cursor-pointer">
                                    <FormattedMessage id='navbar.articles' />
                                </a>

                            </div>
                            }

                        </div>
                        <div onClick={() => navigateToSection(ideSection.onClick())}
                             className={`${ideSection.selected ? "text-blue" : "text-gray"} text-2xl hover:cursor-pointer`}>
                            IDE
                        </div>
                        <div onClick={() => navigateToSection(pluginsSection.onClick())}
                             className={`${pluginsSection.selected ? "text-blue " : "text-gray"} text-2xl hover:cursor-pointer`}>
                            <FormattedMessage id='navbar.plugins' />
                        </div>
                        <div onClick={() => navigateToSection(librariesSection.onClick())}
                             className={`${librariesSection.selected ? "text-blue " : "text-gray"} text-2xl hover:cursor-pointer`}>
                            <FormattedMessage id='navbar.libraries' />
                        </div>
                        <div onClick={() => navigateToSection(eventsSection.onClick())}
                             className={`${eventsSection.selected ? "text-blue " : "text-gray"} text-2xl hover:cursor-pointer`}>
                            <FormattedMessage id='navbar.events' />
                        </div>
                        <div onClick={() => navigateToSection(rewardsSection.onClick())}
                             className={`${rewardsSection.selected ? "text-blue " : "text-gray"} text-2xl hover:cursor-pointer`}>
                            <FormattedMessage id='navbar.rewards' />
                        </div>
                        <div onClick={() => navigateToSection(teamSection.onClick())}
                             className={`${teamSection.selected ? "text-blue " : "text-gray"} text-2xl hover:cursor-pointer`}>
                            <FormattedMessage id='navbar.team' />
                        </div>
                        <div >
                            <div className={`${isLangOpen ? "mb-6" : ""} text-2xl inline-flex gap-4  text-gray hover:cursor-pointer`}
                                 onClick={toggleLangSection}>
                                <FormattedMessage id='navbar.language' />
                                {isLangOpen &&
                                    <img src={upArrow} alt=""/>
                                }
                                {!isLangOpen &&
                                    <img src={downArrow} alt=""/>
                                }
                            </div>
                            {isLangOpen &&
                            <div className="pl-4 flex flex-col gap-5 ">
                                {locales.map(locale => {
                                    return (
                                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                        <a
                                            className="text-gray text-2xl hover:text-blue hover:cursor-pointer"
                                            key={locale.code}
                                            onClick={() => {
                                                onSelectLocale(locale)
                                            }}
                                        >
                                            {locale.localeName}
                                        </a>
                                    )
                                })}
                            </div>
                            }
                        </div>
                    </div>
                }
            </div>
        </>

    );
};

export default Navbar;
