// // import React, { useState } from "react";
// // import styles from "./PublishRide.module.css";
// // import { GeoapifyGeocoderAutocomplete } from "@geoapify/react-geocoder-autocomplete";
// // import "@geoapify/geocoder-autocomplete/styles/minimal.css";

// // function PublishRide() {
// //   const [startLocation, setStartLocation] = useState("");

// //   const handlePlaceSelect = (place) => {
// //     console.log("Selected place:", place);
// //     setStartLocation(place.properties.formatted);
// //   };

// //   return (
// //     <div className={styles.transparentFormContainer}>
// //       <form className={styles.form}>
// //         <div>
// //           <GeoapifyGeocoderAutocomplete
// //             apiKey="3aaff2060bbe4f93a401592c7d914d2e"
// //             onPlaceSelect={handlePlaceSelect}
// //           />
// //         </div>
// //         <input
// //           type="text"
// //           placeholder="Start Location"
// //           value={startLocation}
// //           onChange={(e) => setStartLocation(e.target.value)}
// //         />
// //       </form>
// //     </div>
// //   );
// // }

// // export default PublishRide;

// import { useState } from "react";
// import styles from "./PublishRide.module.css";
// import {
//   GeoapifyContext,
//   GeoapifyGeocoderAutocomplete,
// } from "@geoapify/react-geocoder-autocomplete";
// import "@geoapify/geocoder-autocomplete/styles/minimal.css";
// function PublishRide({ onSubmit }) {
//   const [startLocation, setStartLocation] = useState("");
//   const [destination, setDestination] = useState("");
//   const [date, setDate] = useState("");
//   const [passengers, setPassengers] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const myRide = {
//       startLocation,
//       destination,
//       date,
//       passengers,
//     };
//     onSubmit(myRide);
//   };
//   console.log(startLocation);
//   return (
//     <div
//       //   className={styles.mainStyle}
//       //   style={{
//       //     backgroundColor: "rgba(255, 255, 255, 0.5)", // Transparent white background
//       //     padding: "20px",
//       //     borderRadius: "10px",
//       //     display: "flex",
//       //     flexDirection: "column", // Align children vertically
//       //     gap: "10px", // Add spacing between inputs
//       //   }}
//       className={styles.transparentFormContainer}
//     >
//       <form className={styles.form} onSubmit={handleSubmit}>
//         {/* <input>
//           <GeoapifyContext apiKey="3aaff2060bbe4f93a401592c7d914d2e">
//             <GeoapifyGeocoderAutocomplete
//               onChange={(e) => setStartLocation(e.target.value)}
//               onUserInput={(e) => setStartLocation(e.target.value)}
//               onPlaceSelect={(value) => {
//                 // setStartLocation(selectedPlace.properties.formatted);
//                 console.log(value);
//               }}
//               placeSelect={(value) => {
//                 console.log(value);
//               }}
//               // suggestionsChange={onSuggectionChange}
//             />
//           </GeoapifyContext>
//         </input> */}
//         {/* <GeoapifyContext apiKey="3aaff2060bbe4f93a401592c7d914d2e">
//           <div>
//             <GeoapifyGeocoderAutocomplete
//               onPlaceSelect={(value) => {
//                 // Handle selected place here
//                 console.log(value);
//               }}
//               onChange={(e) => setStartLocation(e.target.value)}
//             />
//           </div>
//         </GeoapifyContext> */}
//         <input
//           type="text"
//           placeholder="Start Location"
//           value={startLocation}
//           onChange={(e) => setStartLocation(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Destination"
//           value={destination}
//           onChange={(e) => setDestination(e.target.value)}
//         />
//         <input
//           type="date"
//           placeholder="Date"
//           className={styles.date}
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Passengers"
//           value={passengers}
//           onChange={(e) => setPassengers(e.target.value)}
//         />
//         <button type="submit">Search</button>
//       </form>
//       <img
//         src="/carpoolOpenDoor.png"
//         alt="Background"
//         className={styles.backgroundCar}
//       />
//     </div>
//   );
// }
// export default PublishRide;

import React, { useEffect, useState } from "react";
import styles from "./PublishRide.module.css";

function PublishRide({ onSubmit }) {
  const [startLocation, setStartLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [routeDescription, setRouteDescription] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState("");
  const [userData, setUserData] = useState(null);
  // const [finalData, setFinalData] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const myRide = {
      startLocation,
      destination,
      routeDescription,
      date,
      passengers,
    };

    // Make a POST request to your API endpoint
    fetch("http://localhost:3000/api/v1/rides/Ride", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"), // Include the authentication token if required
      },
      body: JSON.stringify(myRide),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Data after storing ride ${data}`);
        if (data.status === "ok") {
          // Handle success
          console.log("Ride published successfully!");
          // You can also reset the form fields if needed
          setStartLocation("");
          setDestination("");
          setRouteDescription("");
          setDate("");
          setPassengers("");
        } else {
          // Handle errors from the API response
          console.error("Failed to publish ride:", data.message);
        }
      })
      .catch((error) => {
        // Handle network or other errors
        console.error("Error publishing ride:", error);
      });
  };

  return (
    <div className={styles.transparentFormContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <select
          value={startLocation}
          onChange={(e) => setStartLocation(e.target.value)}
        >
          <option value="">Select Start city</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Thane">Thane</option>
          <option value="Kalyan">Kalyan</option>
          <option value="Dombivili">Dombivili</option>
          <option value="Pune">Pune</option>
          {/* Add more options as needed */}
        </select>
        <select
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        >
          <option value="">Select Destination city</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Thane">Thane</option>
          <option value="Kalyan">Kalyan</option>
          <option value="Dombivili">Dombivili</option>
          <option value="Pune">Pune</option>
          {/* Add more options as needed */}
        </select>
        <textarea
          placeholder="Route Description"
          value={routeDescription}
          onChange={(e) => setRouteDescription(e.target.value)}
        ></textarea>
        <input
          type="date"
          placeholder="Date"
          className={styles.date}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="number"
          placeholder="Passengers"
          value={passengers}
          onChange={(e) => setPassengers(e.target.value)}
        />
        <button type="submit">Publish ride</button>
      </form>
      <img
        src="/carpoolOpenDoor.png"
        alt="Background"
        className={styles.backgroundCar}
      />
    </div>
  );
}

export default PublishRide;
