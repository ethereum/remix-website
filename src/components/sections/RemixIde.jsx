import React from "react";
import { FormattedMessage } from "react-intl";

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
                            <h2 className="text-4xl md:text-5xl font-latoBold pb-6"><FormattedMessage id="ide.startHere" /></h2>
                            <p className="
                                font-sfProRegular
                                text-bodyLight
                                text-lg">
                                <FormattedMessage id="ide.text1" />
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-10 gap-y-6 md:gap-x-6 md:mx-4">
                        <a href="https://remix.ethereum.org/" target="_blank" rel="noreferrer">
                            <div
                                className="bg-background rounded-lg border-bodyLight border py-6 px-4 h-80 hover:border-primary relative group">
                                <h4 className="text-xl pb-1 text-primary font-latoBold"><FormattedMessage id="ide.onlineIDE" /></h4>
                                <p className="text-sm text-bodyLight font-sfProSemiBold pb-4"><FormattedMessage id="ide.webBased" /></p>
                                <p className="text-sm text-bodyLight font-sfProRegular pb-4"><FormattedMessage id="ide.text2" /></p>
                                <div className="flex absolute bottom-6 content-center">
                                    <p className="text-sm text-primary font-sfProRegular mr-3.5"><FormattedMessage id="ide.startCoding" /></p>
                                    <RightArrow className="invisible group-hover:visible text-primary" alt="arrow"/>
                                </div>
                            </div>
                        </a>
                        <a href="https://github.com/ethereum/remix-desktop/releases" target="_blank" rel="noreferrer">
                            <div
                                className="bg-background rounded-lg border-bodyLight border py-6 px-4 h-80 hover:border-primary relative group">
                                <h4 className="text-xl pb-1 text-primary font-latoBold"><FormattedMessage id="ide.desktopIDE" /></h4>
                                <p className="text-sm text-bodyLight font-sfProSemiBold pb-4"><FormattedMessage id="ide.electronApp" /></p>
                                <p className="text-sm text-bodyLight font-sfProRegular pb-4"><FormattedMessage id="ide.text3" /></p>
                                <div className="flex absolute bottom-6 content-center">
                                    <p className="text-sm text-primary font-sfProRegular mr-3.5"><FormattedMessage id="ide.getDesktopApp" /></p>
                                    <RightArrow className="invisible group-hover:visible text-primary" alt="arrow"/>
                                </div>
                            </div>
                        </a>
                        <a href="https://marketplace.visualstudio.com/items?itemName=RemixProject.ethereum-remix" target="_blank" rel="noreferrer">
                            <div
                                className="bg-background rounded-lg border-bodyLight border py-6 px-4 h-80 hover:border-primary relative group">
                                <h4 className="text-xl pb-1 text-primary font-latoBold">Ethereum Remix</h4>
                                <p className="text-sm text-bodyLight font-sfProSemiBold pb-4"><FormattedMessage id="ide.vscodeExtensions" /></p>
                                <p className="text-sm text-bodyLight font-sfProRegular pb-4"><FormattedMessage id="ide.text4" /></p>
                                <div className="flex absolute bottom-6 content-center">
                                    <p className="text-sm text-primary font-sfProRegular mr-3.5"><FormattedMessage id="ide.installVSCodeExtension" /></p>
                                    <RightArrow className="invisible group-hover:visible text-primary" alt="arrow"/>
                                </div>
                            </div>
                        </a>
                        <a href="https://github.com/ethereum/remix-project/tree/master/libs/remixd" target="_blank"
                           rel="noreferrer">
                            <div
                                className="bg-background rounded-lg border-bodyLight border py-6 px-4 h-80 hover:border-primary relative group">
                                <h4 className="text-xl pb-1 text-primary font-latoBold">Remixd</h4>
                                <p className="text-sm text-bodyLight font-sfProSemiBold pb-4"><FormattedMessage id="ide.ourCliTool" /></p>
                                <p className="text-sm text-bodyLight font-sfProRegular pb-4"><FormattedMessage id="ide.text5" /></p>
                                <div className="flex absolute bottom-6 content-center">
                                    <p className="text-sm text-primary font-sfProRegular mr-3.5"><FormattedMessage id="ide.openCliTool" /></p>
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
