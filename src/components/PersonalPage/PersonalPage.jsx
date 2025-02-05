import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PersonalPage.module.css';

export const PersonalPage = ({ user }) => {
  return (
    <div className={styles.container}>
      {/* Profile Header */}
      <div className={styles.profileHeader}>
        <img className={styles.profilePic} src={user.profilePic} alt="Profile" />
        <div className={styles.profileInfo}>
          <h1>{user.name}</h1>
          <p>{user.bio}</p>
          <Link to="/edit-profile" className={styles.editButton}>Edit Profile</Link>
        </div>
      </div>

      {/* Tabs Section */}
      <div className={styles.tabs}>
        <button className={styles.tabButton}>Activity</button>
        <button className={styles.tabButton}>Connections</button>
      </div>

      {/* Activity Section */}
      <div className={styles.activity}>
        <h2>Recent Activity</h2>
        <ul className={styles.activityList}>
          <li>Watched "The Dark Knight"</li>
          <li>Followed John Doe</li>
          <li>Joined "Film Buffs" group</li>
          {/* Add dynamic activity data here */}
        </ul>
      </div>

      {/* Connections Section */}
      <div className={styles.connections}>
        <h2>Connections</h2>
        <div className={styles.connectionList}>
          <div className={styles.connection}>
            <img className={styles.connectionPic} src="user1.jpg" alt="User 1" />
            <span>User 1</span>
          </div>
          <div className={styles.connection}>
            <img className={styles.connectionPic} src="user2.jpg" alt="User 2" />
            <span>User 2</span>
          </div>
          {/* Add dynamic connections data here */}
        </div>
      </div>
    </div>
  );
};
