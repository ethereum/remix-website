import React from "react";
import Carousel from "../ui/Carousel";
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
            name: 'Devcon',
            date: 'October 2022',
            image: devconImage,
            location: 'Bogota, Columbia',
            description: 'Come and See!',
        },
        {
            id: 1,
            name: 'EthSafari',
            date: 'September 2022',
            image: ethSafariImage,
            location: 'Nairobi, Kenya',
            description: 'Remix Essentials',
        },
        {
            id: 2,
            name: 'Kuala Lumpur Ethereum Meetup',
            date: 'May 2022',
            image: klImage,
            location: 'Kuala Lumpur and Online',
            description: 'A Stroll through Remix',
        },
        {
            id: 3,
            name: 'Devconnnect / Solidity Summit',
            date: 'April 2022',
            image: solidityImage,
            location: 'Amsterdam, Netherlands',
            description: 'Remix Hybrid Tools',
        },
        {
            id: 4,
            name: 'Devconnnect',
            date: 'April 2022',
            image: remixImage,
            location: 'Amsterdam, Netherlands',
            description: 'Gameday Remix, a Remix-based Scavenger Hunt',
        },
        {
            id: 5,
            name: 'EthDenver',
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
                        The Remix Project team gives workshops about Remix, as well as more general
                        introductions to the Ethereum ecosystem and its associated use cases.
                        We can tailor our presentations to the technical knowledge and skill
                        level of your particular group, and we try to give entertaining talks.
                        Reach out to us by email, or chat with us on one of our Gitter channels or Twitter.
                    </p>
                    <div className="container mx-auto pb-20 pt-2">
                        <Carousel>
                            {
                                eventsData.map((event) => (
                                    <SwiperSlide>
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
