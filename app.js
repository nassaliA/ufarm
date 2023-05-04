const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const mongoose= require("mongoose")
const dotenv = require("dotenv").config();
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;




const config = require("./config/database")
const bodyParser =require('body-parser')

const User = require("./models/userModel");
const AORoutes =require("./routes/AORoutes")
const landingPgRoutes =require("./routes/landingPgRoutes")
const registerRoutes =require("./routes/registerRoutes")
const ProductsRoutes = require("./routes/ProductsRoutes")
const Farmer1dashRoutes =require("./routes/Farmer1dashRoutes")
const loginRoutes =require("./routes/loginRoutes")
const customerLRoutes =require("./routes/customerLRoutes")
const editFarmerRoutes =require("./routes/editFarmerRoutes")




// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// creating a connection between the controller and the database
mongoose.connect(config.database,{
    //useNew collects data from the front end then formats it
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  const db= mongoose.connection
  // checking if db has connected
  db.once("open", ()=>{
    console.log("connected to db")
  })
  db.on("error",(err)=>{
  console.error(err)
  })


app.set("view engine","pug")
app.set("views", path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname, "public")));

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username, password: password })
      .then(user => {
        if (!user) { return done(null, false); }
        return done(null, user);
      })
      .catch(err => {
        return done(err);
      });
  }
));

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  // set cookie secure to true if using https
  cookie: { secure: false }
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());


app.use("/",AORoutes)
app.use("/",landingPgRoutes)
app.use("/",registerRoutes)
app.use("/",ProductsRoutes)
app.use("/",Farmer1dashRoutes)
app.use("/",loginRoutes)
app.use("/",customerLRoutes)
app.use("/",editFarmerRoutes)

app.listen(process.env.PORT, ()=> console.log(`Listening on port ${process.env.PORT}`))
