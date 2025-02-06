import React from 'react';
import styles from './PersonalPage.module.css';

export const PersonalPage = ({ user }) => {
  return (
    <div className={styles.container}>
      <div className={styles.profileHeader}>
        <img className={styles.profilePic} src={user.profilePic} alt="Profile" />
        <div className={styles.profileInfo}>
          <h1>{user.name}</h1>
          <p>{user.bio}</p>
        </div>
      </div>
      <div className={styles.activity}>
        <h2>Recent Activity</h2>
        <ul>
          <li>Watched "The Dark Knight"</li>
          <li>Followed John Doe</li>
        </ul>
      </div>
      <div className={styles.connections}>
        <h2>Connections</h2>
        <div className={styles.connection}>
          <img src="/assets/profile/profile.jpg" alt="User 1" />
          <span>User 1</span>
        </div>
      </div>
    </div>
  );
};

