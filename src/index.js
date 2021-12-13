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


//post /movies ( create movies with all details )
const query1 = require("./controllers/movies.controller");
app.use("/movies", query1);
// get /shows ( get all shows for a particular movie )
const query2 = require("./controllers/shows.controller");
app.use("/shows", query2);
//get /seats ( get all available seats for a show )
const query3 = require("./controllers/seats.controller");
app.use("/seats", query3);
//get /shows/nearest ( get all shows of a movie in the same location as the user with seat available )

const query4 = require("./controllers/shows.controller");
app.use("/shows", query4);

//get /movies ( get all movies for a particular actor )

const query5 = require("./controllers/movies.controller");
app.use("/shows", query5);

module.exports = app;