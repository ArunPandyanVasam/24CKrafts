import React, { useState, useEffect } from "react";
import styles from "./TopTalents.module.css";

export const TopTalents = () => {
  const [talents, setTalents] = useState([]);

  useEffect(() => {
    fetch("/topTalents.json")
      .then((response) => response.json())
      .then((data) => setTalents(data))
      .catch((error) => console.error("Error fetching talents:", error));
  }, []);

  return (
    <section className={styles.topTalentsSection}>
      <h2 className={styles.title}>Top Talents</h2>
      <div className={styles.talentList}>
        {talents.map((talent) => (
          <div key={talent.id} className={styles.talentCard}>
            <img src={talent.image} alt={talent.name} className={styles.talentImage} />
            <h3 className={styles.talentName}>{talent.name}</h3>
            <p className={styles.talentProfession}>{talent.profession}</p>
            <button className={styles.likeButton}>❤️ {talent.likes}</button>
          </div>
        ))}
      </div>
    </section>
  );
};
