import React from "react";
import "swiper/css";
import "swiper/css/pagination";
const EventCard = ({name, date, location, description, image, UML }) => {
  return (
    <div className="rounded-lg p-3 h-[25.38rem] min-w-[17.28rem]">
      <div className="flex rounded-lg mb-2 h-[17.64rem]">
        <a href={UML} target="__blank">
          <img src={image} alt="event" className="w-full rounded-lg mb-2"/>
        </a>
      </div>
      <h5 className="font-latoBold text-black text-xl mb-1">{name}</h5>
      <h6 className="font-latoBold text-black text-sm mb-1">{`${date} - ${location}`}</h6>
      <p className="font-sfProRegular text-gray text-sm">{description}</p>
    </div>
  )
}

export default EventCard;
