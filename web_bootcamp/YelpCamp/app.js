// Load Express and dependencies
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const catchAsync = require("./utils/catchAsync");
const ExpressError = require("./utils/ExpressError");

// Express View Settings
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Express Middleware
app.use(express.urlencoded({ extended: true })); // Parse URL Encoded Data
app.use(methodOverride("_method")); // Gives Restful Functions to HTML
app.use(express.static(path.join(__dirname, "public"))); // Serve the public directory

// Logging Middleware
const morgan = require("morgan");
app.use(morgan("tiny")); // Logging Middleware

// Mongoose Configurations
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/yelp-camp");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("Database connected"));

// Session Configurations
const session = require("express-session");
const sessionConfig = {
  secret: "thisshouldbeabettersecret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    // secure: true, // Only works on HTTPS
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7, // 1 week
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};
app.use(session(sessionConfig));

// Flash Configurations
const flash = require("connect-flash");
app.use(flash());
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

// Express Routes
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
