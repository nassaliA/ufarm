const  express = require("express");
const router =express.Router();

router.get("/landingPg",(req,res)=>{
res.render("landingPg")})



// this should always be the last line in your routes file
module.exports = router