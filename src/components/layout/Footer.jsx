import React from "react";
import { FormattedMessage } from 'react-intl';
import { ReactComponent as Logo } from "../../assets/images/remix-logo.svg";
import { ReactComponent as MailIcon } from "../../assets/images/mail-icon.svg";
import { ReactComponent as GithubIcon } from "../../assets/images/github-icon.svg";
import { ReactComponent as MediumIcon } from "../../assets/images/medium-icon.svg";
import { ReactComponent as TwitterIcon } from "../../assets/images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/images/linkedin-icon.svg";
import { ReactComponent as DiscordIcon } from "../../assets/images/discord-icon.svg";
import { REMIX_IDE_URL } from "../../constants";
import DocsLink from "../ui/DocsLink";

const Footer = ({ colorMode }) => {
    return (
        <section>
            <div className="sm:container sm:m-auto pb-10 pt-20 mx-6">
                <div className="grid grid-cols-footer">
                    <div className="col-start-1 col-end-6 md:col-start-auto md:col-end-auto">
                        <Logo className="mb-11 md:mb-0 text-primary" alt="logo"/>
                    </div>
                    <div className="mb-11 md:mb-0">
                       <h6 className="text-bodyLight font-sfProRegular text-xs pb-4"><FormattedMessage id='footer.product' /></h6>
                        <div className="inline-flex flex-col gap-3">

                        <a className="font-sfProRegular text-body text-sm block hover:underline" href={REMIX_IDE_URL} target="_blank" rel="noreferrer"><FormattedMessage id='footer.onlineIDE' /></a>
                        <a className="font-sfProRegular text-body text-sm block hover:underline" href="https://github.com/ethereum/remix-desktop/releases" target="_blank" rel="noreferrer"><FormattedMessage id='footer.desktopIDE' /></a>
                        <a className="font-sfProRegular text-body text-sm  block hover:underline" href="https://marketplace.visualstudio.com/items?itemName=RemixProject.ethereum-remix" target="_blank" rel="noreferrer">Ethereum Remix</a>
                        <a className="font-sfProRegular text-body text-sm  block hover:underline" href="https://github.com/ethereum/remix-project/tree/master/libs/remixd" target="_blank" rel="noreferrer">RemixD</a>
                        </div>

                    </div>
                    <div className="col-start-3 col-end-6 md:col-start-auto md:col-end-auto">
                        <h6 className="text-bodyLight font-sfProRegular text-xs pb-4"><FormattedMessage id='footer.documentation' /></h6>
                        <div className="inline-flex flex-col gap-3">
                        <a className="font-sfProRegular text-body text-sm  block hover:underline" href="https://docs.soliditylang.org/en/v0.6.1/" target="_blank" rel="noreferrer">Solidity</a>
                        <DocsLink className="font-sfProRegular text-body text-sm  block hover:underline">Remix</DocsLink>
                        <a className="font-sfProRegular text-body text-sm  block hover:underline" href="https://remix-plugin-docs.readthedocs.io/en/latest/plugin/README.html#plugin" target="_blank" rel="noreferrer"><FormattedMessage id='footer.plugins' /></a>
                        </div>

                    </div>
                    <div>
                        <h6 className="text-bodyLight font-sfProRegular text-xs pb-4">GITHUB</h6>
                        <div className="inline-flex flex-col gap-3">
                            <a className="font-sfProRegular text-body text-sm  block hover:underline" href="https://github.com/ethereum/remix" target="_blank" rel="noreferrer">Remix</a>
                        <a className="font-sfProRegular text-body text-sm  block hover:underline" href="https://github.com/ethereum/remix-ide" target="_blank" rel="noreferrer">Remix IDE</a>
                        <a className="font-sfProRegular text-body text-sm  block hover:underline" href="https://github.com/ethereum/remix-plugin/tree/master/examples/example/plugin" target="_blank" rel="noreferrer"><FormattedMessage id='footer.plugins' /></a>
                        <a className="font-sfProRegular text-body text-sm  block hover:underline" href="https://github.com/ethereum/remix-project/tree/master/libs#readme" target="_blank" rel="noreferrer"><FormattedMessage id='footer.libraries' /></a>
                        </div>

                    </div>
                    <div className="justify-self-end col-start-3 col-end-6 md:col-start-auto md:col-end-auto">
                        <a className="mr-9 inline-block" href="mailito:remix@ethereum.org">
                            <MailIcon className="w-6 h-6 text-bodyLight" alt="mail"/>
                        </a>
                        <a className="mr-9 inline-block" href="https://github.com/ethereum/remix-project" target="_blank" rel="noreferrer">
                            <GithubIcon className="h-6 h-6 text-bodyLight" alt="github"/>
                        </a>
                        <a className="mr-9 inline-block" href="https://twitter.com/EthereumRemix" target="_blank" rel="noreferrer">
                            <TwitterIcon className="w-6 h-6 text-bodyLight" alt="twitter"/>
                        </a>
                        <a className="mr-9 inline-block" href="https://medium.com/remix-ide" target="_blank" rel="noreferrer">
                            <MediumIcon className="w-6 h-6 text-bodyLight" alt="medium"/>
                        </a>
                        <a className="mr-9 inline-block" href="https://www.linkedin.com/company/ethereum-remix/" target="_blank" rel="noreferrer">
                            <LinkedinIcon className="w-6 h-6 text-bodyLight" alt="linkedin"/>
                        </a>
                        <a className="inline-block" href="https://discord.com/invite/mh9hFCKkEq" target="_blank" rel="noreferrer">
                            <DiscordIcon className="w-6 h-6 text-bodyLight" alt="discord"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-t border-bodyLight py-6 flex justify-center">
                <p className="font-sfProRegular text-body text-xs pr-5">© 2022 Remix. All rights reserved.</p>
            </div>
        </section>
    )
}

export default Footer;
