const express = require("express");
const ProductModel = require("../models/ProductModel");

const getAll = async () => {
  try {
    const products = await ProductModel.find({});
    return products;
  } catch (error) {
    console.error("Lỗi", error);
    throw error; 
  }
};

const getParent = async () => {
  try {
    const parentProduct = await ProductModel.find({ category: null });
    return parentProduct;
  } catch (error) {
    console.error("Lỗi", error);
    throw error;
  }
};

const getSub = async (category) => {
  try {
    const subProducts = await ProductModel.find({ category });
    return subProducts;
  } catch (error) {
    console.error("Lỗi", error);
    throw error;
  }
};

const insert = async (name, price, category, species, size, origin, status, image) => {
  try {
    const Products = new ProductModel({ name, price, category, species, size, origin, status, image });
    await Products.save();
    return Products;
  } catch (error) {
    console.error("Lỗi", error);
    throw error;
  }
};

const update = async (productId, name, price, category, species, size, origin, status, image) => {
  try {
    const Products = await ProductModel.findByIdAndUpdate(productId, { name, price, category, species, size, origin, status, image }, { new: true });
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

module.exports = { getAll, getParent, getSub, insert, update, remove };
