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
      <div className='parallax'>
        
      </div>
      <div className="tour-container">
        <div className="event-grid">
          {events.map((json) => {
            // Date processing
            let date = new Date(json.datetime);
            var formattedDate = ('0' + date.getDate()).slice(-2);
            var formattedMonth = ('0' + (date.getMonth() + 1)).slice(-2);
            var formattedYear = date.getFullYear().toString().substr(2, 2);
            var dateString = formattedMonth + '/' + formattedDate + '/' + formattedYear;
            var button = "#";
            if(json.offers){
            json.offers.map((offer) => {
              if (offer.type == "Tickets")
                var button = offer.url;
              else if (!offer) {
                var button = "#";
              }
            })}



            return (
              <div className="row">
                <div className="location">
                  <p> {`${json.venue.city}, ${json.venue.region}`} </p>  <i> <p className ="venue-name"> {`${json.venue.name}`}  </p> </i>
                </div>

                <div className="time"> {dateString} </div>

                <div className="buttons"><a href={button}>GET TICKETS</a></div>

              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
};
