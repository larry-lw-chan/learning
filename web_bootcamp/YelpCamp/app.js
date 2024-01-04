// ********************************************************
// * Load up Express and other dependencies
// ********************************************************
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const morgan = require("morgan");
const ejsMate = require("ejs-mate");
const catchAsync = require("./utils/catchAsync");
const ExpressError = require("./utils/ExpressError");
const AppError = require("./AppError.js");

// Express Settings
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(morgan("tiny"));

// ********************************************************
// * Mongoose Configurations
// ********************************************************
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/yelp-camp");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("Database connected"));

// ********************************************************
// * Express Routes
// ********************************************************
app.use("/campgrounds", require("./routes/campground"));
app.use("/campgrounds/:id/reviews", require("./routes/reviews"));
app.use("", require("./routes/pages"));

// Error Path (placed last)
app.all("*", (req, res, next) => {
  next(new ExpressError("Sorry, this is an bad error", 404));
});

// ********************************************************
// * Error Middleware
// ********************************************************
const { errorPage, handleValidationErr, pageNotFound } = require("./errors.js");

// Custom Error Middleware Handler
app.use(handleValidationErr);
app.use(errorPage);
app.use(pageNotFound);

// Turn on Server
app.listen(3000, () => {
  console.log("Serving on port 3000");
});
