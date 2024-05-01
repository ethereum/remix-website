import React from "react";
import { ReactComponent as RightArrow } from "../../assets/images/right-arrow.svg";
import remixIdeMobile from "../../assets/images/remix-ide-mobile.svg";
import {Section} from "../../scroll-section";
import {sectionId} from "../../constants";

const RemixIde = () => {
    return (
        <Section id={sectionId.start}>
            <div className="bg-color-gradient bg-no-repeat bg-remix-desktop-background-position">
                <img src={remixIdeMobile} className="md:hidden m-auto w-full" alt="remix-ide"/>
                <div className="sm:container sm:m-auto pb-20 pt-10 md:py-50 mx-6">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div>
                            <h1 className="font-sfProThin pb-2 md:text-8xl">REMIX IDE</h1>
                            <h2 className="text-4xl md:text-5xl font-latoBold pb-6">START HERE!</h2>
                            <p className="
                                font-sfProRegular
                                text-bodyLight
                                text-lg">
                                Remix IDE is a no-setup tool with a GUI for developing smart contracts.
                                Used by experts and beginners alike, Remix will get you going in double time.
                                Remix plays well with other tools, and allows for a simple deployment process
                                to the chain of your choice. Remix is famous for its visual debugger.
                                Remix is the place everyone comes to learn Ethereum.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-10 gap-y-6 md:gap-x-6 md:mx-4">
                        <a href="https://remix.ethereum.org/" target="_blank" rel="noreferrer">
                            <div
                                className="bg-background rounded-lg border-bodyLight border py-6 px-4 h-80 hover:border-primary relative group">
                                <h4 className="text-xl pb-1 text-primary font-latoBold">Remix Online IDE</h4>
                                <p className="text-sm text-bodyLight font-sfProSemiBold pb-4">Web-based DevEnvironment</p>
                                <p className="text-sm text-bodyLight font-sfProRegular pb-4">
                                    Remix Online IDE is a powerful toolset for developing, deploying,
                                    debugging, and testing Ethereum and EVM-compatible smart contracts.
                                    It requires no setup and has a flexible, intuitive user interface.
                                </p>
                                <div className="flex absolute bottom-6 content-center">
                                    <p className="text-sm text-primary font-sfProRegular mr-3.5">Start coding online</p>
                                    <RightArrow className="invisible group-hover:visible text-primary" alt="arrow"/>
                                </div>
                            </div>
                        </a>
                        <a href="https://github.com/ethereum/remix-desktop/releases" target="_blank" rel="noreferrer">
                            <div
                                className="bg-background rounded-lg border-bodyLight border py-6 px-4 h-80 hover:border-primary relative group">
                                <h4 className="text-xl pb-1 text-primary font-latoBold">Remix Desktop IDE</h4>
                                <p className="text-sm text-bodyLight font-sfProSemiBold pb-4">Electron App</p>
                                <p className="text-sm text-bodyLight font-sfProRegular pb-4">
                                    For users who prefer the performance or security of their own hard drive,
                                    Remix has a desktop app. Your files are saved directly to your computer's filesystem.
                                </p>
                                <div className="flex absolute bottom-6 content-center">
                                    <p className="text-sm text-primary font-sfProRegular mr-3.5">Get our Desktop App</p>
                                    <RightArrow className="invisible group-hover:visible text-primary" alt="arrow"/>
                                </div>
                            </div>
                        </a>
                        <a href="https://marketplace.visualstudio.com/items?itemName=RemixProject.ethereum-remix" target="_blank" rel="noreferrer">
                            <div
                                className="bg-background rounded-lg border-bodyLight border py-6 px-4 h-80 hover:border-primary relative group">
                                <h4 className="text-xl pb-1 text-primary font-latoBold">Ethereum Remix</h4>
                                <p className="text-sm text-bodyLight font-sfProSemiBold pb-4">VSCode Extension</p>
                                <p className="text-sm text-bodyLight font-sfProRegular pb-4">
                                    We’ve brought Remix to VSCode, offering access to Remix
                                    tools in an environment many users already know.
                                </p>
                                <div className="flex absolute bottom-6 content-center">
                                    <p className="text-sm text-primary font-sfProRegular mr-3.5">Install VSCode
                                        Extension</p>
                                    <RightArrow className="invisible group-hover:visible text-primary" alt="arrow"/>
                                </div>
                            </div>
                        </a>
                        <a href="https://github.com/ethereum/remix-project/tree/master/libs/remixd" target="_blank"
                           rel="noreferrer">
                            <div
                                className="bg-background rounded-lg border-bodyLight border py-6 px-4 h-80 hover:border-primary relative group">
                                <h4 className="text-xl pb-1 text-primary font-latoBold">Remixd</h4>
                                <p className="text-sm text-bodyLight font-sfProSemiBold pb-4">Our CLI Tool</p>
                                <p className="text-sm text-bodyLight font-sfProRegular pb-4">
                                    Remixd connects Remix Online IDE to a folder on your hard drive,
                                    offering all the advantages of file storage on your computer’s filesystem.
                                </p>
                                <div className="flex absolute bottom-6 content-center">
                                    <p className="text-sm text-primary font-sfProRegular mr-3.5">Open CLI Tool</p>
                                    <RightArrow className="invisible group-hover:visible text-primary" alt="arrow"/>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default RemixIde;
