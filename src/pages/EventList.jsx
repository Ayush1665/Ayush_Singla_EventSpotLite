import React, { useState, useEffect, useRef } from 'react';
import events from '../data/events';
import "../styles/EventList.css";
import EventCard from '../components/EventCard';
import noresult from '../assets/noresult.png'; 
import offscreen from '../assets/offscreen.png'; 

const EventList = ({ onEventClick }) => {
    const [search, setSearch] = useState("");
    const [visibleCount, setVisibleCount] = useState(12);
    const [loading, setLoading] = useState(false);
    const [animateLogo, setAnimateLogo] = useState(false);
    const [showOffscreenImage, setShowOffscreenImage] = useState(false); // State for offscreen image visibility
    const listRef = useRef();
    let inactivityTimer = useRef(null); // Ref for the inactivity timer

    const filteredEvents = events.filter(event => 
        event.name.toLowerCase().includes(search.toLowerCase()) || 
        event.location.toLowerCase().includes(search.toLowerCase())
    );

    const loadMoreEvents = () => {
        setLoading(true);
        setTimeout(() => {
            setVisibleCount(prevCount => prevCount + 6);
            setLoading(false);
        }, 500);
    };

    const handleScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } = listRef.current;
        if (scrollTop + clientHeight >= scrollHeight && !loading) {
            loadMoreEvents();
        }
        resetInactivityTimer(); // Reset timer on scroll
    };

    const resetInactivityTimer = () => {
        if (inactivityTimer.current) {
            clearTimeout(inactivityTimer.current); // Clear the existing timer
        }
        setShowOffscreenImage(false); // Hide offscreen image
        inactivityTimer.current = setTimeout(() => {
            setShowOffscreenImage(true); // Show offscreen image after 30 seconds
        }, 30000); // 30 seconds
    };

    // Event handler for user activity
    const handleUserActivity = () => {
        resetInactivityTimer(); // Reset timer on any user activity
    };
    const handleLogoClick = () => {
        setAnimateLogo(true);
        // Use a timeout to allow animation to complete before refreshing
        setTimeout(() => {
            window.location.reload(); // Refresh the page
        }, 500); // Match the duration of the animation
    };

    // Setup event listeners for mouse, touch, and scroll
    useEffect(() => {
        const listElement = listRef.current;

        // Add event listeners
        listElement.addEventListener('scroll', handleScroll);
        listElement.addEventListener('mousemove', handleUserActivity);
        listElement.addEventListener('mousedown', handleUserActivity);
        listElement.addEventListener('touchstart', handleUserActivity);
        listElement.addEventListener('touchmove', handleUserActivity);

        resetInactivityTimer(); // Start the inactivity timer on mount

        return () => {
            // Cleanup event listeners on unmount
            listElement.removeEventListener('scroll', handleScroll);
            listElement.removeEventListener('mousemove', handleUserActivity);
            listElement.removeEventListener('mousedown', handleUserActivity);
            listElement.removeEventListener('touchstart', handleUserActivity);
            listElement.removeEventListener('touchmove', handleUserActivity);
            clearTimeout(inactivityTimer.current); // Clear timer
        };
    }, [loading]);

    return (
        <div 
            className="event-list" 
            ref={listRef} 
            style={{ maxHeight: '100vh', overflowY: 'auto', position: 'relative' }}
        >
            {/* Loading Bar */}
            {loading && (
                <div className="loading-bar"></div>
            )}
    
            <div className="header">
                <h1 
                    className={`logo-text ${animateLogo ? 'animate' : ''}`}
                    onClick={handleLogoClick} 
                >
                    EventSpot Lite
                </h1>
                <input 
                    type="text" 
                    placeholder="Search by name or location" 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                    className="search-input"
                />
            </div>
    
            {filteredEvents.length === 0 && search && (
                <div className="no-results" style={{ textAlign: 'center', marginTop: '20px' }}>
                    <img src={noresult} alt="No Results Found" style={{ width: '527px', height: 'auto' }} />
                    <h2>No Results Found</h2>
                </div>
            )}
    
            {filteredEvents.slice(0, visibleCount).map(event => (
                <EventCard key={event.id} event={event} onClick={onEventClick} />
            ))}
    
            {showOffscreenImage && (
                <div className="offscreen-image-container">
                    <img src={offscreen} alt="Offscreen" style={{ width: '150px', height: 'auto' }} />
                </div>
            )}
        </div>
    );    
};

export default EventList;
