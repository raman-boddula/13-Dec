const express = require("express");

const app = express();

app.use(express.json());

const Upload = require("./middlewares/upload")

const { register, login } = require("./controllers/auth.controller");

app.post("/register",Upload.single("profile_pic"), register);

app.post("/login", login)

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


const query1 = require("./controllers/movies.controller");
app.use("/movies", query1);

module.exports = app;