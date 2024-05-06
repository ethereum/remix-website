import React, { useEffect, useRef, useState } from 'react';
import { FormattedMessage } from 'react-intl';

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
            <div className="mx-auto p-0.25 w-fit justify-center rounded-lg border-2 border-primary bg-background bg-sub-nav overflow-hidden">
                <div className="hidden sm:flex flex-row gap-1 p-0.5">
                    <button onClick={startSection.onClick}
                        className="relative inline-flex hover:cursor-pointer items-center h-[2.25rem]"
                    >
                        <div className={`${startSection.selected ? "block" : "hidden"} inset-0 absolute bg-background rounded-md`} />
                        <div
                            className={`${startSection.selected ? "text-primary" : "text-body"} px-4 py-1 text-base leading-6 font-normal z-10`}>
                            <FormattedMessage id="subnavbar.start" />
                        </div>
                    </button>
                    <button onClick={pluginsSection.onClick}
                        className="relative inline-flex hover:cursor-pointer items-center h-[2.25rem]"
                    >
                        <div className={`${pluginsSection.selected ? "block" : "hidden"} inset-0 absolute bg-background rounded-md`} />
                        <div
                            className={`${pluginsSection.selected ? "text-primary" : "text-body"} px-4 py-1 text-base leading-6 font-normal z-10`}>
                            <FormattedMessage id="subnavbar.plugins" />
                        </div>
                    </button>
                    <button onClick={librariesSection.onClick}
                        className="relative inline-flex hover:cursor-pointer items-center h-[2.25rem]"
                    >
                        <div className={`${librariesSection.selected ? "block" : "hidden"} inset-0 absolute bg-background rounded-md`} />
                        <div
                            className={`${librariesSection.selected ? "text-primary" : "text-body"} px-4 py-1 text-base leading-6 font-normal z-10`}>
                            <FormattedMessage id="subnavbar.libraries" />
                        </div>
                    </button>
                    <button onClick={eventsSection.onClick} className="relative inline-flex hover:cursor-pointer items-center h-[2.25rem]">
                        <div className={`${eventsSection.selected ? "block" : "hidden"} inset-0 absolute bg-background rounded-md`} />
                        <div
                            className={`${eventsSection.selected ? "text-primary" : "text-body"} px-4 py-1 text-base leading-6 font-normal z-10`}>
                            <FormattedMessage id="subnavbar.events" />
                        </div>
                    </button>
                    <button onClick={rewardsSection.onClick} className="relative inline-flex hover:cursor-pointer items-center h-[2.25rem]">
                        <div className={`${rewardsSection.selected ? "block" : "hidden"} inset-0 absolute bg-background rounded-md`} />
                        <div
                            className={`${rewardsSection.selected ? "text-primary" : "text-body"} inline-flex hover:cursor-pointer items-center px-4 py-1 text-base leading-6 font-normal z-10`}>
                            <FormattedMessage id="subnavbar.rewards" />
                        </div>
                    </button>
                    <button onClick={teamSection.onClick} className="relative inline-flex hover:cursor-pointer items-center h-[2.25rem]">
                        <div className={`${teamSection.selected ? "block" : "hidden"} inset-0 absolute bg-background rounded-md`} />
                        <div
                            className={`${teamSection.selected ? "text-primary" : "text-body"} inline-flex hover:cursor-pointer items-center px-4 py-1 text-base leading-6 font-normal z-10`}>
                            <FormattedMessage id="subnavbar.team" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SubNavbar;
