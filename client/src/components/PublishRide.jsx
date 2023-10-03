import { useState } from "react";
import styles from "./PublishRide.module.css";
import {
  GeoapifyContext,
  GeoapifyGeocoderAutocomplete,
} from "@geoapify/react-geocoder-autocomplete";
import "@geoapify/geocoder-autocomplete/styles/minimal.css";
function PublishRide({ onSubmit }) {
  const [startLocation, setStartLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      startLocation,
      destination,
      date,
      passengers,
    };
    onSubmit(formData);
  };
  console.log(startLocation);
  return (
    <div
      //   className={styles.mainStyle}
      //   style={{
      //     backgroundColor: "rgba(255, 255, 255, 0.5)", // Transparent white background
      //     padding: "20px",
      //     borderRadius: "10px",
      //     display: "flex",
      //     flexDirection: "column", // Align children vertically
      //     gap: "10px", // Add spacing between inputs
      //   }}
      className={styles.transparentFormContainer}
    >
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* <input
          type="text"
          placeholder="Start Location"
          value={startLocation}
          onChange={(e) => setStartLocation(e.target.value)}
        /> */}
        {/* <input>
          <GeoapifyContext apiKey="3aaff2060bbe4f93a401592c7d914d2e">
            <GeoapifyGeocoderAutocomplete
              onChange={(e) => setStartLocation(e.target.value)}
              onUserInput={(e) => setStartLocation(e.target.value)}
              onPlaceSelect={(value) => {
                // setStartLocation(selectedPlace.properties.formatted);
                console.log(value);
              }}
              placeSelect={(value) => {
                console.log(value);
              }}
              // suggestionsChange={onSuggectionChange}
            />
          </GeoapifyContext>
        </input> */}
        <GeoapifyContext apiKey="3aaff2060bbe4f93a401592c7d914d2e">
          <div>
            <GeoapifyGeocoderAutocomplete
              onPlaceSelect={(value) => {
                // Handle selected place here
                console.log(value);
              }}
            />
          </div>
        </GeoapifyContext>
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
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
        <button type="submit">Search</button>
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
