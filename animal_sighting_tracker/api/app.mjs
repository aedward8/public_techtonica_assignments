//var createError = require("http-errors");
//var express = require("express");
import express from "express";
//var path = require("path");
import * as path from "path";
// var cookieParser = require("cookie-parser");
// var logger = require("morgan");
// var cors = require("cors");
import cors from "cors";
import * as db from "./db.mjs";

//var indexRouter = require("./routes/index");
// var usersRouter = require("./routes/users");
// var testAPIRouter = require("./routes/testAPI");

const app = express();

// view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "jade");

app.use(cors());
//app.use(logger("dev"));
// Express's version of body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

// ROUTES

// Get all sightings
app.get("/sights", async (req, res) => {
  try {
    const sights = await db.getSights();
    // turn JS into JSON
    res.json(sights);
  } catch (err) {
    console.log(err);
  }
});

// Create a New Sighting
app.post("/sights", async (req, res) => {
  try {
    const { sighting_time, individual_id, location, health, email } = req.body;
    const newSight = await db.addSight(
      sighting_time,
      individual_id,
      location,
      health,
      email
    );
    // turn JS to JSON
    res.status(201).json(newSight);
  } catch (err) {
    console.log(err);
  }
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(9001, () => {
  console.log("I am listening on Port 9001");
});

//module.exports = app;
