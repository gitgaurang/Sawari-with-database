import React from "react";
import RideCard from "../components/RideCard";

function MyPublishedRides() {
  const dummyPublishedRides = [
    {
      startLocation: "Thane",
      destination: "Pune",
      routeDescription: "xyz",
      passengers: "3",
      date: "2023-10-12",
      approvalStatus: "Pending", // Add approval status for published rides
    },
    // Add more dummy published rides as needed
  ];

  return (
    <div>
      <h2>My Published Rides</h2>
      <div>
        {dummyPublishedRides.map((ride, index) => (
          <RideCard
            key={index}
            ride={ride}
            userRole="publisher"
            context="myPublished"
          />
        ))}
      </div>
    </div>
  );
}

export default MyPublishedRides;
