const express = require("express");
const userController = require("./../controllers/userController");
// const authController = require("./../controllers/authControllers");
const rideController = require("./../controllers/rideController");

const router = express.Router();
router
  .route("/Ride")
  .get(rideController.getMyProfileById, rideController.getAllRides)
  .post(rideController.getMyProfileById, rideController.createRide)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);
module.exports = router;
// router
//   .route("/Ride")
//   .post(rideController.getMyProfileById, rideController.createRide)
//   .patch(userController.updateUser)
//   .delete(userController.deleteUser);
// module.exports = router;
