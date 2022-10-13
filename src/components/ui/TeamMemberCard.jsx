import React from "react";
import githubLogo from "../../assets/images/team-github-logo.svg";
import twitterLogo from "../../assets/images/team-twitter-logo.svg";
import linkedinLogo from "../../assets/images/team-linkedin-logo.svg";

const TeamMemberCard = ({image, name, position, twitterLink, githubLink, linkedInLink}) => {
    return (
        <div
            className="grid bg-white rounded-lg border-borderColor border py-5 px-4 w-full">
            <div className="h-[6rem] w-[6rem] mb-3">
                <img className="rounded-full" src={image} alt="team-member"/>
            </div>
            <div>

                <h5 className="font-latoBold text-black text-md ">{name}</h5>
                <p className="font-sfProRegular text-gray text-sm mb-2">{position}</p>
            </div>
            <div className="flex flex-row items-center gap-4 mt-5">
                {
                    githubLink &&
                    <a href={githubLink} target="_blank"
                       rel="noreferrer">
                        <img src={githubLogo} alt="github"/>
                    </a>

                }
                {
                    twitterLink &&
                    <a href={twitterLink} target="_blank"
                       rel="noreferrer">
                        <img src={twitterLogo} alt="twitter"/>
                    </a>
                }
                {
                    linkedInLink &&
                    <a  href={linkedInLink} target="_blank"
                       rel="noreferrer">
                        <img src={linkedinLogo} alt="linkedin"/>
                    </a>
                }

            </div>
        </div>
    )
}

export default TeamMemberCard;
