import React, { useState, useEffect } from 'react';
import styles from './CrowdfundingSpotlight.module.css';

export const CrowdfundingSpotlight = () => {
  const [movies, setMovies] = useState([]);
  const [successStories, setSuccessStories] = useState([]);

  useEffect(() => {
    fetch('/crowdfundingMovies.json')
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error('Error fetching crowdfunding movies:', error));

    fetch('/successfulMovies.json')
      .then((response) => response.json())
      .then((data) => setSuccessStories(data))
      .catch((error) => console.error('Error fetching successful movie campaigns:', error));
  }, []);

  return (
    <div className={styles.crowdfundingSpotlightSection}>
      <div className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Crowdfunding for Small/Medium Budget Movies</h1>
        <p className={styles.heroDescription}>
          Bring your movie idea to life with the power of community support.
        </p>
        <button className={styles.heroCtaButton}>Start Your Project</button>
      </div>

      <div className={styles.currentCampaigns}>
        <h2 className={styles.title}>Current Campaigns</h2>
        <div className={styles.movieList}>
          {movies.map((movie) => (
            <div key={movie.id} className={styles.movieCard}>
              <img src={movie.poster} alt={movie.title} className={styles.moviePoster} />
              <div className={styles.movieInfo}>
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
            </div>
          ))}
        </div>
      </div>

      <div className={styles.successStories}>
        <h2 className={styles.title}>Success Stories</h2>
        <div className={styles.successList}>
          {successStories.map((story) => (
            <div key={story.id} className={styles.successCard}>
              <img src={story.poster} alt={story.title} className={styles.successPoster} />
              <div className={styles.successInfo}>
                <h3 className={styles.successTitle}>{story.title}</h3>
                <p className={styles.successDescription}>{story.description}</p>
                <p className={styles.successFundedAmount}>
                  ${story.funded.toLocaleString()} funded
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.faqSection}>
        <h2 className={styles.title}>Frequently Asked Questions</h2>
        <div className={styles.faqItem}>
          <h3>How does movie crowdfunding work?</h3>
          <p>Creators gather funds from supporters in exchange for perks.</p>
        </div>
        <div className={styles.faqItem}>
          <h3>What if my project doesn’t reach its goal?</h3>
          <p>Funds are typically refunded, and the project won’t move forward.</p>
        </div>
        <div className={styles.faqItem}>
          <h3>How can I support a project?</h3>
          <p>You can donate and receive updates or rewards from campaigns.</p>
        </div>
      </div>
    </div>
  );
};
