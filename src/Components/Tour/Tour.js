import React, { useEffect, useState } from "react";
import "./Tour.css";
import { Band } from "../../util/Band";

export const Tour = (props) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    Band.getEventList().then((eventList) => {
      setEvents(eventList);
    });
  }, []);
  console.log(events);
  return (
    <div className="tour-container">
      <div className="event-grid">
        {events.map((json) => {
          return (
            <>
              <div className="location">{json.venue.city},{json.venue.country}|{json.venue.name}</div>
    
              <div className="time">{json.datetime}</div>

              <div className="buttons"></div>
            </>
          );
        })}
      </div>
    </div>
  );
};
