const  express = require("express");
const router =express.Router();

router.get("/Farmer1dash",(req,res)=>{
res.render("Farmer1dash")})



// this should always be the last line in your routes file
module.exports = router