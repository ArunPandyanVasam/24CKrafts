import React, { useState, useEffect } from "react";
import styles from "./JobListings.module.css";

export const JobListings = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("/jobListings.json")
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  return (
    <div className={styles.jobListingsSection}>
      <h2 className={styles.title}>Job Listings</h2>
      <div className={styles.jobList}>
        {jobs.map((job) => (
          <div key={job.id} className={styles.jobCard}>
            <h3 className={styles.jobTitle}>{job.position}</h3>
            <p className={styles.company}>{job.company}</p>
            <p className={styles.location}>Location: {job.location}</p>
            <p className={styles.salary}>Salary: {job.salary}</p>
            <p className={styles.jobDescription}>{job.description}</p>
            <button className={styles.applyButton}>Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};
