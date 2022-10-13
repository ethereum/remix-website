import React from "react";
import logo from "../../assets/images/remix-logo.svg";
import mailIcon from "../../assets/images/mail-icon.svg";
import githubIconGray from "../../assets/images/github-icon-gray.svg";
import mediumIcon from "../../assets/images/medium-icon.svg";
import twitterIcon from "../../assets/images/twitter-icon.svg";
import linkedinIcon from "../../assets/images/linkedin-icon.svg";

const Footer = () => {
    return (
        <section>
            <div className="sm:container sm:m-auto pb-10 pt-20 mx-6">
                <div className="grid grid-cols-footer">
                    <div className="col-start-1 col-end-6 md:col-start-auto md:col-end-auto">
                        <img className="mb-11 md:mb-0" src={logo} alt="logo"/>
                    </div>
                    <div className="mb-11 md:mb-0">
                       <h6 className="text-gray font-sfProRegular text-xs pb-4">PRODUCT</h6>
                        <div className="inline-flex flex-col gap-3">

                        <a className="font-sfProRegular text-black text-sm block hover:underline" href="https://remix.ethereum.org" target="_blank" rel="noreferrer">Remix Online IDE</a>
                        <a className="font-sfProRegular text-black text-sm block hover:underline" href="https://github.com/ethereum/remix-desktop/releases" target="_blank" rel="noreferrer">Remix Desktop IDE</a>
                        <a className="font-sfProRegular text-black text-sm  block hover:underline" href="https://marketplace.visualstudio.com/items?itemName=RemixProject.ethereum-remix" target="_blank" rel="noreferrer">Ethereum Remix</a>
                        <a className="font-sfProRegular text-black text-sm  block hover:underline" href="https://github.com/ethereum/remix-project/tree/master/libs/remixd" target="_blank" rel="noreferrer">RemixD</a>
                        </div>

                    </div>
                    <div className="col-start-3 col-end-6 md:col-start-auto md:col-end-auto">
                        <h6 className="text-gray font-sfProRegular text-xs pb-4">DOCUMENTATION</h6>
                        <div className="inline-flex flex-col gap-3">
                        <a className="font-sfProRegular text-black text-sm  block hover:underline" href="https://docs.soliditylang.org/en/v0.6.1/" target="_blank" rel="noreferrer">Solidity</a>
                        <a className="font-sfProRegular text-black text-sm  block hover:underline" href="https://remix-ide.readthedocs.io/en/latest/" target="_blank" rel="noreferrer">Remix</a>
                        <a className="font-sfProRegular text-black text-sm  block hover:underline" href="https://remix-plugin-docs.readthedocs.io/en/latest/plugin/README.html#plugin" target="_blank" rel="noreferrer">Plugins</a>
                        </div>

                    </div>
                    <div>
                        <h6 className="text-gray font-sfProRegular text-xs pb-4">GITHUB</h6>
                        <div className="inline-flex flex-col gap-3">
                            <a className="font-sfProRegular text-black text-sm  block hover:underline" href="https://github.com/ethereum/remix" target="_blank" rel="noreferrer">Remix</a>
                        <a className="font-sfProRegular text-black text-sm  block hover:underline" href="https://github.com/ethereum/remix-ide" target="_blank" rel="noreferrer">Remix IDE</a>
                        <a className="font-sfProRegular text-black text-sm  block hover:underline" href="https://github.com/ethereum/remix-plugin/tree/master/examples/example/plugin" target="_blank" rel="noreferrer">Plugins</a>
                        <a className="font-sfProRegular text-black text-sm  block hover:underline" href="https://github.com/ethereum/remix-project/tree/master/libs#readme" target="_blank" rel="noreferrer">Libraries</a>
                        </div>

                    </div>
                    <div className="justify-self-end col-start-3 col-end-6 md:col-start-auto md:col-end-auto">
                        <a className="mr-9 inline-block" href="mailito:remix@ethereum.org">
                            <img src={mailIcon} alt="mail"/>
                        </a>
                        <a className="mr-9 inline-block" href="https://github.com/ethereum/remix" target="_blank" rel="noreferrer">
                            <img src={githubIconGray} alt="github"/>
                        </a>
                        <a className="mr-9 inline-block" href="https://twitter.com/EthereumRemix" target="_blank" rel="noreferrer">
                            <img src={twitterIcon} alt="twitter"/>
                        </a>
                        <a className="mr-9 inline-block" href="https://medium.com/remix-ide" target="_blank" rel="noreferrer">
                            <img src={mediumIcon} alt="medium"/>
                        </a>
                        <a className="inline-block" href="https://www.linkedin.com/company/ethereum-remix/" target="_blank" rel="noreferrer">
                            <img src={linkedinIcon} alt="linkedin"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-t border-borderColor py-6 flex justify-center">
                <p className="font-sfProRegular text-black text-xs pr-5">© 2022 Remix. All rights reserved.</p>
                <a className="font-sfProRegular text-black text-xs pr-5 hover:underline" href="" target="_blank" rel="noreferrer">Terms</a>
                <a className="font-sfProRegular text-black text-xs hover:underline" href="" target="_blank" rel="noreferrer">Privacy</a>
            </div>
        </section>
    )
}

export default Footer;
