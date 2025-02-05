// VideoPlayer.jsx
import React, { useRef, useState } from 'react';
import styles from './VideoPlayer.module.css';
import { FaPlay, FaPause, FaVolumeUp, FaExpand } from 'react-icons/fa';

export const VideoPlayer = ({ src, poster, title }) => {
  const videoRef = useRef(null);
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
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div className={styles.videoContainer}>
      <video ref={videoRef} poster={poster} className={styles.video}>
        <source src={src} type="video/mp4" />
      </video>
      <div className={styles.controls}>
        <button onClick={togglePlay}>{isPlaying ? <FaPause /> : <FaPlay />}</button>
        <FaVolumeUp className={styles.icon} />
        <button onClick={handleFullScreen}><FaExpand /></button>
      </div>
    </div>
  );
};