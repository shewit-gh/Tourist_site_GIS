const mongoose = require ('mongoose');


const StudentSchema =mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: false
    },
    password:{
        type: String,
        required: true
    }
    
});


module.exports = mongoose.model("User", StudentSchema);