import React, { useState } from "react";

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

// TODO: Convert this to be color-mode responsive:
import { ReactComponent as ContractIcon } from "../../assets/images/contract-deployer.svg";
import { ReactComponent as SkyIcon } from "../../assets/images/starknet.svg"
import { ReactComponent as FaceIcon } from "../../assets/images/zokrates.svg"
import { ReactComponent as BracketIcon } from "../../assets/images/sourcify.svg"

import { Section } from "../../scroll-section";
import { REMIX_DOCS_URL, REMIX_IDE_URL, sectionId } from "../../constants";
import { useColorMode } from "../../hooks/useColorMode";

const Plugins = () => {
    const { colorMode } = useColorMode();

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
            <div className="md:bg-plugins-desktop
        bg-no-repeat
        bg-plugins-background-position">
                <img src={pluginsMobileBck} className="md:hidden m-auto w-full" alt="plugins"/>
                <div className="sm:container sm:m-auto pb-20 pt-10 md:py-50 mx-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24">
                        <div>
                            <h1 className="font-sfProThin pb-2 md:text-8xl">PLUGINS</h1>
                            <h2 className="text-4xl md:text-5xl font-latoBold pb-6">EVERYTHING IS A PLUGIN</h2>
                            <p className="
                                font-sfProRegular
                                text-bodyLight
                                text-lg pb-6">
                                In Remix, everything is a plugin. Core plugins are preloaded for essential operations.
                                Additional plugins offer an expanded palette of tools.
                            </p>
                            <p className="
                                font-sfProRegular
                                text-bodyLight
                                text-lg pb-6">
                                The Remix team builds all core plugins and some additional plugins, all of which are
                                designated by the green checkmark.
                                We also support teams who build plugins to allow their projects to be used inside of
                                Remix.
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
                            Core Plugins
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
                            Additional Plugins
                        </button>
                    </div>
                    {showCorePlugins &&
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <a href={REMIX_DOCS_URL + "/en/latest/compile.html"} target="_blank"
                                   rel="noreferrer">
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
                                        <h5 className="font-latoBold text-body text-xl pb-4">Solidity Compiler</h5>

                                        <p className="font-sfProRegular text-bodyLight text-sm">
                                            Compiles Solidity and YUL contracts. Accesses compilation details.
                                            Publishes compiled contract and metadata to IPFS or Swarm.
                                        </p>
                                    </div>
                                </a>
                                <a href={REMIX_DOCS_URL + "/en/latest/run.html"} target="_blank"
                                   rel="noreferrer">
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
                                        <h5 className="font-latoBold text-body text-xl pb-4">Deploy & Run</h5>
                                        <p className="font-sfProRegular text-bodyLight text-sm">
                                            Deploys contracts to the in-browser chain (Remix VM), local nodes, or public
                                            networks.
                                            Accesses and interacts with deployed contracts. Records and plays back
                                            transactions.
                                        </p>
                                    </div>
                                </a>
                                <a href={REMIX_DOCS_URL + "/en/latest/file_explorer.html"} target="_blank"
                                   rel="noreferrer">
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
                                        <h5 className="font-latoBold text-body text-xl pb-4">File Explorer</h5>
                                        <p className="font-sfProRegular text-bodyLight text-sm">
                                            Organizes files in Workspaces and folders, clones Git repos,
                                            uploads files, creates GISTs, flattens files and more.
                                        </p>
                                    </div>
                                </a>
                                <a href={REMIX_DOCS_URL + "/en/latest/debugger.html"} target="_blank"
                                   rel="noreferrer">
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
                                        <h5 className="font-latoBold text-body text-xl pb-4">Debugger</h5>
                                        <p className="font-sfProRegular text-bodyLight text-sm">
                                            A visual debugger that includes breakpoints and a stepper.
                                            Checks high and low level parameters, and fetches and debugs transactions of
                                            verified contracts.
                                        </p>
                                    </div>
                                </a>
                                <a href={REMIX_DOCS_URL + "/en/latest/static_analysis.html"}
                                   target="_blank" rel="noreferrer">
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
                                        <h5 className="font-latoBold text-body text-xl pb-4">Solidity Analyzers</h5>
                                        <p className="font-sfProRegular text-bodyLight text-sm">
                                            Examines and debugs code without actually executing it. Integrates with
                                            Slither.
                                        </p>
                                    </div>
                                </a>
                                <a href={REMIX_DOCS_URL + "/en/latest/unittesting.html"} target="_blank"
                                   rel="noreferrer">
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
                                        <h5 className="font-latoBold text-body text-xl pb-4">Solidity Unit Testing</h5>
                                        <p className="font-sfProRegular text-bodyLight text-sm">
                                            Runs unit tests written in Solidity.
                                        </p>
                                    </div>
                                </a>
                                <a href={REMIX_DOCS_URL + "/en/latest/remixd.html"} target="_blank"
                                   rel="noreferrer">
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
                                            An npm package run locally to connect a folder on your filesystem to the
                                            Remix website.
                                        </p>
                                    </div>
                                </a>

                                <div className="p-4">
                                    <a href={REMIX_DOCS_URL + "/en/latest/plugin_list.html#core-plugins"}
                                       rel="noreferrer"
                                       target="_blank"
                                       className="text-xl text-body font-latoBold mt-4 md:mt-24 block hover:underline"
                                    >View All</a>
                                    <p className="font-sfProRegular text-bodyLight text-sm">Explore all our core plugins on
                                        GitHub</p>
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
                                            Verifies and fetches verified contracts.
                                        </p>
                                    </div>
                                </a>
                                <a href="https://remix-etherscan-plugin.readthedocs.io/en/latest/" target="_blank"
                                   rel="noreferrer">
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
                                border-success">Verified</p>
                                        </div>
                                        <h5 className="font-latoBold text-body text-xl pb-4">Etherscan</h5>
                                        <p className="font-sfProRegular text-bodyLight text-sm">
                                            Verifies contracts on Etherscan.
                                        </p>
                                    </div>
                                </a>
                                <a href="https://docs.tenderly.co/monitoring/integrations#remix" target="_blank"
                                   rel="noreferrer">
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
                                            Verifies contracts on Tenderly. Imports Tenderly projects into Remix.
                                        </p>
                                    </div>
                                </a>
                                <a href="https://github.com/bunsenstraat/flattener/issues" target="_blank"
                                   rel="noreferrer">
                                    <div
                                        className="bg-background border border-bodyLight border-solid rounded-lg p-4 min-h-[13.75rem] hover:border-body relative group">
                                        <BugIcon alt="bug" className="mb-3 text-body"/>
                                        <h5 className="font-latoBold text-body text-xl pb-4">Flattener</h5>
                                        <p className="font-sfProRegular text-bodyLight text-sm">
                                            Flattens compiled contracts.
                                        </p>
                                    </div>
                                </a>
                                <a href="https://github.com/EdsonAlcala/remix-gas-profiler" target="_blank"
                                   rel="noreferrer">
                                    <div
                                        className="bg-background border border-bodyLight border-solid rounded-lg p-4 min-h-[13.75rem] hover:border-body relative group">
                                        <ChartIcon alt="chart" className="mb-3 text-body"/>
                                        <h5 className="font-latoBold text-body text-xl pb-4">Gas Profiler,</h5>
                                        <p className="font-sfProRegular text-bodyLight text-sm">
                                            Displays the gas costs for every transaction executed.
                                            Displays total execution costs and per line costs.
                                        </p>
                                    </div>
                                </a>
                                <a href="https://remix-learneth-plugin.readthedocs.io/en/latest/index.html"
                                   target="_blank" rel="noreferrer">
                                    <div
                                        className="bg-background border border-bodyLight border-solid rounded-lg p-4 min-h-[13.75rem] hover:border-body relative group">
                                        <TickIcon alt="arrows" className="mb-3 text-body"/>
                                        <h5 className="font-latoBold text-body text-xl pb-4">LearnEth</h5>
                                        <p className="font-sfProRegular text-bodyLight text-sm">
                                            Tutorials about Solidity and Remix features, with quizzes to check progress.
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
                                            A toolbox for zkSNARKs on Ethereum.
                                        </p>
                                    </div>
                                </a>
                                <a href="https://github.com/groksmith/starkware-remix-plugin" target="_blank"
                                   rel="noreferrer">
                                    <div
                                        className="bg-background border border-bodyLight border-solid rounded-lg p-4 min-h-[13.75rem] hover:border-body relative group">
                                        <SkyIcon alt="arrows" className="mb-3 text-body"/>
                                        <h5 className="font-latoBold text-body text-xl pb-4">Starknet</h5>
                                        <p className="font-sfProRegular text-bodyLight text-sm">
                                            Compiles contracts written in Cairo, and deploys to Starknet chains.
                                        </p>
                                    </div>
                                </a>
                                <a href="https://github.com/hexdivision/remix-contract-deployer-plugin" target="_blank"
                                   rel="noreferrer">
                                    <div
                                        className="bg-background border border-bodyLight border-solid rounded-lg p-4 min-h-[13.75rem] hover:border-body relative group">
                                        <ContractIcon alt="arrows" className="mb-3 text-body"/>
                                        <h5 className="font-latoBold text-body text-xl pb-4">Contract Deployer</h5>
                                        <p className="font-sfProRegular text-bodyLight text-sm">
                                            Gives contracts the same address when deploying to different chains.
                                        </p>
                                    </div>
                                </a>

                                <div className="p-4">
                                    <a href={REMIX_DOCS_URL + "/en/latest/plugin_list.html#additional-plugins"}
                                       rel="noreferrer"
                                       target="_blank"
                                       className="text-xl text-body font-latoBold mt-4 md:mt-24 block hover:underline"
                                    >View All</a>
                                    <p className="font-sfProRegular text-bodyLight text-sm">
                                        Explore documentation for all our additional plugins.
                                    </p>
                                </div>
                            </div>

                        </div>

                    }
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 my-8">
                        <div>
                            <h3 className="pb-4 text-middle text-body font-latoBold">Remix Plugin Engine</h3>
                            <p className="text-base text-bodyLight font-sfProRegular pb-4">The Remix Plugin Engine
                                manages the communication between plugins. Plugin developers should start
                                <a href="https://github.com/ethereum/remix-plugin/" target="_blank" rel="noreferrer"
                                   className="text-primary hover:underline"
                                > here</a>.
                                Remix plugins use bootstrap and should abide by our UI Standards.
                            </p>
                            <p className="text-base text-bodyLight font-sfProRegular pb-9">
                                Any project that wants to use our plugins can implement the Remix Plugin Engine. See
                                our example project
                                <a href="https://github.com/ethereum/remix-plugin/tree/master/examples/example"
                                   target="_blank" rel="noreferrer"
                                   className="text-primary hover:underline"
                                > here</a>.
                                Currently the Remix Plugin Engine is used in the
                                <a href={REMIX_IDE_URL} target="_blank" rel="noreferrer"
                                   className="text-primary hover:underline"
                                > Remix IDE</a> and the
                                <a href="https://marketplace.visualstudio.com/items?itemName=RemixProject.ethereum-remix"
                                   target="_blank" rel="noreferrer"
                                   className="text-primary hover:underline"
                                > Remix VSCode</a> extension.
                            </p>

                            <div className="grid grid-cols-3 justify-items-start items-end">
                                <div className="flex flex-col items-center">
                                    <a href="https://remix-plugin-docs.readthedocs.io/en/latest/" rel="noreferrer"
                                       target="_blank">
                                        <DocumentIcon className="m-auto text-primary" alt="documentation"/>
                                        <p className="text-primary text-sm font-sfProSemiBold pt-2 hover:underline">Documentation</p>
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
