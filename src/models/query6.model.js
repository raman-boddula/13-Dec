const mongoose = require("mongoose");

const Show = require("./show.model");

const bookingSchema = new mongoose.Schema({
    number_of_seats: {
        type:Number,
        required: true
    }
}, {
    versionKey: false,
    timestamps:true,
}
);
module.exports=mongoose.model("booking",bookingSchema)