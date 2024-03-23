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
    res.status(500).json({ error: "Lỗi" });
  }
});

router.put("/category/update/:id", async (req, res) => {
  try {
    const { categoryId, name, parentId } = req.body;
    // const categoryId = req.params.id;
    if (!categoryId || !name) {
      return res.status(400).json({
        message: "Vui lòng nhập id và tên",
      });
    }
    let category;
    if (parentId === "") {
      category = await productService.update(categoryId, name, null);
    } else {
      category = await productService.update(categoryId, name, parentId);
    }
    res.status(200).json({
      message: "Thêm thành công",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Thêm thất bại" });
  }
});

router.delete("/category/delete/:id", async (req, res) => {
  try {
    // const { categoryId } = req.body;
    const categoryId = req.params.id;
    const deletedCategory = await productService.remove(categoryId);
    if (!deletedCategory) {
      return res.status(404).json({
        message: "Không tìm thấy categories",
      });
    }
    res.status(200).json({
      message: "Xóa thành công",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Sửa thất bại" });
  }
});

module.exports = router;
