const express = require("express");
const router = express.Router();

//const { Admin } = require("../models/admin");

router.get("/AOdash", (req, res) => {
  res.render("AOdash");
});

router.post("/AOdash", async (req, res) => {
  try {
    const admin = new Admin(req.body);
    await admin.save();
    res.redirect("/Aodash");
    console.log(req.body);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
