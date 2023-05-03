const express = require('express');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login")
const Farmer =require("../models/registerModel")


router.get("/register", async(req,res)=>{
    const farmer= await Farmer.find()
    //res.status(200).json({data:farmer})
    res.render("register")
});


router.post("/register", async(req,res)=>{
    try{
        const register = new Farmer(req.body)
        await register.save()
       //res.status(201).json({message:"registered successfully"})
      // console.log(req.body)
        res.redirect("/login") 
    }
    catch(err){
        console.log(err)
        res.status(500).json({err:`${ err.message}`})
    }
})


// we redirect to a path and render to a file
router.get("/register",connectEnsureLogin.ensureLoggedIn(), async(req,res)=>{
    try{
        let items = await Register.find();
        // console.log(items)
        let fees= await Register.aggregate([
            {
                //"$group": {category: "$parents",
               "$group": {_id: "$all",
                totalFees: {$sum: "$fees"}   }
            }
        ])
        res.render("farmer",{farmers:items, total:fees[0]})
    }
    catch(err){
        console.log(err)
        res.send("failed to retrive farmer details")
    }
});

router.post("/farmer/delete/:id", async(req,res)=>{
    try{
    // deleteone is a inbuilt record
    await Register.deleteOne({_id:req.body.id});
    res.redirect("back")
    }

    catch(err){
        console.log(err)
    }
});

router.put("/editFarmerDetails/:id", async(req,res)=>{
    try{
        const item= await Register.findOne({_id:req.params.id});
        res.render("editFarmerDetails", {student:item});
    }
    catch(err){
        res.send("could not find farmer");
        console.log(err)
    }
});



router.post("/editFarmerDetails", async(req,res)=>{
    try{
        await Register.findOneAndUpdate({_id:req.query.id},req.body)
        res.redirect("/student")
    }
    catch(err){
        res.send("failed to update farmer details")
        console.log(err)
    }
    
});







module.exports = router


