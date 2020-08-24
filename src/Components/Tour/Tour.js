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
    <header>
      TOUR
    <div className="tour-container">
      <div className="event-grid">
        {events.map((json) => {
          // Date processing
          let date = new Date(json.datetime);
          var formattedDate = ('0' + date.getDate()).slice(-2);
          var formattedMonth = ('0' + (date.getMonth() + 1)).slice(-2);
          var formattedYear = date.getFullYear().toString().substr(2,2);
          var dateString = formattedMonth + '/' + formattedDate + '/' + formattedYear;


          
          return (
            <>
              <div className="location">{json.venue.city},{json.venue.region} | {json.venue.name}</div>
    
              <div className="time">{dateString} </div>

              <div className="buttons"></div>

            </>
          );
        })}
      </div>
    </div>
    </header>
  );
};
