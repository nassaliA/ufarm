const  express = require("express");
const { Admin } = require("mongodb");
const router =express.Router();

router.get('/AO', (req, res) => {
    res.render('AO', {title: "AO"});
});
router.get("/AO",(req,res)=>{
res.render("AO")})

router.post("/AO", async(req,res)=>{
    try{
        const admin = new Admin(req.body);
        await admin.save()
        res.redirect("/AO")
        console.log(req.body)
    }
    catch(err){
        console.log(err)
    }
})


// this should always be the last line in your routes file
module.exports = router