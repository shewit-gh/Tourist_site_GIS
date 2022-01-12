const User = require('../models/User/userModel')
const mongoose=require('mongoose');
const bcrypt = require('bcrypt');
const jasonWebToken = require('jsonwebtoken');
const SECRET_KEY="thisisthesecretkeywewillusefortherestoftheproject"


const singUp =  async (req,res) => {
    try{
        const{username,email,password}=req.body;
        if(!(username,email,password)){
            return res.status(400).send("all input fields are needed")
        }
        const existinguser = await User.findOne({email:email})
        if(existinguser){
            return res.status(409).send("user already exist");
        }
        const pass = await bcrypt.hash(password,10)
        const user = await new User({
            _id:mongoose.Types.ObjectId(),
            username:username,
            email:email,
            password:pass
        }).save();
        const user1 = {_id:user._id,username:user.usernmae,email:user.email}
        const accesstoken = jasonWebToken.sign(user1,SECRET_KEY,{expiresIn:"2h",})
        
        user.accesstoken = accesstoken
       
        return res.status(200).json({"accesstoken":user.accesstoken,
                                    
                                          })
        }
    catch(err){
        res.status(500).json({"error":err})

    }
}
const signIn = async (req,res)=>{
    try{
    
    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
  
    const user = await User.findOne({ "email":email });
    const comparison=await bcrypt.compare(password, user.password);
    if (user && comparison) {
        const user1={_id:user._id,username:user.username,email:user.email}
      
      const accesstoken = jwt.sign(user1,SECRET_KEY,{expiresIn:"2hr"});
      
      user.accesstoken = accesstoken
      
      return res.status(200).json({"accesstoken":user.accesstoken,
     
          })
 

      
     
    }
    
    res.status(400).send("Invalid Credentials");
    }
    catch(err){
        res.status(500).send("there is sme error with the server")
    }
}
const signOut = async (req, res) => {
    try {
      const {email} = req.body;
  
    
      const user = await User.findOne({ "email":email });
      if (user) {
        user.token = null;
        res.status(200).json({"token":user.token});
      }
      
      res.status(400).send("Unable to do operation");
    } catch (error) {
      res.status(500).send("there was some error with the server")
      }
  };
function middleware (req,res,next){
    const authHeader = req.headers["authorization"];
    const accesstoken = authHeader.split(" ")[1];
    const accesstoken1 =req.body.accesstoken ||  accesstoken;
    
    


  if (!accesstoken1) {
    return res.status(403).send("A token is required for authentication");
    
  }
  try {

    const decoded = jasonWebToken.verify(accesstoken1, SECRET_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).json({"error":err});
  }
  return next();
}
module.exports={
    singUp,
    signIn,
    signOut,
    middleware
}