const  express = require("express");
const router =express.Router();

router.get("/editFarmerDetails", (req, res) => {
    res.render("editFarmerDetails");
  });
  
router.post("/farmer/delete", async(req,res)=>{
    try{
    // deleteone is a inbuilt record
    await Register.deleteOne({_id:req.body.id});
    res.redirect("back")
    }

    catch(err){
        console.log(err)
    }
});

router.get("/editFarmerDetails/:id", async(req,res)=>{
    try{
        const item= await Register.findOne({_id:req.params.id});
        res.render("editFarmerDetails", {farmer:item});
    }
    catch(err){
        res.send("could not find Farmer");
        console.log(err)
    }
});



router.post("/editFarmerDetails", async(req,res)=>{
    try{
        await Register.findOneAndUpdate({_id:req.query.id},req.body)
        res.redirect("/Farmer1dash")
    }
    catch(err){
        res.send("failed to update student details")
        console.log(err)
    }
    
});

// this should always be the last line in your routes file
module.exports = router
