import React from "react";
import Carousel from "../ui/Carousel";
import devconnect2Image from "../../assets/images/devconnect2.png";
import smartconImage from "../../assets/images/smartcon23.png";
import ethAccraImage from "../../assets/images/ethaccra.png";
import web3LagosImage from "../../assets/images/web3_lagos.png";
import dsrvImage from "../../assets/images/dsrv.png";
import ethconKoreaImage from "../../assets/images/ethcon_korea.png";
import ethcc6Image from "../../assets/images/ethcc6.png";
import ethDenver2Image from "../../assets/images/ethdenver23.png";
import ethIndiaImage from "../../assets/images/ethindia22.png";
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
    const eventsData = [
        {
              id: 0,
            name: 'Devconnect',
            date: 'November 2023',
            image: devconnect2Image,
            location: 'Istanbul, Türkiye',
            description: 'Solidity Summit, Tooling & Interoperability, UX, and Remix Challenge',
        },
        {
              id: 1,
            name: 'SmartCon by Chainlink',
            date: 'October 2023',
            image: smartconImage,
            location: 'Barcelona, Spain',
            description: 'ZKZap! Remix on Cross-Chain Circuits',
        },
        {
            id: 2,
            name: 'ETHAccra',
            date: 'September 2023',
            image: ethAccraImage,
            location: 'Accra, Ghana',
            description: 'Zero To DApp Day',
        },
        {
            id: 3,
            name: 'Web3 Lagos Conference',
            date: 'September 2023',
            image: web3LagosImage,
            location: 'Lagos, Nigeria',
            description: 'Remix for Hackathons',
        },
        {
            id: 4,
            name: 'DSRV Builder House',
            date: 'September 2023',
            image: dsrvImage,
            location: 'Seoul, South Korea',
            description: 'WELLDONE with Remix and Remix Challenge',
        },
        {
            id: 5,
            name: 'Ethcon Korea',
            date: 'September 2023',
            image: ethconKoreaImage,
            location: 'Seoul, South Korea',
            description: 'Remix Features Every Dev Should Know',
        },
        {
            id: 6,
            name: 'EthCC 6',
            date: 'July 2023',
            image: ethcc6Image,
            location: 'Paris, France',
            description: 'Remix Features Every Dev Should Know',
        },
        {
            id: 7,
            name: 'ETHDenver',
            date: 'March 2023',
            image: ethDenver2Image,
            location: 'Denver, USA',
            description: 'Remix for Hackathons',
        },
        {
            id: 8,
            name: 'ETHIndia',
            date: 'December 2022',
            image: ethIndiaImage,
            location: 'Bengaluru, India',
            description: 'Remix for Hackathons and Remix Challenge',
        },
        {            
            id: 9,
            name: 'Devcon 6',
            date: 'October 2022',
            image: devconImage,
            location: 'Bogota, Colombia',
            description: 'What's New in Remix and Remix Rewards Launch',
        },
        {
            id: 10,
            name: 'ETHSafari',
            date: 'September 2022',
            image: ethSafariImage,
            location: 'Nairobi, Kenya',
            description: 'Remix Essentials',
        },
        {
            id: 11,
            name: 'Kuala Lumpur Ethereum Meetup',
            date: 'May 2022',
            image: klImage,
            location: 'Kuala Lumpur and Online',
            description: 'A Stroll through Remix',
        },
        {
            id: 12,
            name: 'Devconnnect / Solidity Summit',
            date: 'April 2022',
            image: solidityImage,
            location: 'Amsterdam, Netherlands',
            description: 'Remix Hybrid Tools',
        },
        {
            id: 13,
            name: 'Devconnnect',
            date: 'April 2022',
            image: remixImage,
            location: 'Amsterdam, Netherlands',
            description: 'GameDay Remix, a Remix-based Scavenger Hunt',
        },
        {
            id: 14,
            name: 'ETHDenver',
            date: 'February 2022',
            image: denverImage,
            location: 'Denver, USA',
            description: 'Remix for Hackathons',
        }
    ];

    return (
        <Section id={sectionId.events}>
            <div className="md:bg-events-desktop
        bg-events-mobile
        bg-no-repeat
        bg-remix-desktop-background-position">
                <div className="container mx-auto pb-20 pt-36 md:pt-50">
                    <h1 className="text-center font-sfProThin pb-2 md:text-8xl">EVENTS</h1>
                    <h2 className="text-center text-4xl md:text-5xl font-latoBold pb-6">MIXING IT UP WITH THE COMMUNITY</h2>
                    <p className="text-center
                font-sfProRegular
                text-gray
                text-lg xl:px-72 lg:px-6 px-6">
                        The Remix Project team gives workshops about Remix as well as general
                        introductions to the Ethereum ecosystem and its associated use cases.
                        We can tailor our workshops to the technical knowledge and skill
                        level of your particular group, and we try to give entertaining talks.
                        Reach out to us by email, or on our Discord or Twitter.
                    </p>
                    <div className="container mx-auto pb-20 pt-2">
                        <Carousel>
                            {
                                eventsData.map((event) => (
                                    <SwiperSlide key={event.id}>
                                        <EventCard
                                            date={event.date}
                                            image={event.image}
                                            description={event.description}
                                            name={event.name}
                                            location={event.location}
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
