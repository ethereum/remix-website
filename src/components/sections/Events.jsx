import React from "react";
import { FormattedMessage, useIntl } from 'react-intl';
import Carousel from "../ui/Carousel";
import devconnect2Image from "../../assets/images/devconnect2.png";
import smartconImage from "../../assets/images/smartcon23.png";
import ethAccraImage from "../../assets/images/ethaccra.png";
import web3LagosImage from "../../assets/images/web3_lagos.png";
import dsrvImage from "../../assets/images/dsrv.png";
import ethconKoreaImage from "../../assets/images/ethcon_korea.png";
import ethcc6Image from "../../assets/images/ethcc6.png";
import blockSplit4Image from "../../assets/images/blocksplit23.png";
import edcon23Image from "../../assets/images/edcon23.png";
import ethDenver2Image from "../../assets/images/ethdenver23.png";
import ethIndiaImage from "../../assets/images/ethindia22.png";
import ethIndiaImage2 from "../../assets/images/ethindia23.png";
import devconImage from "../../assets/images/devcon.png";
import ethSafariImage from "../../assets/images/ethSafari.png";
import klImage from "../../assets/images/KL-meetup.png";
import solidityImage from "../../assets/images/devconnect_solidity_summit.jpg";
import remixImage from "../../assets/images/devconnect-Remix.png";
import denverImage from "../../assets/images/ethdenver_03.jpg";
import EventCard from "../ui/EventCard";
import {Section} from "../../scroll-section";
import {sectionId} from "../../constants";
import {SwiperSlide} from "swiper/react";



const Events = () => {
    const intl = useIntl()

    const eventsData = [
        {
            id: 17,
            name: 'ETHIndia',
            date: 'December 2023',
            image: ethIndiaImage2,
            location: 'Bengaluru, India',
            description: 'Scripting with Remix',
            URL: 'https://ethindia.co'
        },{
            id: 16,
            name: 'Devconnect',
            date: 'November 2023',
            image: devconnect2Image,
            location: 'Istanbul, Türkiye',
            description: 'Hookah & Hack - The Future of Web3 Tooling and Remix Challenge',
            URL: 'https://devconnect.org'
        },
        {
            id: 15,
            name: 'SmartCon by Chainlink',
            date: 'October 2023',
            image: smartconImage,
            location: 'Barcelona, Spain',
            description: 'Crosschain ZK Circuits with Remix',
            URL: 'https://smartcon.chain.link'
        },
        {
            id: 14,
            name: 'ETHAccra',
            date: 'September 2023',
            image: ethAccraImage,
            location: 'Accra, Ghana',
            description: 'Zero To DApp Day',
            URL: 'https://www.ethaccra.xyz'
        },
        {
            id: 13,
            name: 'Web3 Lagos Conference',
            date: 'September 2023',
            image: web3LagosImage,
            location: 'Lagos, Nigeria',
            description: 'Remix for Hackathons',
            URL: 'https://event.web3bridge.com'
        },
        {
            id: 12,
            name: 'DSRV Builder House',
            date: 'September 2023',
            image: dsrvImage,
            location: 'Seoul, South Korea',
            description: 'WELLDONE with Remix and Remix Challenge',
            URL: 'https://buildershouse.dsrvlabs.com/e782515b-8c04-42d9-b5ec-a174f0abb7b5'
        },
        {
            id: 11,
            name: 'Ethcon Korea',
            date: 'September 2023',
            image: ethconKoreaImage,
            location: 'Seoul, South Korea',
            description: 'Remix Features Every Dev Should Know',
            URL: 'https://2023.ethcon.kr'
        },
        {
            id: 10,
            name: 'EthCC 6',
            date: 'July 2023',
            image: ethcc6Image,
            location: 'Paris, France',
            description: 'Remix Features Every Dev Should Know',
            URL: 'https://www.ethcc.io'
        },
        {
            id: 9,
            name: 'BlockSplit 4',
            date: 'May 2023',
            image: blockSplit4Image,
            location: 'Split, Croatia',
            description: 'Remix Features Every Dev Should Know',
            URL: 'https://blocksplit.net/'
        },
        {
            id: 8,
            name: 'EDCON 2023',
            date: 'May 2023',
            image: edcon23Image,
            location: 'Podgorica, Montenegro',
            description: 'Unlocking NFTs with Remix: A Hands-on Workshop',
            URL: 'https://www.edcon.io/'
        },
        {
            id: 7,
            name: 'ETHDenver',
            date: 'March 2023',
            image: ethDenver2Image,
            location: 'Denver, USA',
            description: 'Remix for Hackathons',
            URL: 'https://www.ethdenver.com'
        },
        {
            id: 6,
            name: 'ETHIndia',
            date: 'December 2022',
            image: ethIndiaImage,
            location: 'Bengaluru, India',
            description: 'Remix for Hackathons and Remix Challenge',
            URL: 'https://ethindia.co'
        },
        {            
            id: 5,
            name: 'Devcon 6',
            date: 'October 2022',
            image: devconImage,
            location: 'Bogota, Colombia',
            description: 'What\'s New in Remix and Remix Rewards Launch',
            URL: 'https://devcon.org/en'
        },
        {
            id: 4,
            name: 'ETHSafari',
            date: 'September 2022',
            image: ethSafariImage,
            location: 'Nairobi, Kenya',
            description: 'Remix Essentials',
            URL: 'https://ethsafari.xyz'
        },
        {
            id: 3,
            name: 'Kuala Lumpur Ethereum Meetup',
            date: 'May 2022',
            image: klImage,
            location: 'Kuala Lumpur and Online',
            description: 'A Stroll through Remix',
            URL: 'https://www.meetup.com/ethmalaysia'
        },
        {
            id: 2,
            name: 'Devconnnect / Solidity Summit',
            date: 'April 2022',
            image: solidityImage,
            location: 'Amsterdam, Netherlands',
            description: 'Remix Hybrid Tools',
            URL: 'https://devconnect.org/amsterdam'
        },
        {
            id: 1,
            name: 'Devconnnect',
            date: 'April 2022',
            image: remixImage,
            location: 'Amsterdam, Netherlands',
            description: 'GameDay Remix, a Remix-based Scavenger Hunt',
            URL: 'https://devconnect.org/amsterdam'
        },
        {
            id: 0,
            name: 'ETHDenver',
            date: 'February 2022',
            image: denverImage,
            location: 'Denver, USA',
            description: 'Remix for Hackathons',
            URL: 'https://www.ethdenver.com'
        }
    ]
    const data = JSON.stringify(eventsData)
    localStorage.setItem('eventsData', data)
    const siteData = JSON.parse(localStorage.getItem('eventsData'))
    

    return (
        <Section id={sectionId.events}>
            <div className="md:bg-events-desktop
        bg-events-mobile
        bg-no-repeat
        bg-remix-desktop-background-position">
                <div className="container mx-auto pb-20 pt-36 md:pt-50">
                    <h1 className="text-center font-sfProThin pb-2 md:text-8xl uppercase"><FormattedMessage id="events.events" /></h1>
                    <h2 className="text-center text-4xl md:text-5xl font-latoBold pb-6 uppercase"><FormattedMessage id="events.mixingItUp" /></h2>
                    <p className="text-center
                font-sfProRegular
                text-bodyLight
                text-lg xl:px-72 lg:px-6 px-6">
                        <FormattedMessage id="events.text" />
                    </p>
                    <div className="container mx-auto pb-20 pt-2">
                        <Carousel>
                            {
                                siteData.map((event) => (
                                    <SwiperSlide key={event.id}>
                                        <EventCard
                                            date={intl.formatMessage({ id: `events.${event.id}.date`, defaultMessage: event.date })}
                                            image={event.image}
                                            description={intl.formatMessage({ id: `events.${event.id}.description`, defaultMessage: event.description })}
                                            name={intl.formatMessage({ id: `events.${event.id}.name`, defaultMessage: event.name })}
                                            location={intl.formatMessage({ id: `events.${event.id}.location`, defaultMessage: event.location })}
                                            URL={event.URL}
                                        />
                                    </SwiperSlide>

                                ))
                            }
                        </Carousel>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Events;
