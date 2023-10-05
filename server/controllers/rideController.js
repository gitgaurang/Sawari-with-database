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
