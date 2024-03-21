// routes/auth.js
const express = require("express");
const router = express.Router();
const User = require("../models/CategoryModel");

router.post('/add', async function (req, res) {
    try {
        const { name, parentId } = req.body;
        const categories = await CategoriesController.insert(name, parentId);
        res.json(categories);
    } catch (error) {
        console.log(error);
    }
})
module.exports = router;
