import React, { useState, useEffect } from 'react';
import styles from './UpcomingEvents.module.css';

export const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/UpcomingEvents.json") // Fetching data from public folder
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching upcoming events:', error));
  }, []);

  // Function to calculate the remaining time
  const getTimeRemaining = (eventDate) => {
    const targetDate = new Date(eventDate).getTime();
    const currentDate = new Date().getTime();
    const timeLeft = targetDate - currentDate;

    if (timeLeft <= 0) {
      return "Event Started!";
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className={styles.upcomingEventsSection}>
      <h2 className={styles.title}>Upcoming Events</h2>
      <div className={styles.eventList}>
        {events.map((event) => (
          <div key={event.id} className={styles.eventCard}>
            <img src={event.poster} alt={event.title} className={styles.eventPoster} />
            <h3 className={styles.eventTitle}>{event.title}</h3>
            <p className={styles.eventDate}>{new Date(event.date).toLocaleDateString()}</p>
            <p className={styles.eventDescription}>{event.description}</p>
            <p className={styles.countdown}>
              {getTimeRemaining(event.date)} {/* Displaying the countdown */}
            </p>
            <button className={styles.ctaButton}>Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};
