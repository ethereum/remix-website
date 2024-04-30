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
            <div className="mx-auto p-0.25 w-fit justify-center rounded-lg border-2 border-blue bg-white bg-sub-nav overflow-hidden">
                <div className="hidden sm:flex flex-row gap-1 p-0.5">
                    <button onClick={startSection.onClick}
                        className="relative inline-flex hover:cursor-pointer items-center h-[2.25rem]"
                    >
                        <div className={`${startSection.selected ? "block" : "hidden"} inset-0 absolute bg-white rounded-md`} />
                        <div
                            className={`${startSection.selected ? "text-blue" : "text-black"} px-4 py-1 text-base leading-6 font-normal z-10`}>
                            Start
                        </div>
                    </button>
                    <button onClick={pluginsSection.onClick}
                        className="relative inline-flex hover:cursor-pointer items-center h-[2.25rem]"
                    >
                        <div className={`${pluginsSection.selected ? "block" : "hidden"} inset-0 absolute bg-white rounded-md`} />
                        <div
                            className={`${pluginsSection.selected ? "text-blue" : "text-black"} px-4 py-1 text-base leading-6 font-normal z-10`}>
                            Plugins
                        </div>
                    </button>
                    <button onClick={librariesSection.onClick}
                        className="relative inline-flex hover:cursor-pointer items-center h-[2.25rem]"
                    >
                        <div className={`${librariesSection.selected ? "block" : "hidden"} inset-0 absolute bg-white rounded-md`} />
                        <div
                            className={`${librariesSection.selected ? "text-blue" : "text-black"} px-4 py-1 text-base leading-6 font-normal z-10`}>
                            Libraries
                        </div>
                    </button>
                    <button onClick={eventsSection.onClick} className="relative inline-flex hover:cursor-pointer items-center h-[2.25rem]">
                        <div className={`${eventsSection.selected ? "block" : "hidden"} inset-0 absolute bg-white rounded-md`} />
                        <div
                            className={`${eventsSection.selected ? "text-blue" : "text-black"} px-4 py-1 text-base leading-6 font-normal z-10`}>
                            Events
                        </div>
                    </button>
                    <button onClick={rewardsSection.onClick} className="relative inline-flex hover:cursor-pointer items-center h-[2.25rem]">
                        <div className={`${rewardsSection.selected ? "block" : "hidden"} inset-0 absolute bg-white rounded-md`} />
                        <div
                            className={`${rewardsSection.selected ? "text-blue" : "text-black"} inline-flex hover:cursor-pointer items-center px-4 py-1 text-base leading-6 font-normal z-10`}>
                            Rewards
                        </div>
                    </button>
                    <button onClick={teamSection.onClick} className="relative inline-flex hover:cursor-pointer items-center h-[2.25rem]">
                        <div className={`${teamSection.selected ? "block" : "hidden"} inset-0 absolute bg-white rounded-md`} />
                        <div
                            className={`${teamSection.selected ? "text-blue" : "text-black"} inline-flex hover:cursor-pointer items-center px-4 py-1 text-base leading-6 font-normal z-10`}>
                            Team
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SubNavbar;
