const express = require ("express");
const router = express.Router();
const passport = require ("passport");
const LocalStrategy = require('passport-local').Strategy;

// imported model
const User = require("../models/userModel")

router.get("/login",(req,res)=>{
    res.render("login")
});


router.post("/login", passport.authenticate("local", {failureRedirect: "/login"}), async (req, res) => {
    req.session.user = req.user
    try {
      const userExist = await User.findOne({username: req.user.username,password: req.user.password}).exec();
      console.log("this user exists", userExist)
      console.log("this is the user session:", req.session)
  
      if (req.user.role == "ao" && userExist) {
        res.redirect("/AOdash")
      }
      else if (req.user.role == "uf" && userExist) {
        res.redirect("/")
      }
      else if (req.user.role == "fo" && userExist) {
        res.redirect("/Farmer1dash")
      }
      else if (req.user.role == "co" && userExist) {
        res.redirect("/customerL")
      }
      else {
        res.send("you are not registered")
      }
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong.");
    }
  })
  

  passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username, password: password }, function(err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        return done(null, user);
      });
    }
  ));

router.post("/logout", (req,res)=>{
    if(req.session){
        req.session.destroy((error)=>{
            if(error){
            res.status(400).send("unable to log out user")
        }else{
            return res.redirect("/login")
        }
    })
    }
})

module.exports = router