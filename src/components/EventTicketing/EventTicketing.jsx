import React, { useState, useEffect } from "react";
import styles from "./EventTicketing.module.css";

export const EventTicketing = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedShowtime, setSelectedShowtime] = useState("");
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    fetch("/upcomingMovies.json")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) =>
        console.error("Error fetching upcoming events:", error)
      );
  }, []);

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
    setSelectedShowtime("");
    setSelectedSeats([]);
    setPaymentSuccess(false);
  };

  const handleSeatSelection = (seat) => {
    setSelectedSeats((prevSeats) =>
      prevSeats.includes(seat)
        ? prevSeats.filter((s) => s !== seat)
        : [...prevSeats, seat]
    );
  };

  const handlePayment = () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }
    setTimeout(() => {
      setPaymentSuccess(true);
    }, 2000);
  };

  return (
    <section className={styles.eventTicketing}>
      <h2 className={styles.title}>Upcoming Movies</h2>
      <div className={styles.eventList}>
        {events.map((event) => (
          <div key={event.id} className={styles.eventCard}>
            <img
              src={event.poster}
              alt={event.title}
              className={styles.eventPoster}
            />
            <h3 className={styles.eventTitle}>{event.title}</h3>
            <p className={styles.eventDate}>
              Releasing on: {event.releaseDate}
            </p>
            <button
              className={styles.ticketButton}
              onClick={(e) => {
                e.stopPropagation(); // Prevents parent div click
                handleEventSelect(event);
              }}
            >
              Get Tickets
            </button>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <div className={styles.bookingSection}>
          <h3 className={styles.sectionTitle}>
            Book Tickets for {selectedEvent.title}
          </h3>

          <div className={styles.showtimeSelection}>
            <label>Select Showtime:</label>
            <select
              value={selectedShowtime}
              onChange={(e) => setSelectedShowtime(e.target.value)}
            >
              <option value="">Choose a time</option>
              {selectedEvent.showtimes.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.seatSelection}>
            <label>Select Seats:</label>
            <div className={styles.seatGrid}>
              {selectedEvent.seats.map((seat) => (
                <button
                  key={seat}
                  className={`${styles.seat} ${
                    selectedSeats.includes(seat) ? styles.selectedSeat : ""
                  }`}
                  onClick={() => handleSeatSelection(seat)}
                >
                  {seat}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.paymentSection}>
            <h3>Payment Method</h3>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="creditCard"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Credit/Debit Card
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              PayPal
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="upi"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              UPI (Google Pay, PhonePe, etc.)
            </label>
          </div>

          <button
            className={styles.bookNowButton}
            onClick={handlePayment}
            disabled={!selectedShowtime || selectedSeats.length === 0}
          >
            Confirm Payment
          </button>

          {paymentSuccess && (
            <p className={styles.successMessage}>
              Payment Successful! Your tickets are booked.
            </p>
          )}
        </div>
      )}
    </section>
  );
};
