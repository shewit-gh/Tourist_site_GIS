const mongoose = require('mongoose');
const userSchema =  mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    username:{
        type:String,
        lowercase:true,
        require:true

    },
    email:{
        type:String,
        lowercase:true,
        require:true,

    },
    password:{
        type:String,
        require:true
    },
    token:{
        type:String,
        require:false

    }
    
});
module.exports=mongoose.model('User',userSchema);

