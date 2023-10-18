// import React, { useState, useEffect } from "react";
// import RideCard from "./RideCard"; // Create a RideCard component for displaying ride details
// import styles from "./SearchRide.module.css"; // Import module CSS

// function SearchRides() {
//   const [filters, setFilters] = useState({
//     startLocation: "", // Initially no start location selected
//     destination: "", // Initially no destination selected
//   });
//   const [rides, setRides] = useState([]);
//   const dummyRides = [
//     {
//       startLocation: "Thane",
//       destination: "Pune",
//       routeDescription: "xyz",
//       passengers: "3",
//       date: "2023-10-12",
//     },
//     {
//       startLocation: "Thane",
//       destination: "Kalyan",
//       routeDescription: "xyz",
//       passengers: "3",
//       date: "2023-10-12",
//     },
//     // Add more dummy rides as needed
//   ];
//   // // Function to handle form submission
//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     // Make a request to the backend API with the selected filters
//   //     const response = await fetch(
//   //       `http://localhost:3000/api/v1/rides?startLocation=${filters.startLocation}&destination=${filters.destination}`
//   //     );
//   //     if (response.ok) {
//   //       const data = await response.json();
//   //       setRides(data.rides);
//   //     } else {
//   //       console.error("Error fetching rides");
//   //     }
//   //   } catch (error) {
//   //     console.error("Error:", error);
//   //   }
//   // };

//   return (
//     <div>
//       <h1 className={styles.heading}>Search for Rides</h1>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <label className={styles.label}>
//           Start Location:
//           <select
//             value={filters.startLocation}
//             onChange={(e) =>
//               setFilters({ ...filters, startLocation: e.target.value })
//             }
//             className={styles.select}
//           >
//             <option value="">Select Start Location</option>
//             <option value="Pune">Pune</option>
//             <option value="Dombivili">Dombivili</option>
//             <option value="Kalyan">Kalyan</option>
//             <option value="Thane">Thane</option>
//             <option value="Mumbai">Mumbai</option>
//           </select>
//         </label>
//         <label className={styles.label}>
//           Destination:
//           <select
//             value={filters.destination}
//             onChange={(e) =>
//               setFilters({ ...filters, destination: e.target.value })
//             }
//             className={styles.select}
//           >
//             <option value="">Select Destination</option>
//             <option value="Pune">Pune</option>
//             <option value="Dombivili">Dombivili</option>
//             <option value="Kalyan">Kalyan</option>
//             <option value="Thane">Thane</option>
//             <option value="Mumbai">Mumbai</option>
//           </select>
//         </label>
//         <button type="submit" className={styles.button}>
//           Search
//         </button>
//       </form>
//       <div className={styles.rideCards}>
//         {rides.map((ride) => (
//           <RideCard key={ride._id} ride={ride} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SearchRides;
// import React, { useEffect, useState } from "react";
// import styles from "./SearchRide.module.css";
// import RideCard from "./RideCard";

// const dummyRides = [
//   {
//     startLocation: "Thane",
//     destination: "Pune",
//     routeDescription: "xyz",
//     passengers: "3",
//     date: "2023-10-12",
//   },
//   {
//     startLocation: "Thane",
//     destination: "Kalyan",
//     routeDescription: "xyz",
//     passengers: "3",
//     date: "2023-10-12",
//   },
//   {
//     startLocation: "Thane",
//     destination: "Kalyan",
//     routeDescription: "123abc",
//     passengers: "3",
//     date: "2023-10-12",
//   },
//   {
//     startLocation: "Thane",
//     destination: "Kalyan",
//     routeDescription: "123abc",
//     passengers: "3",
//     date: "2023-10-12",
//   },
//   {
//     startLocation: "Thane",
//     destination: "Kalyan",
//     routeDescription: "123abc",
//     passengers: "3",
//     date: "2023-10-12",
//   },
//   {
//     startLocation: "Thane",
//     destination: "Kalyan",
//     routeDescription: "123abc",
//     passengers: "3",
//     date: "2023-10-12",
//   },
//   // Add more dummy rides as needed
// ];

// function SearchRides() {
//   const [startLocation, setStartLocation] = useState("");
//   const [destination, setDestination] = useState("");
//   const [allRides, setAllRides] = useState([]);
//   const [filteredRides, setFilteredRides] = useState([]);

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Filter rides based on selected startLocation and destination
//     const filtered = dummyRides.filter(
//       (ride) =>
//         (!startLocation || ride.startLocation === startLocation) &&
//         (!destination || ride.destination === destination)
//     );

//     setFilteredRides(filtered);
//   };

//   return (
//     <div>
//       <h2 className={styles.heading}>Search Rides</h2>
//       <form className={styles.form} onSubmit={handleSubmit}>
//         <label className={styles.label}>
//           Start City:
//           <select
//             className={styles.select}
//             onChange={(e) => setStartLocation(e.target.value)}
//           >
//             <option value="">All</option>
//             <option value="Thane">Thane</option>
//             <option value="Kalyan">Kalyan</option>
//             <option value="Pune">Pune</option>
//             {/* Add more options as needed */}
//           </select>
//         </label>
//         <label className={styles.label}>
//           Destination City:
//           <select
//             className={styles.select}
//             onChange={(e) => setDestination(e.target.value)}
//           >
//             <option value="">All</option>
//             <option value="Pune">Pune</option>
//             <option value="Kalyan">Kalyan</option>
//             {/* Add more options as needed */}
//           </select>
//         </label>
//         <button className={styles.button} type="submit">
//           Search
//         </button>
//       </form>
//       <div className={styles.rideCards}>
//         {filteredRides.map((ride, index) => (
//           <RideCard key={index} ride={ride} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SearchRides;import React, { useState, useEffect } from "react";
import styles from "./SearchRide.module.css";
import RideCard from "./RideCard";
import PageNav from "./PageNav";
import { useState } from "react";

function SearchRides() {
  const [startLocation, setStartLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [filteredRides, setFilteredRides] = useState([]);

  // Function to fetch ride data from your API
  async function fetchRides(e) {
    e.preventDefault();

    try {
      // Fetch ride data from your API
      const response = await fetch("http://localhost:3000/api/v1/rides/Ride", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("token"),
        },
      });

      if (response.ok) {
        const data = await response.json();

        if (data.status === "ok") {
          // Log the received ride data for debugging
          console.log("All Rides:", data.data);
          return data.data.rides;
        } else {
          // Handle error from the API (e.g., token expired, not authenticated)
          alert("Error fetching ride data");
          return []; // Return an empty array in case of an error
        }
      } else {
        // Handle network error or other issues with the API request
        alert("Network error. Please try again later.");
        return []; // Return an empty array in case of a network error
      }
    } catch (error) {
      console.error("Error during ride data retrieval:", error);
      alert(
        "An error occurred while fetching ride data. Please try again later."
      );
      return []; // Return an empty array in case of an error
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ridesList = await fetchRides(e);
    console.log("Rides list:", ridesList);
    // Check if ridesList is an array before filtering
    if (Array.isArray(ridesList)) {
      // Get today's date
      const today = new Date();

      // Filter rides based on selected startLocation and destination, and ride date
      const filtered = ridesList.filter((ride) => {
        const rideDate = new Date(ride.date); // Convert ride date to a Date object
        return (
          (!startLocation || ride.startLocation === startLocation) &&
          (!destination || ride.destination === destination) &&
          rideDate > today // Filter based on date
        );
      });

      setFilteredRides(filtered);
    }
  };

  // Handle ride request
  const handleRequestRide = async (rideId) => {
    try {
      // Make an API request to request the ride
      console.log("ride id of filtered ride:", rideId);
      const response = await fetch(
        `http://localhost:3000/api/v1/rides/Ride/${rideId}/request`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": localStorage.getItem("token"),
          },
        }
      );
      console.log("response is :", response);

      if (response.ok) {
        const data = await response.json();

        if (data.status == "ok") {
          // Handle success, e.g., show a success message or update the UI
          alert("Ride requested successfully");
          // You can also update the UI to indicate that the ride has been requested
        } else {
          // Handle API response indicating an error
          alert("Error requesting ride: " + data.message);
        }
      } else {
        // Handle network error or other issues with the API request
        alert("Network error. Please try again later.");
      }
    } catch (error) {
      console.error("Error requesting ride:", error);
      alert(
        "An error occurred while requesting the ride. Please try again later."
      );
    }
  };

  return (
    <>
      <PageNav />
      <div style={{ marginTop: "5rem" }}>
        <h2 className={styles.heading}>Search Rides</h2>
        <form
          className={styles.form}
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label className={styles.label}>
            Start City:
            <select
              className={styles.select}
              onChange={(e) => setStartLocation(e.target.value)}
            >
              <option value="">All</option>
              <option value="Thane">Thane</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Dombivili">Dombivili</option>
              <option value="Kalyan">Kalyan</option>
              <option value="Pune">Pune</option>
              {/* Add more options as needed */}
            </select>
          </label>
          <label className={styles.label}>
            Destination City:
            <select
              className={styles.select}
              onChange={(e) => setDestination(e.target.value)}
            >
              <option value="">All</option>
              <option value="Thane">Thane</option>
              <option value="Dombivili">Dombivili</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Pune">Pune</option>
              <option value="Kalyan">Kalyan</option>
              {/* Add more options as needed */}
            </select>
          </label>
          <button className={styles.button} type="submit">
            Search
          </button>
        </form>
        <div className={styles.rideCards}>
          {filteredRides.map((ride, index) => (
            <RideCard
              key={index}
              ride={ride}
              userRole="user"
              context="search"
              onRequestRide={() => handleRequestRide(ride._id)} // Pass the rideId to handleRequestRide
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchRides;
