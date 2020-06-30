var express = require('express');
var router = express.Router();
const {check,validationResult} = require('express-validator')
const {signout,signup,signin, isSignedIn} = require('../controllers/auth.js')

router.post('/signin',
[   
    check("email","email is required").isEmail(),
    check("password","password field is required").isLength({min:3})
],
signin)

router.post('/signup',[
    check("name","name should be at least three characters").isLength({min:3}),
    check("email","email is required").isEmail(),
    check("password","password should be at least three characters").isLength({min:3})
],signup)

router.get('/signout',signout)

router.get("/testRoute",isSignedIn,(req,res)=>{
    res.json(req.auth);
})

module.exports = router;