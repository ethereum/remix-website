import React from "react";
import { FormattedMessage } from "react-intl";
import librariesBckMobile from "../../assets/images/libraries-mobile-bck.svg";
import githubIconBlue from "../../assets/images/github-icon-blue.svg";
import {Section} from "../../scroll-section";
import {sectionId} from "../../constants";

const Libraries = () => {
    return (
        <Section id={sectionId.libraries}>

            <div className="md:bg-libraries-desktop
                bg-remix-ide-mobile
                bg-no-repeat
                bg-libraries-background-position 2xl:bg-libraries-background-position-lg">
                <img src={librariesBckMobile} className="md:hidden m-auto w-full" alt="remix-libraries"/>
                <div className="sm:container sm:m-auto pb-20 pt-10 md:py-50 mx-6">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div/>
                        <div>
                            <h1 className="font-sfProThin pb-2 md:text-8xl"><FormattedMessage id="libraries.libraries" /></h1>
                            <h2 className="text-4xl md:text-5xl font-latoBold pb-6"><FormattedMessage id="libraries.tools" /></h2>
                            <p className="font-sfProRegular text-gray text-lg mb-6">
                                <FormattedMessage id="libraries.text1" />
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 mb-6">
                                <div className="mb-6 md:mb-0">
                                    <h5 className="text-xl text-black font-latoBold pb-2">Remix Analyzer</h5>
                                    <p className="text-sm text-gray font-sfProRegular pb-2"><FormattedMessage id="libraries.text2" /></p>
                                    <div className="flex items-center">
                                        <img className="mr-2" src={githubIconBlue} alt="github"/>
                                        <a className="text-sm font-sfProRegular text-blue hover:underline"
                                           href="https://github.com/ethereum/remix-project/blob/master/libs/remix-analyzer/README.md"
                                           rel="noreferrer" target="_blank">Github</a>
                                    </div>
                                </div>
                                <div>
                                    <h5 className="text-xl text-black font-latoBold pb-2">Remix Debug</h5>
                                    <p className="text-sm text-gray font-sfProRegular pb-2"><FormattedMessage id="libraries.text3" /></p>
                                    <div className="flex items-center">
                                        <img className="mr-2" src={githubIconBlue} alt="github"/>
                                        <a className="text-sm font-sfProRegular text-blue hover:underline"
                                           href="https://github.com/ethereum/remix-project/blob/master/libs/remix-debug/README.md"
                                           rel="noreferrer" target="_blank">Github</a>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 mb-6">
                                <div className="mb-6 md:mb-0">
                                    <h5 className="text-xl text-black font-latoBold pb-2">Astwalker</h5>
                                    <p className="text-sm text-gray font-sfProRegular pb-2">
                                        <FormattedMessage id="libraries.text4" /></p>
                                    <div className="flex items-center">
                                        <img className="mr-2" src={githubIconBlue} alt="github"/>
                                        <a className="text-sm font-sfProRegular text-blue hover:underline"
                                           href="https://github.com/ethereum/remix-project/blob/master/libs/remix-astwalker/README.md"
                                           rel="noreferrer" target="_blank">Github</a>
                                    </div>
                                </div>
                                <div>
                                    <h5 className="text-xl text-black font-latoBold pb-2">Remix Lib</h5>
                                    <p className="text-sm text-gray font-sfProRegular pb-2">
                                        <FormattedMessage id="libraries.text5" />
                                    </p>
                                    <div className="flex items-center">
                                        <img className="mr-2" src={githubIconBlue} alt="github"/>
                                        <a className="text-sm font-sfProRegular text-blue hover:underline"
                                           href="https://github.com/ethereum/remix-project/blob/master/libs/remix-lib/README.md"
                                           rel="noreferrer" target="_blank">Github</a>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 mb-6">
                                <div className="mb-6 md:mb-0">
                                    <h5 className="text-xl text-black font-latoBold pb-2">Remix Solidity</h5>
                                    <p className="text-sm text-gray font-sfProRegular pb-2">
                                        <FormattedMessage id="libraries.text6" />
                                    </p>
                                    <div className="flex items-center">
                                        <img className="mr-2" src={githubIconBlue} alt="github"/>
                                        <a className="text-sm font-sfProRegular text-blue hover:underline"
                                           href="https://github.com/ethereum/remix-project/blob/master/libs/remix-solidity/README.md"
                                           rel="noreferrer" target="_blank">Github</a>
                                    </div>
                                </div>
                                <div>
                                    <h5 className="text-xl text-black font-latoBold pb-2">Remix URL Resolvers</h5>
                                    <p className="text-sm text-gray font-sfProRegular pb-2">
                                        <FormattedMessage id="libraries.text7" />
                                    </p>
                                    <div className="flex items-center">
                                        <img className="mr-2" src={githubIconBlue} alt="github"/>
                                        <a className="text-sm font-sfProRegular text-blue hover:underline"
                                           href="https://github.com/ethereum/remix-project/blob/master/libs/remix-url-resolver/README.md"
                                           rel="noreferrer" target="_blank">Github</a>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 mb-6">
                                <div className="mb-6 md:mb-0">
                                    <h5 className="text-xl text-black font-latoBold pb-2">Remix Tests</h5>
                                    <p className="text-sm text-gray font-sfProRegular pb-2">
                                        <FormattedMessage id="libraries.text8" />
                                    </p>
                                    <div className="flex items-center">
                                        <img className="mr-2" src={githubIconBlue} alt="github"/>
                                        <a className="text-sm font-sfProRegular text-blue hover:underline"
                                           href="https://github.com/ethereum/remix-project/blob/master/libs/remix-tests/README.md"
                                           rel="noreferrer" target="_blank">Github</a>
                                    </div>
                                </div>
                                <div>
                                    <h5 className="text-xl text-black font-latoBold pb-2">Remix Simulator</h5>
                                    <p className="text-sm text-gray font-sfProRegular pb-2">
                                        <FormattedMessage id="libraries.text9" />
                                    </p>
                                    <div className="flex items-center">
                                        <img className="mr-2" src={githubIconBlue} alt="github"/>
                                        <a className="text-sm font-sfProRegular text-blue hover:underline"
                                           href="https://github.com/ethereum/remix-project/blob/master/libs/remix-simulator/README.md"
                                           rel="noreferrer" target="_blank">Github</a>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                                <div className="mb-6 md:mb-0">
                                    <h5 className="text-xl text-black font-latoBold pb-2">Remix WS Templates</h5>
                                    <p className="text-sm text-gray font-sfProRegular pb-2">
                                        <FormattedMessage id="libraries.text10" />
                                    </p>
                                    <div className="flex items-center">
                                        <img className="mr-2" src={githubIconBlue} alt="github"/>
                                        <a className="text-sm font-sfProRegular text-blue hover:underline"
                                           href="https://github.com/ethereum/remix-project/blob/master/libs/remix-ws-templates/README.md"
                                           rel="noreferrer" target="_blank">Github</a>
                                    </div>
                                </div>
                                <div>
                                    <h5 className="text-xl text-black font-latoBold pb-2">Remixd</h5>
                                    <p className="text-sm text-gray font-sfProRegular pb-2">
                                        <FormattedMessage id="libraries.text11" />
                                    </p>
                                    <div className="flex items-center">
                                        <img className="mr-2" src={githubIconBlue} alt="github"/>
                                        <a className="text-sm font-sfProRegular text-blue hover:underline"
                                           href="https://github.com/ethereum/remix-project/blob/master/libs/remixd/README.md"
                                           rel="noreferrer" target="_blank">Github</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>

    )
};

export default Libraries;
