const express = require("express");
const router = express.Router();
//const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const Product = require("../models/addProductsModel");

router.get("/", (req, res) => {
  res.render("addProducts");
});

//router.use(express.static(path.join(__dirname, "public")));
//router.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
//router.use(bodyParser.json()); // parse application/json

// Defining Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "uploads/"));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// Create Multer upload instance
const upload = multer({ storage: storage });

router.post("/", upload.single("image"), async (req, res) => {
  const filename = req.file.filename;
  const product_fields = req.body;
  product_fields.image = filename;
  product_fields.is_approved = false;
  product_fields.farmer_details = req.session.user;
  try {
    const product = new Product(product_fields);
    product.save();
    res.render("success.pug", {
      message: "Product successfully added",
      page: "add-product",
    });
  } catch (error) {
    res.send({ error });
  }
});

module.exports = router;
