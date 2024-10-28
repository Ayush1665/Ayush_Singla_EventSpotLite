// src/components/EventCard.js
import React from 'react';
import "../styles/EventCard.css";

const EventCard = ({ event, onClick }) => {
    const isUpcoming = new Date(event.date) > new Date(); // Check if the event is upcoming

    return (
        <div className="event-card" onClick={() => onClick(event)}>
            <div className="event-details">
                <h3 className="event-name">{event.name}</h3>
                <p className="event-date-location">
                    <strong>Date:</strong> {event.date}
                </p>
                <p className="event-location">
                    <strong>Location:</strong> {event.location}
                </p>
            </div>
        </div>
    );
};

export default EventCard;
