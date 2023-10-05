import React from "react";
import RideCard from "../components/RideCard";

function MyRequestedRides() {
  const dummyRequestedRides = [
    {
      startLocation: "Thane",
      destination: "Pune",
      routeDescription: "xyz",
      passengers: "3",
      date: "2023-10-12",
      approvalStatus: "Pending", // Add approval status for requested rides
    },
    // Add more dummy requested rides as needed
  ];

  return (
    <div>
      <h2>My Requested Rides</h2>
      <div>
        {dummyRequestedRides.map((ride, index) => (
          <RideCard key={index} ride={ride} context="myRequested" />
        ))}
      </div>
    </div>
  );
}

export default MyRequestedRides;
