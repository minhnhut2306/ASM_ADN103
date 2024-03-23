// routes/index.js
const express = require("express");
const router = express.Router();
const NhieuUserRouter = require("../src/checkUser");
const auth = require("./../src/auth");
const add = require("../src/addProduct");
const addProduct = require("../src/addCategory");
const test = require("../src/test2");

router.use("/", NhieuUserRouter);
router.use("/", auth);
router.use("/", add);
router.use("/", addProduct);
router.use("/", test);
module.exports = router;
