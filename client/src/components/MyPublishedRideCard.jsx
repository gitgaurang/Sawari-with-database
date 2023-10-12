// import React, { useState, useEffect } from "react";

// function MyPublishedRideCard({ ride, userRole, context }) {
//   const [rideRequest, setRideRequest] = useState({});
//   const [isRequestLoading, setIsRequestLoading] = useState(true);

//   // Fetch ride request data
//   const fetchRideRequestData = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:3000/api/v1/rides/ride/${ride._id}/ride-request`,
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             "x-access-token": localStorage.getItem("token"),
//           },
//         }
//       );

//       if (response.ok) {
//         const data = await response.json();
//         if (data.status === "ok") {
//           setRideRequest(data.data.rideRequest);
//         }
//       }
//     } catch (error) {
//       console.error("Error fetching ride request data:", error);
//     } finally {
//       setIsRequestLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchRideRequestData();
//   }, []);

//   const handleAcceptRide = async () => {
//     // Handle the logic to accept the ride
//     try {
//       const response = await fetch(
//         `http://localhost:3000/api/v1/rides/ride/${ride._id}/ride-request/${rideRequest._id}/accept`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//             "x-access-token": localStorage.getItem("token"),
//           },
//           body: JSON.stringify({}),
//         }
//       );

//       if (response.ok) {
//         // Handle success, e.g., show a success message or update the UI
//         alert("Ride request accepted successfully");
//         // You may want to refresh the ride request data after accepting
//         fetchRideRequestData();
//       } else {
//         // Handle API response indicating an error
//         alert("Error accepting ride request");
//       }
//     } catch (error) {
//       console.error("Error accepting ride request:", error);
//       alert(
//         "An error occurred while accepting the ride request. Please try again later."
//       );
//     }
//   };

//   const handleRejectRide = async () => {
//     // Handle the logic to reject the ride
//     try {
//       const response = await fetch(
//         `http://localhost:3000/api/v1/rides/ride/${ride._id}/ride-request/${rideRequest._id}/reject`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//             "x-access-token": localStorage.getItem("token"),
//           },
//           body: JSON.stringify({}),
//         }
//       );

//       if (response.ok) {
//         // Handle success, e.g., show a success message or update the UI
//         alert("Ride request rejected successfully");
//         // You may want to refresh the ride request data after rejecting
//         fetchRideRequestData();
//       } else {
//         // Handle API response indicating an error
//         alert("Error rejecting ride request");
//       }
//     } catch (error) {
//       console.error("Error rejecting ride request:", error);
//       alert(
//         "An error occurred while rejecting the ride request. Please try again later."
//       );
//     }
//   };

//   const renderStatusAndButtons = () => {
//     if (isRequestLoading) {
//       return <p>Loading...</p>;
//     }

//     if (rideRequest.currentStatus === 0) {
//       return (
//         <div>
//           <p>Status: Pending</p>
//           <button onClick={handleAcceptRide}>Accept Ride</button>
//           <button onClick={handleRejectRide}>Reject Ride</button>
//         </div>
//       );
//     } else if (rideRequest.currentStatus === 1) {
//       return <p>Status: Accepted</p>;
//     } else if (rideRequest.currentStatus === 2) {
//       return <p>Status: Rejected</p>;
//     }

//     return null;
//   };

//   return (
//     <div>
//       <h2>
//         {ride.exactStartLocation} to {ride.exactEndLocation}
//       </h2>
//       <p>Route Description: {ride.routeDescription}</p>
//       <p>Passengers: {ride.passengers}</p>
//       <p>Date: {ride.date}</p>
//       {renderStatusAndButtons()}
//     </div>
//   );
// }

// export default MyPublishedRideCard;

import React from "react";
import styles from "./MyPublishedRideCard.module.css";

function MyPublishedRideCard({ ride }) {
  console.log("HEloo ride ", ride);
  const handleAccept = async (requestId) => {
    console.log("hellllllllllllllllo", requestId);
    console.log("Rideeeeeeeeeeeeeee", ride._id);

    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/rides/ride/${ride._id}/accept-request/${requestId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({ action: "accept" }),
        }
      );

      if (response.ok) {
        // Handle success, e.g., show a success message or update the UI
        alert("Requsest accepted successfully ");
        console.log("Request accepted successfully");
        // You may want to update the local state or UI here
      } else {
        // Handle API response indicating an error
        console.error("Error accepting request");
        // Show an error message or handle the error
      }
    } catch (error) {
      console.error("Error accepting request:", error);
      // Show an error message or handle the error
    }
  };

  const handleReject = async (requestId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/rides/ride/${ride._id}/accept-request/${requestId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({ action: "reject" }),
        }
      );

      if (response.ok) {
        // Handle success, e.g., show a success message or update the UI
        alert("Requsest rejected successfully ");

        console.log("Request rejected successfully");
        // You may want to update the local state or UI here
      } else {
        // Handle API response indicating an error
        console.error("Error rejecting request");
        // Show an error message or handle the error
      }
    } catch (error) {
      console.error("Error rejecting request:", error);
      // Show an error message or handle the error
    }
  };
  // ride.rideRequests.forEach((request, index) => {
  //   console.log("hellllllllllllllllo", request._id);
  // });

  return (
    <div className={styles.card}>
      <h2>Ride Details</h2>
      <br></br>
      {ride.rideRequests.map((request, index) => (
        <div key={index} className={styles.mainCard}>
          <h3>Request from {request.userDetails.name}</h3>
          <h2 className={styles.title}>
            {ride.exactStartLocation} to {ride.exactEndLocation}
          </h2>
          <p>{request.userDetails.email}</p>
          <p>Message: {request.userDetails.message}</p>
          <p>Request Date: {request.userDetails.requestDate}</p>
          <button onClick={() => handleAccept(request._id)}>Accept</button>
          <button onClick={() => handleReject(request._id)}>Reject</button>
        </div>
      ))}
    </div>
  );
}

export default MyPublishedRideCard;
