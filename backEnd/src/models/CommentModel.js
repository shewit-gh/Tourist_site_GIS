const mongoose = require ('mongoose');


const CommentSchema =mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userID:{
       type: mongoose.Schema.Types.ObjectId,
       ref: "User",
       required: true
    },
    placeId:{
        type:mongoose.Schema.Types.ObjectId, 

    },
    comment:{
        type: String,
        required: true
    }
});


module.exports= mongoose.model("Comment",  CommentSchema);