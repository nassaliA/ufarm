const  express = require("express");
const router =express.Router();

router.get("/",(req,res)=>{
res.render("landingPg")})



// this should always be the last line in your routes file
module.exports = router