import React from "react";
import { ReactComponent as GitHubLogo } from "../../assets/images/github-icon.svg";
import { ReactComponent as TwitterLogo } from "../../assets/images/team-twitter-logo.svg";
import { ReactComponent as LinkedinLogo } from "../../assets/images/team-linkedin-logo.svg";

const TeamMemberCard = ({image, name, position, twitterLink, githubLink, linkedInLink}) => {
    return (
        <div
            className="grid bg-background rounded-lg border-bodyLight border py-5 px-4 w-full">
            <div className="h-[6rem] w-[6rem] mb-3">
                <img className="rounded-full" src={image} alt="team-member"/>
            </div>
            <div>

                <h5 className="font-latoBold text-body text-md ">{name}</h5>
                <p className="font-sfProRegular text-bodyLight text-sm mb-2">{position}</p>
            </div>
            <div className="flex flex-row items-center gap-4 mt-5">
                {
                    githubLink &&
                    <a href={githubLink} target="_blank"
                       rel="noreferrer">
                        <GitHubLogo className="text-primary w-5 h-5" alt="github"/>
                    </a>

                }
                {
                    twitterLink &&
                    <a href={twitterLink} target="_blank"
                       rel="noreferrer">
                        <TwitterLogo className="text-primary w-5 h-5" alt="twitter"/>
                    </a>
                }
                {
                    linkedInLink &&
                    <a  href={linkedInLink} target="_blank"
                       rel="noreferrer">
                        <LinkedinLogo className="text-primary w-5 h-5" alt="linkedin"/>
                    </a>
                }

            </div>
        </div>
    )
}

export default TeamMemberCard;
