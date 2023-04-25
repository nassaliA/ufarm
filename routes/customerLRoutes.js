const  express = require("express");
const router =express.Router();

router.get("/customerL",(req,res)=>{
res.render("customerL")
})



// this should always be the last line in your routes file
module.exports = router