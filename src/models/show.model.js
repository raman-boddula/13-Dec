const mongoose = require("mongoose");

const Movies = require("./movies.model")
const Screen = require("./screens.model")

const showSchema = new mongoose.Schema({
    timing: { type: String, required: true },
    movie_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:Movies,
        required: true
    },
    totalSeats: {
        type: Number,
        requiredPaths:true,
    },
    screen_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:Screen,
        required: true
    }
}, {
    versionKey: false,
    timestamps:true,
}
);
module.exports=mongoose.model("shows",showSchema)