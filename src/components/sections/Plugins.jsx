import React, { useState } from "react";
import { FormattedMessage } from "react-intl";

import pluginsMobileBck from "../../assets/images/plugins-mobile-bck.svg";

import { ReactComponent as DocumentIcon } from "../../assets/images/documentation-icon.svg";
import { ReactComponent as GithubIcon } from "../../assets/images/github-icon.svg";
import { ReactComponent as SolidityLogo } from "../../assets/images/solidity-logo.svg";
import { ReactComponent as EtherScanIcon } from "../../assets/images/etherscan-icon.svg";
import { ReactComponent as TwoDocumentsIcon } from "../../assets/images/documents-icon.svg";
import { ReactComponent as BugIcon } from "../../assets/images/bugs-icon.svg";
import { ReactComponent as ChartIcon } from "../../assets/images/chart-icon.svg";
import { ReactComponent as TickIcon } from "../../assets/images/ticks-icon.svg";
import { ReactComponent as VerifiedIcon } from "../../assets/images/verified-icon.svg";
import { ReactComponent as BracketIcon } from "../../assets/images/sourcify.svg"
import { ReactComponent as SkyIcon } from "../../assets/images/starknet.svg"

// TODO: Convert this to be color-mode responsive:
import { ReactComponent as ContractIcon } from "../../assets/images/contract-deployer.svg";
import { ReactComponent as FaceIcon } from "../../assets/images/zokrates.svg"

import { Section } from "../../scroll-section";
import { sectionId } from "../../constants";
import DocsLink from "../ui/DocsLink";

const Plugins = ({ colorMode }) => {
    const [showCorePlugins, setShowCorePlugins] = useState(true);
    const [showAdditionalPlugins, setShowAdditionalPlugins] = useState(false);

    const handelShowAdditionalPlugins = () => {
        setShowCorePlugins(false);
        setShowAdditionalPlugins(true)
    }

    const handleShowCorePlugins = () => {
        setShowAdditionalPlugins(false)
        setShowCorePlugins(true)
    }

    return (
        <Section id={sectionId.plugins}>
            <div className="md:bg-plugins-desktop bg-no-repeat bg-plugins-background-position">
                <img src={pluginsMobileBck} className="md:hidden m-auto w-full" alt="plugins"/>
                <div className="sm:container sm:m-auto pb-20 pt-10 md:py-50 mx-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24">
                        <div>
                            <h1 className="font-sfProThin pb-2 md:text-8xl"><FormattedMessage id="plugins.plugins" /></h1>
                            <h2 className="text-4xl md:text-5xl font-latoBold pb-6"><FormattedMessage id="plugins.everything" /></h2>
                            <p className="
                                font-sfProRegular
                                text-bodyLight
                                text-lg pb-6">
                                <FormattedMessage id="plugins.text1" />
                            </p>
                            <p className="
                                font-sfProRegular
                                text-bodyLight
                                text-lg pb-6">
                                <FormattedMessage id="plugins.text2" />
                            </p>
                        </div>
                    </div>
                    <div className="mt-10 mb-8">
                        <button className={
                            !showAdditionalPlugins ? `border
                        border-solid
                        border-primary
                        text-background text-sm
                        bg-primary
                        px-4 py-1.5 mr-4
                        font-sfProSemiBold
                        rounded-[18.5px]` : `text-bodyLight text-sm font-sfProSemiBold mr-4`}
                                onClick={handleShowCorePlugins}>
                            <FormattedMessage id="plugins.core" />
                        </button>
                        <button className={
                            !showCorePlugins ? `border
                        border-solid
                        border-primary
                        text-background text-sm
                        bg-primary
                        px-4 py-1.5 mr-4
                        font-sfProSemiBold
                        rounded-[18.5px]` : `text-bodyLight text-sm font-sfProSemiBold`}
                                onClick={handelShowAdditionalPlugins}>
                            <FormattedMessage id="plugins.additional" />
                        </button>
                    </div>
                    {showCorePlugins &&
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <DocsLink relativePath="compile.html">
                                    <div
                                        className="bg-background border border-bodyLight border-solid rounded-lg p-4 min-h-[13.75rem] hover:border-body relative">
                                        <div className="flex justify-between items-start">
                                            <SolidityLogo className="mb-3 text-body" alt="Solidity"/>
                                            <div
                                                className="relative group inline-block underline duration-300">
                                                <VerifiedIcon alt="✓"/>
                                                <span
                                                    className="absolute hidden
                                                    group-hover:block -right-12 -top-2 -translate-y-full h-5 py-1 px-3 rounded-[18.5px]
                                                    z-10 w-32 text-center
                                                    bg-bodyLight break-normal text-background text-xxs font-sfProSemiBold after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2">Maintained by Remix</span>
                                            </div>
                                        </div>
                                        <h5 className="font-latoBold text-body text-xl pb-4"><FormattedMessage id="plugins.solidityCompiler" /></h5>

                                        <p className="font-sfProRegular text-bodyLight text-sm">
                                            <FormattedMessage id="plugins.text3" />
                                        </p>
                                    </div>
                                </DocsLink>
                                <DocsLink relativePath="run.html">
                                    <div
                                        className="bg-background border border-bodyLight border-solid rounded-lg p-4 min-h-[13.75rem] hover:border-body relative">
                                        <div className="flex justify-between items-start">
                                            <EtherScanIcon alt="arrows" className="mb-3 text-body" />
                                            <div
                                                className="group relative inline-block text-primary-500 underline hover:text-red-500 duration-300">
                                                <VerifiedIcon alt="✓"/>
                                                <span
                                                    className="absolute hidden
                                                    group-hover:block -right-12 -top-2 -translate-y-full h-5 py-1 px-3 rounded-[18.5px]
                                                    z-10 w-32 text-center
                                                    bg-bodyLight break-normal text-background text-xxs font-sfProSemiBold after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2">Maintained by Remix</span>
                                            </div>
                                        </div>
                                        <h5 className="font-latoBold text-body text-xl pb-4"><FormattedMessage id="plugins.deployRun" /></h5>
                                        <p className="font-sfProRegular text-bodyLight text-sm">
                                            <FormattedMessage id="plugins.text4" />
                                        </p>
                                    </div>
                                </DocsLink>
                                <DocsLink relativePath="file_explorer.html">
                                    <div
                                        className="bg-background border border-bodyLight border-solid rounded-lg p-4 min-h-[13.75rem] hover:border-body relative">
                                        <div className="flex justify-between items-start">
                                            <TwoDocumentsIcon alt="arrows" className="mb-3 text-body"/>
                                            <div
                                                className="group relative inline-block text-primary-500 underline hover:text-red-500 duration-300">
                                                <VerifiedIcon alt="✓"/>
                                                <span
                                                    className="absolute hidden
                                                    group-hover:block -right-12 -top-2 -translate-y-full h-5 py-1 px-3 rounded-[18.5px]
                                                    z-10 w-32 text-center
                                                    bg-bodyLight break-normal text-background text-xxs font-sfProSemiBold after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2">Maintained by Remix</span>
                                            </div>
                                        </div>
                                        <h5 className="font-latoBold text-body text-xl pb-4"><FormattedMessage id="plugins.fileExplorer" /></h5>
                                        <p className="font-sfProRegular text-bodyLight text-sm">
                                            <FormattedMessage id="plugins.text5" />
                                        </p>
                                    </div>
                                </DocsLink>
                                <DocsLink relativePath="debugger.html">
                                    <div
                                        className="bg-background border border-bodyLight border-solid rounded-lg p-4 min-h-[13.75rem] hover:border-body relative">
                                        <div className="flex justify-between items-start">
                                            <BugIcon alt="bug" className="mb-3 text-body"/>
                                            <div
                                                className="group relative inline-block text-primary-500 underline hover:text-red-500 duration-300">
                                                <VerifiedIcon alt="✓"/>
                                                <span
                                                    className="absolute hidden
                                                    group-hover:block -right-12 -top-2 -translate-y-full h-5 py-1 px-3 rounded-[18.5px]
                                                    z-10 w-32 text-center
                                                    bg-bodyLight break-normal text-background text-xxs font-sfProSemiBold after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2">Maintained by Remix</span>
                                            </div>
                                        </div>
                                        <h5 className="font-latoBold text-body text-xl pb-4"><FormattedMessage id="plugins.debugger" /></h5>
                                        <p className="font-sfProRegular text-bodyLight text-sm">
                                            <FormattedMessage id="plugins.text6" />
                                        </p>
                                    </div>
                                </DocsLink>
                                <DocsLink relativePath="static_analysis.html">
                                    <div
                                        className="bg-background border border-bodyLight border-solid rounded-lg p-4 min-h-[13.75rem] hover:border-body relative">
                                        <div className="flex justify-between items-start">
                                            <ChartIcon alt="chart" className="mb-3 text-body"/>
                                            <div
                                                className="group relative inline-block text-primary-500 underline hover:text-red-500 duration-300">
                                                <VerifiedIcon alt="✓"/>
                                                <span
                                                    className="absolute hidden
                                                    group-hover:block -right-12 -top-2 -translate-y-full h-5 py-1 px-3 rounded-[18.5px]
                                                    z-10 w-32 text-center
                                                    bg-bodyLight break-normal text-background text-xxs font-sfProSemiBold after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2">Maintained by Remix</span>
                                            </div>
                                        </div>
                                        <h5 className="font-latoBold text-body text-xl pb-4"><FormattedMessage id="plugins.solidityAnalyzers" /></h5>
                                        <p className="font-sfProRegular text-bodyLight text-sm">
                                        <FormattedMessage id="plugins.text7" />
                                        </p>
                                    </div>
                                </DocsLink>
                                <DocsLink relativePath="unittesting.html">
                                    <div
                                        className="bg-background border border-bodyLight border-solid rounded-lg p-4 min-h-[13.75rem] hover:border-body relative">
                                        <div className="flex justify-between items-start">
                                            <TickIcon alt="arrows" className="mb-3 text-body"/>
                                            <div
                                                className="group relative inline-block text-primary-500 underline hover:text-red-500 duration-300">
                                                <VerifiedIcon alt="✓"/>
                                                <span
                                                    className="absolute hidden
                                                    group-hover:block -right-12 -top-2 -translate-y-full h-5 py-1 px-3 rounded-[18.5px]
                                                    z-10 w-32 text-center
                                                    bg-bodyLight break-normal text-background text-xxs font-sfProSemiBold after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2">Maintained by Remix</span>
                                            </div>
                                        </div>
                                        <h5 className="font-latoBold text-body text-xl pb-4"><FormattedMessage id="plugins.solidityUnitTesting" /></h5>
                                        <p className="font-sfProRegular text-bodyLight text-sm">
                                            <FormattedMessage id="plugins.text8" />
                                        </p>
                                    </div>
                                </DocsLink>
                                <DocsLink relativePath="remixd.html">
                                    <div
                                        className="bg-background border border-bodyLight border-solid rounded-lg p-4 min-h-[13.75rem] hover:border-body relative">
                                        <div className="flex justify-between items-start">
                                            <TickIcon alt="arrows" className="mb-3 text-body"/>
                                            <div
                                                className="group relative inline-block text-primary-500 underline hover:text-red-500 duration-300">
                                                <VerifiedIcon alt="✓"/>
                                                <span
                                                    className="absolute hidden
                                                    group-hover:block -right-12 -top-2 -translate-y-full h-5 py-1 px-3 rounded-[18.5px]
                                                    z-10 w-32 text-center
                                                    bg-bodyLight break-normal text-background text-xxs font-sfProSemiBold after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2">Maintained by Remix</span>
                                            </div>
                                        </div>
                                        <h5 className="font-latoBold text-body text-xl pb-4">Remixd</h5>
                                        <p className="font-sfProRegular text-bodyLight text-sm">
                                        <FormattedMessage id="plugins.text9" />
                                        </p>
                                    </div>
                                </DocsLink>

                                <div className="p-4">
                                    <DocsLink relativePath={"plugin_list.html#core-plugins"} className="text-xl text-body font-latoBold mt-4 md:mt-24 block hover:underline">
                                        <FormattedMessage id="plugins.viewAll" />
                                    </DocsLink>
                                    <p className="font-sfProRegular text-bodyLight text-sm"><FormattedMessage id="plugins.text10" /></p>
                                </div>
                            </div>
                        </div>
                    }
                    {showAdditionalPlugins &&
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                <a href="https://github.com/ethereum/sourcify" target="_blank" rel="noreferrer">
                                    <div
                                        className="bg-background border border-bodyLight border-solid rounded-lg p-4 min-h-[13.75rem] hover:border-body relative">
                                        <div className="flex justify-between items-start">
                                            <BracketIcon alt="arrows" className="mb-3 text-body"/>
                                            <div
                                                className="group relative inline-block text-primary-500 underline hover:text-red-500 duration-300">
                                                <VerifiedIcon alt="✓"/>
                                                <span
                                                    className="absolute hidden
                                                    group-hover:block -right-12 -top-2 -translate-y-full h-5 py-1 px-3 rounded-[18.5px]
                                                    z-10 w-32 text-center
                                                    bg-bodyLight break-normal text-background text-xxs font-sfProSemiBold after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2">Maintained by Remix</span>
                                            </div>
                                        </div>
                                        <h5 className="font-latoBold text-body text-xl pb-4">Sourcify</h5>
                                        <p className="font-sfProRegular text-bodyLight text-sm">
                                            <FormattedMessage id="plugins.text11" />
                                        </p>
                                    </div>
                                </a>
                                <a href="https://remix-etherscan-plugin.readthedocs.io/en/latest/" target="_blank" rel="noreferrer">
                                    <div
                                        className="bg-background border border-bodyLight border-solid rounded-lg p-4 min-h-[13.75rem] hover:border-body relative">
                                        <div className="flex justify-between items-start">
                                            <EtherScanIcon alt="etherscan" className="mb-3 text-body"/>
                                            <p className="bg-success
                                text-background
                                text-xxs
                                font-sfProSemiBold
                                border
                                py-0.5 px-3
                                rounded-[18.5px]
                                border-solid
                                border-success"><FormattedMessage id="plugins.verified" /></p>
                                        </div>
                                        <h5 className="font-latoBold text-body text-xl pb-4">Etherscan</h5>
                                        <p className="font-sfProRegular text-bodyLight text-sm">
                                            <FormattedMessage id="plugins.text12" />
                                        </p>
                                    </div>
                                </a>
                                <a href="https://docs.tenderly.co/monitoring/integrations#remix" target="_blank" rel="noreferrer">
                                    <div
                                        className="bg-background border border-bodyLight border-solid rounded-lg p-4 min-h-[13.75rem] hover:border-body relative">
                                        <div className="flex justify-between items-start">
                                            <TwoDocumentsIcon alt="arrows" className="mb-3 text-body"/>
                                            <p className="bg-bodyLight
                                text-background
                                text-xxs
                                font-sfProSemiBold
                                border
                                py-0.5 px-3
                                rounded-[18.5px]
                                border-solid
                                border-bodyLight">Beta</p>
                                        </div>
                                        <h5 className="font-latoBold text-body text-xl pb-4">Tenderly</h5>
                                        <p className="font-sfProRegular text-bodyLight text-sm">
                                        <FormattedMessage id="plugins.text13" />
                                        </p>
                                    </div>
                                </a>
                                <a href="https://github.com/bunsenstraat/flattener/issues" target="_blank" rel="noreferrer">
                                    <div
                                        className="bg-background border border-bodyLight border-solid rounded-lg p-4 min-h-[13.75rem] hover:border-body relative group">
                                        <BugIcon alt="bug" className="mb-3 text-body"/>
                                        <h5 className="font-latoBold text-body text-xl pb-4">Flattener</h5>
                                        <p className="font-sfProRegular text-bodyLight text-sm">
                                        <FormattedMessage id="plugins.text14" />
                                        </p>
                                    </div>
                                </a>
                                <a href="https://github.com/EdsonAlcala/remix-gas-profiler" target="_blank" rel="noreferrer">
                                    <div
                                        className="bg-background border border-bodyLight border-solid rounded-lg p-4 min-h-[13.75rem] hover:border-body relative group">
                                        <ChartIcon alt="chart" className="mb-3 text-body"/>
                                        <h5 className="font-latoBold text-body text-xl pb-4"><FormattedMessage id="plugins.gasProfiler" /></h5>
                                        <p className="font-sfProRegular text-bodyLight text-sm">
                                            <FormattedMessage id="plugins.text15" />
                                        </p>
                                    </div>
                                </a>
                                <a href="https://remix-learneth-plugin.readthedocs.io/en/latest/index.html" target="_blank" rel="noreferrer">
                                    <div
                                        className="bg-background border border-bodyLight border-solid rounded-lg p-4 min-h-[13.75rem] hover:border-body relative group">
                                        <TickIcon alt="arrows" className="mb-3 text-body"/>
                                        <h5 className="font-latoBold text-body text-xl pb-4">LearnEth</h5>
                                        <p className="font-sfProRegular text-bodyLight text-sm">
                                            <FormattedMessage id="plugins.text16" />
                                        </p>
                                    </div>
                                </a>
                                <a href="https://zokrates.github.io/" target="_blank" rel="noreferrer">
                                    <div
                                        className="bg-background border border-bodyLight border-solid rounded-lg p-4 min-h-[13.75rem] hover:border-body relative group">
                                        <div style={{ filter: colorMode === "light" ? "none" : "invert(1)" }}>
                                            <FaceIcon alt="arrows" className="mb-3 text-body"/>
                                        </div>
                                        <h5 className="font-latoBold text-body text-xl pb-4">ZoKrates</h5>
                                        <p className="font-sfProRegular text-bodyLight text-sm">
                                            <FormattedMessage id="plugins.text17" />
                                        </p>
                                    </div>
                                </a>
                                <a href="https://github.com/groksmith/starkware-remix-plugin" target="_blank" rel="noreferrer">
                                    <div
                                        className="bg-background border border-bodyLight border-solid rounded-lg p-4 min-h-[13.75rem] hover:border-body relative group">
                                        <SkyIcon alt="arrows" className="mb-3 text-body"/>
                                        <h5 className="font-latoBold text-body text-xl pb-4">Starknet</h5>
                                        <p className="font-sfProRegular text-bodyLight text-sm">
                                            <FormattedMessage id="plugins.text18" />
                                        </p>
                                    </div>
                                </a>
                                <a href="https://github.com/hexdivision/remix-contract-deployer-plugin" target="_blank" rel="noreferrer">
                                    <div
                                        className="bg-background border border-bodyLight border-solid rounded-lg p-4 min-h-[13.75rem] hover:border-body relative group">
                                        <ContractIcon alt="arrows" className="mb-3 text-body"/>
                                        <h5 className="font-latoBold text-body text-xl pb-4">Contract Deployer</h5>
                                        <p className="font-sfProRegular text-bodyLight text-sm">
                                            <FormattedMessage id="plugins.text19" />
                                        </p>
                                    </div>
                                </a>

                                <div className="p-4">
                                    <DocsLink relativePath="plugin_list.html#additional-plugins" className="text-xl text-body font-latoBold mt-4 md:mt-24 block hover:underline">
                                        View All
                                    </DocsLink>
                                    <p className="font-sfProRegular text-bodyLight text-sm">
                                        <FormattedMessage id="plugins.text20" />
                                    </p>
                                </div>
                            </div>

                        </div>

                    }
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 my-8">
                        <div>
                            <h3 className="pb-4 text-middle text-body font-latoBold"><FormattedMessage id="plugins.engine" /></h3>
                            <p className="text-base text-bodyLight font-sfProRegular pb-4">
                                <FormattedMessage
                                    id="plugins.text21"
                                    values={{
                                        a: (innerText) => (<a
                                            href="https://github.com/ethereum/remix-plugin/"
                                            target="_blank" rel="noreferrer"
                                            className="text-blue hover:underline">
                                        {innerText}</a>)
                                    }}
                                />
                            </p>
                            <p className="text-base text-bodyLight font-sfProRegular pb-9">
                                <FormattedMessage
                                    id="plugins.text22"
                                    values={{
                                        a1: (innerText) => (<a href="https://github.com/ethereum/remix-plugin/tree/master/examples/example"
                                            target="_blank" rel="noreferrer"
                                            className="text-blue hover:underline"
                                        >{innerText}</a>),
                                        a2: (innerText) => (<a href="https://remix.ethereum.org" target="_blank" rel="noreferrer"
                                            className="text-blue hover:underline"
                                        >{innerText}</a>),
                                        a3: (innerText) => (<a href="https://marketplace.visualstudio.com/items?itemName=RemixProject.ethereum-remix"
                                            target="_blank" rel="noreferrer"
                                            className="text-blue hover:underline"
                                        >{innerText}</a>)
                                    }}
                                />
                            </p>

                            <div className="grid grid-cols-3 justify-items-start items-end">
                                <div className="flex flex-col items-center">
                                    <a href="https://remix-plugin-docs.readthedocs.io/en/latest/" rel="noreferrer"
                                       target="_blank">
                                        <DocumentIcon className="m-auto text-primary" alt="documentation"/>
                                        <p className="text-primary text-sm font-sfProSemiBold pt-2 hover:underline"><FormattedMessage id="plugins.documentation" /></p>
                                    </a>
                                </div>
                                <div className="flex flex-col items-center">
                                    <a href="https://github.com/ethereum/remix-plugin"
                                       rel="noreferrer" target="_blank">
                                        <GithubIcon className="m-auto text-primary" alt="plugin"/>
                                        <p className="text-primary text-sm font-sfProSemiBold pt-2 hover:underline">Remix-plugin</p>
                                    </a>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
};

export default Plugins;
