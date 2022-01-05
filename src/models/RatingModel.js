const mongoose = require ('mongoose');


const RatingSchema =mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userID:{
       type: mongoose.Schema.Types.ObjectId,
       ref: "User",
       required: true
    },
    placeId:{
        type:mongoose.Schema.Types.ObjectId, 
        ref: "Places"

    },
    rating:{
        type: Number,
        required: true
    }
});


module.exports = mongoose.model("Rating",  RatingSchema);