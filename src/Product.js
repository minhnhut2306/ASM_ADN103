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
    res.status(200).json({
      message: "Thêm thành công",
      newProduct,
    });
  } catch (error) {
    console.error("Lỗi thêm sản phẩm:", error);
    res.status(500).json({ error: "Lỗi thêm sản phẩm" });
  }
});

router.put("/products/update/:id", async (req, res) => {
  try {
    const productId = req.params.id; 
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
    res.status(200).json({
      message: "Sửa thành công",
      updatedProduct,
    });
  } catch (error) {
    console.error("Lỗi sửa ", error);
    res.status(500).json({ error: "Lỗi máy chủ" });
  }
});



router.delete("/products/delete/:id", async (req, res) => {
  try {
    const productId = req.params.id; 
    await productService.remove(productId);
    res.status(204).end();
    res.status(200).json({
      message: "Xóa thành công",
    });
  } catch (error) {
    console.error("Xóa không thành công:", error);
    res.status(500).json({ error: "Lỗi xóa không thành công" });
  }
});

module.exports = router;
