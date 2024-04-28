import React, { useEffect, useRef, useState } from 'react';
import { useScrollSection } from "../../scroll-section";
import { sectionId } from "../../constants";

const SubNavbar = () => {
    const ref = useRef();
    const startSection = useScrollSection(sectionId.start)
    const pluginsSection = useScrollSection(sectionId.plugins)
    const librariesSection = useScrollSection(sectionId.libraries)
    const eventsSection = useScrollSection(sectionId.events)
    const rewardsSection = useScrollSection(sectionId.rewards)
    const teamSection = useScrollSection(sectionId.team)

    const [isLearnOpen, setLearnOpen] = useState(false);

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

    return (
        <div className={`hidden sm:block font-helvetica px-8 sticky w-full top-[5.5rem] z-10`}>
            <div className="mx-auto py-0 px-3 w-fit justify-center rounded-2xl border-[1px] border-magenta bg-white overflow-hidden shadow-menu">
                <div className="hidden sm:flex sm:flex-row sm:gap-8	">
                    <div
                        onClick={startSection.onClick}
                        className="relative inline-flex hover:cursor-pointer items-center"
                    >
                        <div
                            className={`${startSection.selected ? "text-blue" : "text-gray"} px-1 py-1 text-base leading-6 font-normal`}>
                            Start
                        </div>
                        <div className={`${startSection.selected ? "block" : "hidden"} bottom-0 absolute w-full h-0.5 bg-blue`}></div>
                    </div>
                    <div onClick={pluginsSection.onClick}
                        className="relative inline-flex hover:cursor-pointer items-center"
                    >
                        <div
                            className={`${pluginsSection.selected ? "text-blue " : "text-gray"} px-1 py-1 text-base leading-6 font-normal`}>
                            Plugins
                        </div>
                        <div
                            className={`${pluginsSection.selected ? "block" : "hidden"} bottom-0 absolute w-full h-0.5 rounded-top bg-blue`}></div>
                    </div>
                    <div
                        onClick={librariesSection.onClick}
                        className="relative inline-flex hover:cursor-pointer items-center"
                    >
                        <div
                            className={`${librariesSection.selected ? "text-blue " : "text-gray"} px-1 py-1 text-base leading-6 font-normal`}>
                            Libraries
                        </div>
                        <div
                            className={`${librariesSection.selected ? "block" : "hidden"} bottom-0 absolute w-full h-0.5 bg-blue`}></div>
                    </div>
                    <div onClick={eventsSection.onClick}
                        className="relative inline-flex hover:cursor-pointer items-center">
                        <div
                            className={`${eventsSection.selected ? "text-blue " : "text-gray"} px-1 py-1 text-base leading-6 font-normal`}>
                            Events
                        </div>
                        <div
                            className={`${eventsSection.selected ? "block" : "hidden"} bottom-0 absolute w-full h-0.5 bg-blue`}></div>
                    </div>
                    <div onClick={rewardsSection.onClick}
                        className="relative inline-flex hover:cursor-pointer items-center">
                        <div
                            className={`${rewardsSection.selected ? "text-blue " : "text-gray"} inline-flex hover:cursor-pointer items-center px-1 py-1 text-base leading-6 font-normal`}>
                            Rewards
                        </div>
                        <div
                            className={`${rewardsSection.selected ? "block" : "hidden"} bottom-0 absolute w-full h-0.5 bg-blue`}></div>
                    </div>
                    <div
                        onClick={teamSection.onClick}
                        className="relative inline-flex hover:cursor-pointer items-center">
                        <div
                            className={`${teamSection.selected ? "text-blue " : "text-gray"} inline-flex hover:cursor-pointer items-center px-1 py-1 text-base leading-6 font-normal`}>
                            Team
                        </div>
                        <div
                            className={`${teamSection.selected ? "block" : "hidden"} bottom-0 absolute w-full h-0.5 bg-blue`}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubNavbar;
