import React, { useState, useEffect } from "react";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { Footer } from "../../components/Footer/Footer";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { VideoPlayer } from "../../components/VideoPlayer/VideoPlayer";
import { PersonalPage } from "../../components/PersonalPage/PersonalPage";
import styles from "./Profile.module.css"; // Import Profile styles

export const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Mock user data
    const fetchedUser = {
      profilePic: '/assets/profile/profile.jpg',
      name: 'John Doe',
      bio: 'Movie Enthusiast. Passionate about the art of filmmaking. Exploring the world of creativity and storytelling.',
    };
    setUser(fetchedUser);
  }, []);

  return (
    <div className={styles.profilePage}>
      <HeroSection />
      <SearchBar />
      <div className={styles.videoSection}>
        <VideoPlayer videoFile="sample.mp4" />
      </div>
      
      {/* Profile Header */}
      {user && (
        <div className={styles.profileHeader}>
          <div className={styles.profilePicWrapper}>
            <img
              className={styles.profilePic}
              src={user.profilePic}
              alt={user.name}
            />
          </div>
          <div className={styles.profileInfo}>
            <h1>{user.name}</h1>
            <p>{user.bio}</p>
          </div>
        </div>
      )}

      {/* PersonalPage Component */}
      {user && <PersonalPage user={user} />}

      <Footer />
    </div>
  );
};
