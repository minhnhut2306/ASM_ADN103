const express = require("express");
const ProductModel = require("./ProductModel");
const UserModel = require("./../User/UserModel");

const getAll = async () => {
  try {
    const products = await ProductModel.find({});
    return products;
  } catch (error) {
    console.error("Lỗi", error);
    throw error;
  }
};

const getCategoryId = async (categoryId) => {
  try {
    const products = await ProductModel.find({ category: categoryId });
    return products;
  } catch (error) {
    console.log(error);
  }
};
const getProductById = async (productId,userId) => {
  try {
    const product = await ProductModel.findById(productId);
    return product;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const insert = async (
  name,
  price,
  categoryId,
  description,
  size,
  origin,
  status,
  image
) => {
  try {
    const Products = new ProductModel({
      name,
      price,
      categoryId,
      description,
      size,
      origin,
      status,
      image,
    });
    await Products.save();
    return Products;
  } catch (error) {
    console.error("Lỗi", error);
    throw error;
  }
};

const update = async (
  productId,
  name,
  price,
  categoryId,
  description,
  size,
  origin,
  status,
  image
) => {
  try {
    const Products = await ProductModel.findByIdAndUpdate(
      productId,
      { name, price, categoryId, description, size, origin, status, image },
      { new: true }
    );
    return Products;
  } catch (error) {
    console.error("Lỗi", error);
    throw error;
  }
};

const remove = async (productId) => {
  try {
    await ProductModel.deleteOne({ _id: productId });
  } catch (error) {
    console.error("Lỗi", error);
    throw error;
  }
};

const search = async (name) => {
  try {
    const products = await ProductModel.search({ _id: name });
    return products;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
const findProductsByKey_App = async (key) => {
  try {
      // câu điều kiện
      let query = {};
      // where .....
      query = {
          ...query,
          name: { $regex: key, $options: 'i' } //bỏ viết hoa và viết thường
      }
      const products = await ProductModel
          .find(query)
      return products;
  } catch (error) {
      console.log('getProducts error: ', error.message);
      throw new Error('Lấy danh sách sản phẩm lỗi');
  }
}
module.exports = { getAll, getCategoryId, insert, update, remove, search ,getProductById,findProductsByKey_App};
