import React, { useState, useEffect } from 'react';
import EventList from './pages/EventList';
import EventModal from './components/EventModal';
import './styles/App.css'; 
import background from './assets/background.jpg';
import cursor from './assets/cursor.png';

const App = () => {
    const [selectedEvent, setSelectedEvent] = useState(null); 
    const [showMainContent, setShowMainContent] = useState(false); // State to control main content visibility
    const [blastVisible, setBlastVisible] = useState(false); // State to control blast effect
    const [welcomeVisible, setWelcomeVisible] = useState(true); // State to control welcome text visibility

    useEffect(() => {
        const letters = document.querySelectorAll('.welcome-letter');
        letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.classList.add('fall'); // Trigger the falling animation
            }, index * 300); // Delay each letter by 300ms
        });

        // Show blast effect after letters animation
        setTimeout(() => {
            setBlastVisible(true); // Show blast effect
            setWelcomeVisible(false); // Hide welcome text
        }, letters.length * 300 + 500); // Timing for the blast effect

        // Show main content after blast effect
        setTimeout(() => {
            setBlastVisible(false); // Hide blast effect
            setShowMainContent(true); // Show main content
        }, letters.length * 300 + 2000); // Adjust timing as needed
    }, []);

    const appStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Make sure it covers the full viewport height
        overflow: 'hidden' // Prevent scrollbars during the animation
    };

    return (
        <div className="App" style={appStyle}>
            {/* WELCOME letters for the animation effect */}
            {welcomeVisible && (
                <div className="welcome-container">
                    {['W', 'e', 'l', 'c', 'o', 'm', 'e'].map((letter, index) => (
                        <span className="welcome-letter" key={index}>{letter}</span>
                    ))}
                </div>
            )}

            {/* Blast effect */}
            {blastVisible && <div className="blast"></div>}

            {/* Main content to display after animation */}
            {showMainContent && (
                <>
                    <EventList onEventClick={setSelectedEvent} />
                    <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
                </>
            )}
        </div>
    );
};

export default App;
