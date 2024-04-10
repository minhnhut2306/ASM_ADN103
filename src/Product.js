const express = require("express");
const router = express.Router();
const productService = require("../models/Product/ProductController");
const ProductModel = require("../models/Product/ProductModel");

router.post("/products/add", async (req, res) => {
  try {
    const {
      name,
      price,
      categoryId,
      description,
      size,
      origin,
      status,
      image,
    } = req.body;
    const newProduct = await productService.insert(
      name,
      price,
      categoryId,
      description,
      size,
      origin,
      status,
      image
    );
    res.status(201).json({
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
    const {
      name,
      price,
      categoryId,
      description,
      size,
      origin,
      status,
      image,
    } = req.body;

    console.log(productId);
    console.log(req.body);

    const updatedProduct = await productService.update(
      productId,
      name,
      price,
      categoryId,
      description,
      size,
      origin,
      status,
      image
    );
    res.json({
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
    res.status(200).json({
      message: "Xóa thành công",
    });
  } catch (error) {
    console.error("Xóa không thành công:", error);
    res.status(500).json({ error: "Lỗi xóa không thành công" });
  }
});

router.get("/products/search", async (req, res) => {
  try {
    const productname = req.params.key;
    await productService.search({
      name: { $regex: productname, $options: "i" },
    });
    res.status(200).json({
      message: "Tìm kiếm thành công",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Tìm kiếm thất bại" });
  }
});
router.post("/products/category/:id", async (req, res) => {
  try {
    const categoryId = req.params.id;
    const products = await productService.getproduct(categoryId);
    res.status(200).json({
      message: "Danh mục của bạn là",
      products: products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Lỗi không hiển thị sản phẩm" });
  }
});

router.get("/products/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await productService.getProductById(productId);
    if (!product) {
      return res.status(404).json({ error: "Lỗi Product" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Lỗi Sever" });
  }
});

router.post("/api/get/product", async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        msg: "Vui lòng cung cấp tên sản phẩm để tìm kiếm.",
      });
    }
    const products = await ProductModel.find({
      name: { $regex: name, $options: "i" }, 
    });

    if (products.length === 0) {
      return res.status(404).json({
        msg: "Không tìm thấy sản phẩm nào với từ khóa này.",
      });
    }
    res.json(products);
  } catch (error) {
    console.error("Lỗi khi tìm kiếm sản phẩm:", error);
    res.status(500).json({
      msg: "Đã xảy ra lỗi trong quá trình tìm kiếm sản phẩm.",
    });
  }
});

router.get('/findProductsByKey_App', async (req, res) => {
  try {
      const { key } = req.query;
      if (key == '' || key == undefined) {
          throw new Error('Từ khóa tìm kiếm không hợp lệ!')
      }
      const products = await productService.findProductsByKey_App(key)

      return res.status(200).json({ status: true, data: products });
  } catch (error) {
      return res.status(500).json({ status: false, data: error.message });
  }
});

module.exports = router;
