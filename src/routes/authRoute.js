var express = require('express');
var router = express.Router();
var authController = require('../controller/authController');
router.post('/signUp',authController.singUp);
router.post('/signIn',authController.signIn);
router.post('/signOut',authController.signOut);
router.get('/hello',authController.middleware,(req,res)=>{
    res.status(200).send("passing through the middleware")
})
module.exports = router;