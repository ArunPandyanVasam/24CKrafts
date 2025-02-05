import React from "react";
import styles from "./HeroSection.module.css";

export const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Experience the Best in Entertainment</h1>
        <p className={styles.description}>
          Watch blockbuster movies and exclusive series. Anytime, anywhere.
        </p>
        <div className={styles.buttons}>
          <button className={styles.watchNow}>▶ Watch Now</button>
          <button className={styles.moreInfo}>ℹ More Info</button>
        </div>
      </div>
    </section>
  );
};
