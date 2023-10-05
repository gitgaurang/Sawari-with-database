const mongoose = require("mongoose");
const { Schema } = mongoose;

const rideSchema = new Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "users",
  },
  startLocation: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  routeDescription: {
    type: String,
    required: true,
  },
  aprovalstatus: {
    type: Number,
    default: 0, // Initially set to 0
  },
  passengers: {
    type: String,
    required: true,
  },
  date: {
    // data: Buffer,       // Store the image binary data
    // contentType: String, // Store the content type of the image (e.g., 'image/jpeg')
    type: String,
    required: true,
  },
});

const Ride = mongoose.model("Ride", rideSchema);

module.exports = Ride;
// module.exports = mongoose.model("rides", RideSchema);