// routes/index.js
const express = require("express");
const router = express.Router();
const auth = require("../src/Auth");
const add = require("../src/Product");
const addProduct = require("../src/Category");
const AllSanPham = require("../src/AllsanPham");
const Billing = require("../src/Bill");

router.use("/", auth);
router.use("/", add);
router.use("/", addProduct);
router.use("/", AllSanPham);
router.use("/", Billing);

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });
  
module.exports = router;
