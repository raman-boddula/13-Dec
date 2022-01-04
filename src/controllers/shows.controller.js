const express = require("express");

const Shows = require("../models/show.model");

const router = express.Router();

const Movie = require("../models/movies.model")

router.post("/", async (req, res) => {
    try {
        const movie = await Shows.create(req.body);
        return res.status(201).json({ userData: movie });
    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }
})

router.get("/movies/:id", async (req, res) => {
    try {
        const movie = await Shows.find({"movie_id":req.params.id}).populate("movie_id").populate("screen_id").lean().exec();
        return res.status(201).json({ userData: movie });
    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }
})
//query4
router.get("/nearest/:id", async (req, res) => {
    try {
        const movie = await Shows.find({"movie_id":req.params.id}).populate("movie_id").populate({path:"screen_id",populate:{path:"theatre_id"}}).lean().exec();
        return res.status(201).json({ userData: movie });
    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }
})
router.get("/", async (req, res) => {
    try {
        const movie = await Shows.find().populate("movie_id").populate("screen_id").lean().exec();
        return res.status(201).json({ userData: movie });
    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }
})
router.get("/:id", async (req, res) => {
    try {
        const user = await Shows.findById(req.params.id).populate("movie_id").populate("screen_id").lean().exec();
        if (user.totalSeats >= req.body.number_of_seats) {
            // return true
            return res.status(201).json({ Status: "Success", message: "you have successfully booked" });
        } else {
            return res.status(400).json({ Status: "failed", message: "no seats left" });
            
        }
    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }
})
router.patch("/:id", async (req, res) => {
    try {
        const user = await Shows.findByIdAndUpdate(req.params.id,req.body,{new:1}).lean().exec();
        return res.status(201).json({ userData: user });
    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }
})
router.delete("/:id", async (req, res) => {
    try {
        const user = await Shows.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).json({ userData: user });
    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }
})

module.exports = router;