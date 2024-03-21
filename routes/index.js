// routes/index.js
const express = require('express');
const router = express.Router();
const NhieuUserRouter = require('./../src/NhieuUser');
const auth = require('./../src/auth');

router.use('/', NhieuUserRouter);
router.use('/', auth);

module.exports = router;
