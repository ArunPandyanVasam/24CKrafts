import React, { useRef, useState } from 'react';
import styles from './VideoPlayer.module.css';

export const VideoPlayer = ({ videoFile }) => {
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleFullScreen = () => {
    if (videoContainerRef.current) {
      videoContainerRef.current.classList.toggle(styles.fullscreen);
    }

    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div ref={videoContainerRef} className={styles.videoPlayerContainer}>
      <video ref={videoRef} className={styles.video} controls>
        <source src={`/videos/${videoFile}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.controls}>
        <button onClick={togglePlay}>
          {isPlaying ? (
            <i className="fas fa-pause" />  // Font Awesome Pause Icon
          ) : (
            <i className="fas fa-play" />   // Font Awesome Play Icon
          )}
        </button>
        <button onClick={handleFullScreen}>
          <i className="fas fa-expand" />
        </button>
      </div>
    </div>
  );
};
