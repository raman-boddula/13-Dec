const express = require("express");

const Screen = require("../models/screens.model");

const router = express.Router();


router.post("/", async (req, res) => {
    try {
        const movie = await Screen.create(
            req.body);
        return res.status(201).json({ userData: movie });
    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }
})
router.get("/", async (req, res) => {
    try {
        const movie = await Screen.find().populate("theatre_id").lean().exec();
        return res.status(201).json({ userData: movie });
    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }
})
router.get("/:id", async (req, res) => {
    try {
        const user = await Screen.findById(req.params.id).lean().exec();
        return res.status(201).json({ userData: user });
    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }
})
router.patch("/:id", async (req, res) => {
    try {
        const user = await Screen.findByIdAndUpdate(req.params.id,req.body,{new:1}).lean().exec();
        return res.status(201).json({ userData: user });
    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }
})
router.delete("/:id", async (req, res) => {
    try {
        const user = await Screen.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).json({ userData: user });
    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }
})

module.exports = router;