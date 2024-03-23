var express = require("express");
var router = express.Router();
const regexNumber = /^\d+$/;

// Array of products
var products = [
  {
    _id: 1,
    name: "Salvia microphylla Benth.",
    price: 65,
    quantity: 56,
    description:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    images: [
      "https://cdn.tgdd.vn/Products/Images/44/308490/Slider/vi-vn-acer-aspire-3-a314-35-c3ks-n5100-nxa7ssv009-slider-5.jpg",
    ],
    category_id: 4,
  },
  {
    _id: 2,
    name: "Juncus nevadensis S. Watson var. columbianus (Coville) H. St. John",
    price: 19,
    quantity: 73,
    description:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    images: [
      "https://cdn.tgdd.vn/Products/Images/44/308490/Slider/vi-vn-acer-aspire-3-a314-35-c3ks-n5100-nxa7ssv009-slider-5.jpg",
    ],
    category_id: 5,
  },
  // Add other products here
];

// API lấy danh sách sản phẩm có giá trong khoảng min, max
// và có số lượng lớn hơn 0
router.get("/loctheogia", async (req, res, next) => {
  try {
    const { min, max } = req.query;

    const min_price = parseFloat(min);
    const max_price = parseFloat(max);

    if (!regexNumber.test(min_price) || !regexNumber.test(max_price)) {
      throw new Error("min or max must is a number");
    }

    const filteredProducts = products.filter((product) => {
      return (
        product.price >= min_price &&
        product.price <= max_price &&
        product.quantity > 0
      );
    });

    // Sắp xếp sản phẩm theo số lượng tăng dần
    const sortedProducts = filteredProducts.sort(
      (a, b) => a.quantity - b.quantity
    );

    return res
      .status(200)
      .json({
        getProductsByPriceMinMax: sortedProducts.length,
        result: sortedProducts,
      });
  } catch (error) {
    console.log("loctheogia failed: ", error.message);
    return res.status(500).json({ message: error.message });
  }
});

// API Lấy danh sách tất cả sản phẩm
router.get("/get-all/sort-1", async (req, res, next) => {
  try {
    // Return all products
    return res.status(200).json({ AllProducts: products });
  } catch (error) {
    console.log("getProducts:", error.message);
    return res.status(500).json({ message: error.message });
  }
});

// Tìm kiếm sản phẩm theo từ khóa
router.get("/search", async (req, res, next) => {
  try {
    const { key } = req.query;
    if (!key || key.trim() == "") {
      throw new Error("Keyword is incorrect");
    }
    const result = products.filter((product) =>
      product.name.toLowerCase().includes(key.toLowerCase())
    );
    return res.status(200).json({ SeachProduct: result });
  } catch (error) {
    console.log("Search product: ", error.message);
    return res.status(500).json({ message: error.message });
  }
});

// API lấy danh sách sản phẩm theo 1 danh mục
router.get("/category", async (req, res, next) => {
  try {
    const { id } = req.query;
    if (!id || id.trim() == "") {
      throw new Error("Category ID is incorrect");
    }
    const result = products.filter((product) => product.category_id == id);
    return res.status(200).json({ ProductsByCategory: result });
  } catch (error) {
    console.log("getProductsByCategory: ", error.message);
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
