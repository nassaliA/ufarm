const express = require('express');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login")
//const Register =require("../models/registermodel")


router.get("/register", (req,res)=>{
    res.render("register")
});


router.post("/register", async(req,res)=>{
    try{
        const register = new Register(req.body)
        await register.save()
        res.redirect("/register")
        console.log(req.body)
    }
    catch(err){
        console.log(err)
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

router.post("/students/delete", async(req,res)=>{
    try{
    // deleteone is a inbuilt record
    await Register.deleteOne({_id:req.body.id});
    res.redirect("back")
    }

    catch(err){
        console.log(err)
    }
});

router.get("/edit_student/:id", async(req,res)=>{
    try{
        const item= await Register.findOne({_id:req.params.id});
        res.render("student_edit", {student:item});
    }
    catch(err){
        res.send("could not find student");
        console.log(err)
    }
});



router.post("/edit_student", async(req,res)=>{
    try{
        await Register.findOneAndUpdate({_id:req.query.id},req.body)
        res.redirect("/student")
    }
    catch(err){
        res.send("failed to update student details")
        console.log(err)
    }
    
});







module.exports = router


