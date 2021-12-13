const mongoose = require("mongoose");

const Show = require("./show.model");

const theatreSchema = new mongoose.Schema({
    show: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Show,
        required: true
    }
}, {
    versionKey: false,
    timestamps:true,
}
);
module.exports=mongoose.model("theatre",theatreSchema)