import React from "react";
import teamMobileBck from "../../assets/images/team-mobile-bck.svg";
import teamAniket from "../../assets/images/aniket.png";
import teamDavid from "../../assets/images/david_disu.png";
import teamLiana from "../../assets/images/liana_husikyan.png";
import teamJoseph from "../../assets/images/joseph_izang.png";
import teamYann from "../../assets/images/yann_levreau_better.png";
import teamFilip from  "../../assets/images/filip_mertens.png";
import teamRob from "../../assets/images/rob_stupay.png";
import teamAndrew from "../../assets/images/andrew_vermouth.png";
import TeamMemberCard from "../ui/TeamMemberCard";
import {Section} from "../../scroll-section";
import {sectionId} from "../../constants";

const Team = () => {
    const teamMembers = [
        {
            image: teamAndrew,
            name: 'Andrew Vermouth',
            position: 'Communications, Media / UX Research',
            twitterLink: "https://twitter.com/vermouth22",
            githubLink: null,
            linkedInLink: "https://www.linkedin.com/in/andrewvermouth/",
        },
        {
            image: teamAniket,
            name: 'Aniket',
            position: 'Developer - Remix libraries',
            twitterLink: null,
            githubLink: "https://github.com/Aniket-Engg",
            linkedInLink: null,
        },
        {
            image: teamDavid,
            name: 'David Disu',
            position: 'Developer - Testing / Remix IDE',
            twitterLink: "https://twitter.com/ioedeveloper",
            githubLink: "https://github.com/ioedeveloper",
            linkedInLink: "https://www.linkedin.com/in/ioedeveloper/",
        },
        {
            image: teamFilip,
            name: 'Filip Mertens',
            position: 'Developer - Remix Plugin',
            twitterLink: null,
            githubLink: "https://github.com/bunsenstraat/",
            linkedInLink: null,
        },
        {
            image: teamJoseph,
            name: 'Joseph Izang',
            position: 'Developer - React',
            twitterLink: null,
            githubLink: "https://github.com/joeizang",
            linkedInLink: "https://www.linkedin.com/in/joseph-izang-156b9449/",
        },
        {
            image: teamLiana,
            name: 'Liana Husikyan',
            position: 'Developer - Remix IDE / UX Research',
            twitterLink: "https://twitter.com/LianaHusikyan",
            githubLink: "https://github.com/lianahus",
            linkedInLink: "https://www.linkedin.com/in/liana-husikyan-b3a2a54/",
        },
        {
            image: teamRob,
            name: 'Rob Stupay',
            position: 'Developer - Remix IDE / UX and Community Manager',
            twitterLink: "https://twitter.com/ryestew",
            githubLink: "https://github.com/ryestew",
            linkedInLink: "https://www.linkedin.com/in/rob-stupay-2575778/",
        },
        {
            image: teamYann,
            name: 'Yann Levreau',
            position: 'Team Lead',
            twitterLink: "https://twitter.com/Yann300",
            githubLink: "https://github.com/yann300",
            linkedInLink: null,
        }
    ];

    return (
        <Section id={sectionId.team}>
            <div className="md:bg-team-desktop
        bg-team-mobile
        bg-no-repeat
        bg-team-background-position">
                <img src={teamMobileBck} className="md:hidden m-auto w-full" alt="team"/>
                <div className="sm:container sm:m-auto pb-20 pt-10 md:py-50 mx-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24">
                        <div>
                            <h1 className="font-sfProThin pb-2 md:text-8xl">REMIX TEAM</h1>
                            <p className="
                                font-sfProRegular
                                text-gray
                                text-lg pb-6">
                                The Remix Project team is headquartered in Berlin, Germany with team members
                                also working remotely from Armenia, India, the Netherlands, Nigeria, and USA.
                                Our work is funded by the Ethereum Foundation. We are passionate about the
                                Ethereum ecosystem and our work in the wider world of Web3. We are here to serve you.
                                Please reach out on our Discord or Twitter to ask us anything.
                            </p>
                        </div>
                    </div>
                    <div className="container mx-auto pb-20 pt-2">
                        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5  gap-7 w-full">
                            {
                                teamMembers.map((member) => (
                                    <TeamMemberCard
                                        name={member.name}
                                        image={member.image}
                                        position={member.position}
                                        twitterLink={member.twitterLink}
                                        githubLink={member.githubLink}
                                        linkedInLink={member.linkedInLink}
                                    />
                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>
        </Section>
    )
};

export default Team;
