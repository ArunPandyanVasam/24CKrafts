import React, { useState, useEffect } from "react";
import styles from "./EventTicketing.module.css";

export const EventTicketing = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedShowtime, setSelectedShowtime] = useState("");
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    fetch("/upcomingMovies.json")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
    setSelectedShowtime("");
    setSelectedSeats([]);
    setPaymentSuccess(false);
  };

  const handleSeatSelection = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  const handlePayment = () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
    }, 2000);
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Upcoming Movies</h2>
      <div className={styles.eventList}>
        {events.map((event) => (
          <div key={event.id} className={styles.eventCard}>
            <img src={event.poster} alt={event.title} className={styles.poster} />
            <h3>{event.title}</h3>
            <p>Releasing on: {event.releaseDate}</p>
            <button onClick={() => handleEventSelect(event)}>Get Tickets</button>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <div className={styles.bookingSection}>
          <h3>Book Tickets for {selectedEvent.title}</h3>
          <div>
            <label>Showtime: </label>
            <select value={selectedShowtime} onChange={(e) => setSelectedShowtime(e.target.value)}>
              <option value="">Select Time</option>
              {selectedEvent.showtimes.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>Seats: </label>
            <div className={styles.seatGrid}>
              {selectedEvent.seats.map((seat) => (
                <button
                  key={seat}
                  className={`${styles.seat} ${selectedSeats.includes(seat) ? styles.selectedSeat : ""}`}
                  onClick={() => handleSeatSelection(seat)}
                >
                  {seat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3>Payment</h3>
            {["Credit Card", "PayPal", "UPI"].map((method) => (
              <label key={method}>
                <input type="radio" name="payment" value={method} onChange={() => setPaymentMethod(method)} />
                {method}
              </label>
            ))}
          </div>

          <button onClick={handlePayment} disabled={!selectedShowtime || selectedSeats.length === 0}>
            Confirm Payment
          </button>

          {isProcessing && <p>Processing payment...</p>}
          {paymentSuccess && <p>Payment Successful! Your tickets are booked.</p>}
        </div>
      )}
    </section>
  );
};
