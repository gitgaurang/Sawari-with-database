import React, { useState } from "react";
import styles from "./RideCard.module.css";
import MapModal from "./MapModal"; // Import the MapModal component

function RideCard({ ride, userRole, context, onRequestRide }) {
  const [showMapModal, setShowMapModal] = useState(false);

  const renderButton = () => {
    if (context === "search" && userRole === "user") {
      // Display request ride and show map buttons for SearchRide.jsx
      return (
        <div>
          <button className={styles.button} onClick={onRequestRide}>
            Request Ride
          </button>
          <button
            className={styles.button}
            onClick={() => setShowMapModal(true)}
          >
            Show Map
          </button>
        </div>
      );
    } else if (context === "myPublished" && userRole === "publisher") {
      // Display accept/reject buttons for MyPublishedRides.jsx
      return (
        <div>
          <button className={styles.acceptButton} onClick={handleAcceptRide}>
            Accept Ride
          </button>
          <button className={styles.rejectButton} onClick={handleRejectRide}>
            Reject Ride
          </button>
        </div>
      );
    } else {
      // No button for MyRequestedRides.jsx or other cases
      return null;
    }
  };

  const handleAcceptRide = () => {
    // Handle the logic to accept the ride
  };

  const handleRejectRide = () => {
    // Handle the logic to reject the ride
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>
        {ride.startLocation} to {ride.destination}
      </h2>
      <p className={styles.description}>Route: {ride.routeDescription}</p>
      <p className={styles.passengers}>Passengers: {ride.passengers}</p>
      <p className={styles.date}>Date: {ride.date}</p>
      {context !== "myRequested" && (
        <p className={styles.approvalStatus}>
          Approval Status: {ride.approvalStatus}
        </p>
      )}
      {renderButton()}

      {/* Render the MapModal when showMapModal state is true */}
      {showMapModal && (
        <MapModal ride={ride} onClose={() => setShowMapModal(false)} />
      )}
    </div>
  );
}

export default RideCard;
