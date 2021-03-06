const mongoose = require("mongoose");

const Show = require("./show.model");

const seatsSchema = new mongoose.Schema({
    show_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Show,
        required: true
    }
}, {
    versionKey: false,
    timestamps:true,
}
);
module.exports=mongoose.model("seats",seatsSchema)