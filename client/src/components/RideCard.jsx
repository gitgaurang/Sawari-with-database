import React from "react";
import styles from "./RideCard.module.css"; // Import module CSS

function RideCard({ ride }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>
        {ride.startLocation} to {ride.destination}
      </h2>
      <p className={styles.description}>Route: {ride.routeDescription}</p>
      <p className={styles.passengers}>Passengers: {ride.passengers}</p>
      <p className={styles.date}>Date: {ride.date}</p>
    </div>
  );
}

export default RideCard;
