import React from "react";
import { FormattedMessage } from 'react-intl';
import {Section} from "../../scroll-section";
import {sectionId} from "../../constants";
import remixEditor from '../../assets/images/remix-editor.png';
import remiIcon from '../../assets/images/remi-icon.svg';
import remixEditor2x from '../../assets/images/remix-editor2x.png';
import ReactPlayer from "react-player";
import remixVideo from "../../videos/remix.mp4"

const About = () => {
    return (
        <Section id={sectionId.about} >
            <div className="container mx-auto pb-20 pt-36 md:py-50">
                <h1 className="text-center font-extralight pb-2 md:text-8xl"><FormattedMessage id='about.remixProject' /></h1>
                <h2 className="text-center text-4xl md:text-5xl font-latoBold pb-6"><FormattedMessage id='about.jumpIntoWeb3' /></h2>
                <p className="text-center
                font-sfProRegular
                text-gray
                text-lg xl:px-72 lg:px-6 px-6 mb-16">
                    <FormattedMessage id='about.text' />
                </p>
                <img className="m-auto sm:hidden" src={remixEditor} srcSet={`${remixEditor2x} 2x`} alt="remix-ide"/>
                <div className="hidden sm:block relative m-auto sm:h-[30rem] rounded-[1.25rem] max-w-4xl h-full border-[0.375rem] border-magenta">
                    <img className="absolute right-14 -top-20 z-10" src={remiIcon} alt="🦔"/>
                    <ReactPlayer  url={[{src:remixVideo, type: "video/mp4"}]} width='100%'
                                  className="overflow-hidden absolute rounded-2xl"
                                  playing={true}
                                  loop={true}
                                  muted
                                  playsinline={true}
                                  config={{ file: { forceVideo: true } }}
                                  height='100%'/>

                </div>
            </div>
        </Section>
    )

}

export default About;
