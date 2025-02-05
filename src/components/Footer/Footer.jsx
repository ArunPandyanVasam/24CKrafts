import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Signup Section */}
      <div className={styles.signupSection}>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className={styles.signupForm}>
          <input
            type="email"
            placeholder="Enter your email"
            className={styles.emailInput}
          />
          <button className={styles.getStartedButton}>Get Started &gt;</button>
        </div>
      </div>

      {/* Footer Links */}
      <div className={styles.footerContent}>
        <p className={styles.footerText}>Questions? Call 000-800-919-1694</p>

        <div className={styles.footerLinks}>
          <ul>
            <li>FAQ</li>
            <li>Help Center</li>
            <li>Account</li>
            <li>Media Center</li>
          </ul>
          <ul>
            <li>Investor Relations</li>
            <li>Jobs</li>
            <li>Ways to Watch</li>
            <li>Terms of Use</li>
          </ul>
          <ul>
            <li>Privacy</li>
            <li>Cookie Preferences</li>
            <li>Corporate Information</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className={styles.languageSelector}>
          <select>
            <option>English</option>
            <option>हिन्दी</option>
          </select>
        </div>

        <p className={styles.copyright}>© 2024 24Krafts, Inc.</p>
      </div>
    </footer>
  );
};
