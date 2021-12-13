const express = require("express");

const app = express();

app.use(express.json());

const UserController = require("./controllers/user.controller");
app.use("/users", UserController);

const movieController = require("./controllers/movies.controller");
app.use("/movies", movieController);

const screenController = require("./controllers/screens.controllers");
app.use("/screens", screenController);

const seatController = require("./controllers/seats.controller");
app.use("/seats", seatController);

const theatreController = require("./controllers/theatre.controller");
app.use("/theatres", theatreController);

const showsController = require("./controllers/shows.controller");
app.use("/shows", showsController);

module.exports = app;