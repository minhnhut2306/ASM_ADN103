const express = require("express");
const router = express.Router();
const productService = require("../models/Product/ProductController");

router.post("/products/add", async (req, res) => {
  try {
    const { name, price, category, size, origin, status, image } = req.body;
    const newProduct = await productService.insert(
      name,
      price,
      category,
      size,
      origin,
      status,
      image
    );
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/products/update", async (req, res) => {
  try {
    const productId = req.body.productId;
    const { name, price, category, size, origin, status, image } = req.body;
    console.log(productId);
    console.log(req.body);
    const updatedProduct = await productService.update(
      productId,
      name,
      price,
      category,
      size,
      origin,
      status,
      image
    );
    res.json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


router.delete("/products/delete", async (req, res) => {
  try {
    const productId = req.body.productId;
    await productService.remove(productId);
    res.status(204).end();
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
