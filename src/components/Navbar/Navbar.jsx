import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.navbar}>
      <img className={styles.logo} src="/assets/navbar/logo.png" alt="Logo" />

      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/crowdfunding">Crowdfunding</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/jobs">Jobs</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>

      <button className={styles.signIn}>Sign In</button>

      {/* Hamburger Icon for Mobile */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span
          className={`${styles.bar} ${isMenuOpen ? styles.cross : ""}`}
        ></span>
        <span
          className={`${styles.bar} ${isMenuOpen ? styles.cross : ""}`}
        ></span>
        <span
          className={`${styles.bar} ${isMenuOpen ? styles.cross : ""}`}
        ></span>
      </div>
    </div>
  );
};
