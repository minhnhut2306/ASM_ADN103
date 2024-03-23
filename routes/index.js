// routes/index.js
const express = require("express");
const router = express.Router();
const NhieuUserRouter = require("../src/checkUser");
const auth = require(newFunction());
const add = require("../src/Product");
const addProduct = require("../src/Category");
const test = require("../src/Test");

router.use("/", NhieuUserRouter);
router.use("/", auth);
router.use("/", add);
router.use("/", addProduct);
router.use("/", test);
module.exports = router;
function newFunction() {
    return "./../src/Auth";
}

