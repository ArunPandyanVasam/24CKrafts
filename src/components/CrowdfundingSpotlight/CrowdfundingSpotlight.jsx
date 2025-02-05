import React, { useState, useEffect } from 'react';
import styles from './CrowdfundingSpotlight.module.css';

export const CrowdfundingSpotlight = () => {
  const [movies, setMovies] = useState([]);
  const [successStories, setSuccessStories] = useState([]);

  useEffect(() => {
    // Fetch ongoing campaigns (example)
    fetch('/crowdfundingMovies.json')
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error('Error fetching crowdfunding movies:', error));

    // Fetch successful movie campaigns (example)
    fetch('/successfulMovies.json')
      .then((response) => response.json())
      .then((data) => setSuccessStories(data))
      .catch((error) => console.error('Error fetching successful movie campaigns:', error));
  }, []);

  return (
    <div className={styles.crowdfundingSpotlightSection}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Crowdfunding for Small/Medium Budget Movies</h1>
        <p className={styles.heroDescription}>
          Are you ready to bring your movie idea to life? Crowdfund your project today and get the support you need from movie enthusiasts around the world!
        </p>
        <button className={styles.heroCtaButton}>Start Your Project</button>
      </div>

      {/* Current Campaigns */}
      <div className={styles.currentCampaigns}>
        <h2 className={styles.title}>Current Campaigns</h2>
        <div className={styles.movieList}>
          {movies.map((movie) => (
            <div key={movie.id} className={styles.movieCard}>
              <img src={movie.poster} alt={movie.title} className={styles.moviePoster} />
              <h3 className={styles.movieTitle}>{movie.title}</h3>
              <p className={styles.movieDescription}>{movie.description}</p>
              <div className={styles.progressBar}>
                <div
                  className={styles.progress}
                  style={{ width: `${(movie.funded / movie.goal) * 100}%` }}
                ></div>
              </div>
              <p className={styles.fundedAmount}>
                ${movie.funded.toLocaleString()} of ${movie.goal.toLocaleString()} funded
              </p>
              <button className={styles.ctaButton}>Support Now</button>
            </div>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div className={styles.successStories}>
        <h2 className={styles.title}>Success Stories</h2>
        <div className={styles.successList}>
          {successStories.map((story) => (
            <div key={story.id} className={styles.successCard}>
              <img src={story.poster} alt={story.title} className={styles.successPoster} />
              <h3 className={styles.successTitle}>{story.title}</h3>
              <p className={styles.successDescription}>{story.description}</p>
              <p className={styles.successFundedAmount}>
                ${story.funded.toLocaleString()} funded
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className={styles.faqSection}>
        <h2 className={styles.title}>Frequently Asked Questions</h2>
        <div className={styles.faqItem}>
          <h3>How does movie crowdfunding work?</h3>
          <p>Crowdfunding for movies allows creators to gather funds from individuals who support their idea. Supporters can contribute to the project in exchange for perks or rewards.</p>
        </div>
        <div className={styles.faqItem}>
          <h3>What happens if my movie project doesn't reach its funding goal?</h3>
          <p>If the goal is not met, the funds are typically refunded, and the project does not move forward.</p>
        </div>
        <div className={styles.faqItem}>
          <h3>How can I get involved as a supporter?</h3>
          <p>As a supporter, you can donate to any campaign you believe in and receive updates on the project. Some campaigns offer exclusive rewards for backers!</p>
        </div>
      </div>
    </div>
  );
};
