const mongoose = require("mongoose");

const Theatre = require("./theatre.model")

const screenSchema = new mongoose.Schema({
    name: { type: String, required: true },
    theatre_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:Theatre,
        required: true
    },
}, {
    versionKey: false,
    timestamps:true,
}
);
module.exports=mongoose.model("screens",screenSchema)