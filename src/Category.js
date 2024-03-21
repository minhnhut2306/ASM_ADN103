const express = require("express");
const CategoryModel = require("../models/CategoryModel");

const getAll = async () => {
  try {
    const categories = await CategoryModel.find({});
    return categories;
  } catch (error) {
    console.error("Lỗi", error);
    throw error; 
  }
};

const getParent = async (parentId) => {
  try {
    const parentCategories = await CategoryModel.find({ parentId: null });
    return parentCategories;
  } catch (error) {
    console.error("Lỗi", error);
    throw error;
  }
};

const getSub = async (parentId) => {
  try {
    const subCategories = await CategoryModel.find({ parentId });
    return subCategories;
  } catch (error) {
    console.error("Lỗi", error);
    throw error;
  }
};

const insert = async (name, parentId) => {
  try {
    const category = new CategoryModel({ name, parentId });
    await category.save();
    return category;
  } catch (error) {
    console.error("Lỗi", error);
    throw error;
  }
};

const update = async (categoryId, name, parentId) => {
  try {
    const category = await CategoryModel.findByIdAndUpdate(categoryId, { name, parentId }, { new: true });
    return category;
  } catch (error) {
    console.error("Lỗi", error);
    throw error;
  }
};

const remove = async (categoryId) => {
  try {
    await CategoryModel.deleteOne({ _id: categoryId });
  } catch (error) {
    console.error("Lỗi", error);
    throw error;
  }
};

module.exports = { getAll, getParent, getSub, insert, update, remove };
