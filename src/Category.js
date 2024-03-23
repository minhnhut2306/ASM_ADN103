const express = require("express");
const router = express.Router();
const productService = require("../models/Category/CategoryController");

router.get("/category/add", async function (req, res) {
  try {
    const { name, parentId } = req.query;
    let category;
    if (parentId === "") {
      category = await productService.insert(name, null);
    } else {
      category = await productService.insert(name, parentId);
    }
    res.status(200).json({ category });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/category/update", async (req, res) => {
  try {
    const { categoryId, name, parentId } = req.body;
    if (!categoryId || !name) {
      return res.status(400).json({
        message: "Please provide categoryId and name",
      });
    }
    let category;
    if (parentId === "") {
      category = await productService.update(categoryId, name, null);
    } else {
      category = await productService.update(categoryId, name, parentId);
    }
    res.status(200).json({
      message: "Category updated successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/category/delete", async (req, res) => {
  try {
    const { categoryId } = req.body;
    const deletedCategory = await productService.remove(categoryId);
    if (!deletedCategory) {
      return res.status(404).json({
        message: "Category not found",
      });
    }
    res.status(200).json({
      message: "Category deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
