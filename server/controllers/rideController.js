const Ride = require("./../models/rideModels");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const jwt = require("jsonwebtoken");
const User = require("./../models/userModels");

exports.createRide = catchAsync(async (req, res, next) => {
  //   req.body.user = req.user.id;
  console.log(`this is reqbodyuser ${req.body.user}`);
  const ride = await Ride.create({
    user: req.user,
    startLocation: req.body.startLocation,
    destination: req.body.destination,
    exactStartLocation: req.body.exactStartLocation,
    exactEndLocation: req.body.exactEndLocation,
    startCoordinates: req.body.startCoordinates,
    endCoordinates: req.body.endCoordinates,
    routeDescription: req.body.routeDescription,
    // aprovalstatus: req.body.aprovalstatus,
    passengers: req.body.passengers,
    date: req.body.date,
  });

  res.status(201).json({
    success: true,
    ride,
  });
});
// router.get('/fetchAllProducts', async(req, res)=>{
//     try{
//         const products = await Product.find();
//         res.json(products)
//     }catch (error) {
//         console.error(error.message)
//         res.status(400).send("Internal Server Error.");
//     }
// })
exports.getAllRides = catchAsync(async (req, res) => {
  try {
    const rides = await Ride.find();
    res.json({
      status: "ok",
      data: {
        rides,
      },
    });
  } catch (error) {
    console.error(error.message);
    res.status(400).send("Internal Server Error.");
  }
});
exports.getMyProfileById = catchAsync(async (req, res, next) => {
  const token = req.headers["x-access-token"];

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    console.log(`ride controller ${data}`);
    req.user = data.id;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ status: "error", error: "Invalid token" });
  }
});
exports.requestRide = catchAsync(async (req, res, next) => {
  try {
    const { rideId } = req.params;
    const userId = req.user; // Assuming req.user already contains the user's ID

    const ride = await Ride.findById(rideId);

    if (!ride) {
      return next(new AppError("Ride not found", 404));
    }

    // Check if the user has already requested this ride
    const existingRequest = ride.rideRequests.find((request) =>
      request.equals(userId)
    );

    if (existingRequest) {
      return res.status(400).json({
        status: "error",
        error: "You have already requested this ride",
      });
    }

    // Add the user's ID to the ride's rideRequests array
    ride.rideRequests.push(userId);

    await ride.save();

    res.status(201).json({
      status: "ok",
      data: {
        message: "Ride requested successfully",
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      error: "Internal Server Error",
    });
  }
});
