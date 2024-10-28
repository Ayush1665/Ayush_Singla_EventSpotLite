// src/components/EventModal.jsx
import React, { useEffect, useState } from 'react';
import "../styles/EventModal.css";

const EventModal = ({ event, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (event) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [event]);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 1000); // Wait for the fade-out transition to finish before calling onClose
    };

    if (!event && !isVisible) return null; // Return null if no event is selected and not visible

    return (
        <div className={`modal-overlay ${isVisible ? 'fade-in' : 'fade-out'}`} onClick={handleClose}>
            <button className="close-button" onClick={handleClose}>✖</button> {/* Close button outside the modal */}
            <div className={`modal-content ${isVisible ? 'scale-in' : 'scale-out'}`} onClick={(e) => e.stopPropagation()}>
                <div className="modal-container">
                    <div className="image-container">
                        <img src={event.image} alt={event.name} className="event-image" />
                    </div>
                    <div className="text-content">
                        <h2 className="modal-name">{event.name}</h2>
                        <p className="event-date-location">{event.date} | {event.location}</p>
                        <p className="event-description">{event.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventModal;
