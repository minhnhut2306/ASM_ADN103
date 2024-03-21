// routes/index.js
const express = require("express");
const router = express.Router();
const NhieuUserRouter = require("../src/checkUser");
const auth = require("./../src/auth");
const add = require("../src/addCaterory");

router.use("/", NhieuUserRouter);
router.use("/", auth);
router.use("/", add);
module.exports = router;
