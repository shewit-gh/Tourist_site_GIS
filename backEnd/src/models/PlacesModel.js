const mongoose = require("mongoose");

const PlacesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    name: {
        type: String,
        required: true
    },
    subcity: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: [
        {
            type: String,
            required: false
        }
    ],
    ratings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Rating",
            required: false,
        },
    ],

});

module.exports = mongoose.model("Places", PlacesSchema);