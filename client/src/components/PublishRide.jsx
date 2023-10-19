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
import React, { useState } from "react";
import styles from "./PublishRide.module.css";
import axios from "axios";

function PublishRide({ onSubmit }) {
  const [startLocation, setStartLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [exactStartLocation, setExactStartLocation] = useState("");
  const [exactEndLocation, setExactEndLocation] = useState("");
  const [routeDescription, setRouteDescription] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState("");
  const [startCoordinates, setStartCoordinates] = useState([]);
  const [endCoordinates, setEndCoordinates] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use a geocoding API to convert startLocation to coordinates
    axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          exactStartLocation
        )}.json?access_token=pk.eyJ1IjoiZ2F1cmFuZzEyIiwiYSI6ImNsbmNzbHdqazBxZXcycW9heTI3ZDFubGwifQ.lL6YUAY2SYEfNNM10pIntQ`
      )
      .then((startResponse) => {
        const startCoordinates =
          startResponse.data.features[0].geometry.coordinates;
        console.log("Start Coordinates:", startCoordinates);
        setStartCoordinates(startCoordinates);

        // Perform geocoding for the end location as well
        axios
          .get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
              exactEndLocation
            )}.json?access_token=pk.eyJ1IjoiZ2F1cmFuZzEyIiwiYSI6ImNsbmNzbHdqazBxZXcycW9heTI3ZDFubGwifQ.lL6YUAY2SYEfNNM10pIntQ`
          )
          .then((endResponse) => {
            const endCoordinates =
              endResponse.data.features[0].geometry.coordinates;
            console.log("End Coordinates:", endCoordinates);
            setEndCoordinates(endCoordinates);

            // Create a new object with coordinates
            const myRide = {
              startLocation,
              destination,
              routeDescription,
              date,
              passengers,
              exactStartLocation,
              exactEndLocation,

              startCoordinates,
              endCoordinates,
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
                  alert("Ride published succesfully");

                  // You can also reset the form fields if needed
                  setStartLocation("");
                  setDestination("");
                  setExactStartLocation("");
                  setExactEndLocation("");
                  setRouteDescription("");
                  setDate("");
                  setPassengers("");
                  setStartCoordinates([]);
                  setEndCoordinates([]);
                } else {
                  // Handle errors from the API response
                  console.error("Failed to publish ride:", data.message);
                }
              })
              .catch((error) => {
                // Handle network or other errors
                console.error("Error publishing ride:", error);
              });
          })
          .catch((endError) => {
            console.error("Geocoding error for end location:", endError);
          });
      })
      .catch((startError) => {
        console.error("Geocoding error for start location:", startError);
      });
  };

  return (
    <div className={styles.transparentFormContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <select
          value={startLocation}
          onChange={(e) => setStartLocation(e.target.value)}
          style={{
            padding: "5px", // Add padding
            fontSize: "16px", // Set font size
            border: "1px solid #ccc", // Add a border
            borderRadius: "5px", // Add rounded corners
            width: "200px", // Set the width
            backgroundColor: "#f0f0f0", // Set the background color
            color: "black",
            fontFamily: "Times new Roman",
          }}
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
          style={{
            padding: "5px", // Add padding
            fontSize: "16px", // Set font size
            border: "1px solid #ccc", // Add a border
            borderRadius: "5px", // Add rounded corners
            width: "200px", // Set the width
            backgroundColor: "#f0f0f0", // Set the background color
            color: "black",
            fontFamily: "Times new Roman",
          }}
        >
          <option value="">Select Destination city</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Thane">Thane</option>
          <option value="Kalyan">Kalyan</option>
          <option value="Dombivili">Dombivili</option>
          <option value="Pune">Pune</option>
          {/* Add more options as needed */}
        </select>
        <input
          style={{ color: "white" }}
          type="text"
          placeholder="Source Landmark"
          value={exactStartLocation}
          onChange={(e) => setExactStartLocation(e.target.value)}
        />
        <input
          style={{ color: "white" }}
          type="text"
          placeholder="Destination Landmark"
          value={exactEndLocation}
          onChange={(e) => setExactEndLocation(e.target.value)}
        />
        <textarea
          style={{
            padding: "5px", // Add padding
            fontSize: "16px", // Set font size
            border: "1px solid #ccc", // Add a border
            borderRadius: "5px", // Add rounded corners
            width: "200px", // Set the width
            backgroundColor: "#f0f0f0", // Set the background color
            color: "black",
            fontFamily: "Times new Roman",
          }}
          placeholder="Route Description"
          value={routeDescription}
          onChange={(e) => setRouteDescription(e.target.value)}
        ></textarea>
        <input
          style={{
            color: "white",
          }}
          type="date"
          placeholder="Date"
          className={styles.date}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          style={{ color: "white" }}
          type="number"
          placeholder="0"
          value={passengers}
          onChange={(e) => setPassengers(e.target.value)}
        />
        <button type="submit">Publish ride</button>
      </form>
      <img
        style={{
          float: "right",
          top: "-34rem",
          left: "59rem",
          backgroundColor: "#FFFFDD",
        }}
        src="/carpoolOpenDoor.png"
        alt="Background"
        className={styles.backgroundCar}
      />
    </div>
  );
}

export default PublishRide;
