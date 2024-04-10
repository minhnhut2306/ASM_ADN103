const express = require("express");
const router = express.Router();
const User = require("../models/User/UserModel");
const Category = require("../models/Category/CategoryModel"); 
const Product = require("../models/Product/ProductModel");
const Admin = require("../models/Admin/AdminModel");

router.get("/user", async (req, res) => {
  try {
    const users = await User.find();
    console.log("Users:", users);
    res.json(users);
  } catch (error) {
    console.error("Lỗi", error);
    res.status(500).json({ error: "Lỗi" });
  }
});

router.get("/allproducts", async (req, res) => {
  try {
    const product = await Product.find();
    console.log("Product:", product);
    res.json(product);
  } catch (error) {
    console.error("Lỗi", error);
    res.status(500).json({ error: "Lỗi" });
  }
});


router.get("/allcategory", async (req, res) => {
  try {
    const category = await Category.find();
    console.log("Category:", category);
    res.json(category);
  } catch (error) {
    console.error("Lỗi", error);
    res.status(500).json({ error: "Lỗi" });
  }
});


module.exports = router;
