import React, { useState } from "react";
import styles from "./SettingsPrivacy.module.css";

export const SettingsPrivacy = () => {
  const [settings, setSettings] = useState({
    username: "JohnDoe",
    email: "johndoe@example.com",
    password: "",
    visibility: "public",
    notifications: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className={styles.settingsContainer}>
      <h2 className={styles.title}>Settings & Privacy</h2>

      {/* Profile Settings */}
      <div className={styles.section}>
        <h3>Profile Settings</h3>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={settings.username}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={settings.email}
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={settings.password}
          onChange={handleChange}
        />
      </div>

      {/* Privacy Settings */}
      <div className={styles.section}>
        <h3>Privacy Settings</h3>
        <label>Account Visibility</label>
        <select
          name="visibility"
          value={settings.visibility}
          onChange={handleChange}
        >
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select>

        <label>
          <input
            type="checkbox"
            name="notifications"
            checked={settings.notifications}
            onChange={handleChange}
          />
          Enable Notifications
        </label>
      </div>

      {/* Security */}
      <div className={styles.section}>
        <h3>Security</h3>
        <div className={styles.buttonGroup}>
          <button className={styles.dangerBtn}>
            Enable Two-Factor Authentication
          </button>
          <button className={styles.dangerBtn}>Reset Password</button>
        </div>
      </div>

      {/* Delete Account */}
      <div className={styles.section}>
        <h3>Account Deletion</h3>
        <button className={styles.deleteBtn}>Delete Account</button>
      </div>
    </div>
  );
};
