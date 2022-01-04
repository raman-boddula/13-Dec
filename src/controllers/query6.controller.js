const express = require("express");

const Booking = require("../models/query6.model");

const Seats = require("../models/seats.model")
const router = express.Router();
const Shows = require("../controllers/shows.controller")


router.get("/:id", async (req, res) => {
    try {
        const user = await Shows.findById(req.params.id).populate("movie_id").populate("screen_id").lean().exec();
        if (user.totalSeats >= req.body.number_of_seats) {
            // return true
            return res.status(201).json({ Status: "Success", message:"you have successfully booked"+"-"+`$req.body.number_of_seats` });
        } else {
            return res.status(400).json({ Status: "failed", message: "no seats left" });
            
        }
    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }
})
module.exports = router;