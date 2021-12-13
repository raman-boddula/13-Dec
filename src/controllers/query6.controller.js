const express = require("express");

const Booking = require("../models/query6.model");

const Movie = require("../models/movies.model")
const router = express.Router();


router.post("/", async (req, res) => {
    try {
        const movie = await Movie.find({ totalSeats: { $gte: req.body } });
        console.log(movie)
        // return res.status(201).json({ userData: movie });
    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }
})

module.exports = router;