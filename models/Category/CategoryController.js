var express = require("express");
var router = express.Router();
var CategoryModule = require("./CategoryModel");

const getAll = async () => {
  try {
    const categories = await CategoryModule.find();
    return categories;
  } catch (error) {
    console.log(error);
  }
};

const getParent = async () => {
  try {
    const categories = await CategoryModule.find({ parentId: null });
    return categories;
  } catch (error) {
    console.log(error);
  }
};
const getSub = async (parentId) => {
  try {
    const categories = await CategoryModule.find(parentId).populate(
      "paretnId",
      "_id name"
    );
    return categories;
  } catch (error) {
    console.log(error);
  }
};

const insert = async (name, parentId) => {
  try {
    const categories = new CategoryModule({ name: name, parentId: parentId });
    await categories.save();
    return categories;
  } catch (error) {
    console.log(error);
  }
};

const update = async (CatId, name, parentId) => {
  try {
    const categories = CategoryModule.findByIdAndUpdate(CatId, {
      name: name,
      parentId: parentId,
    });
    return categories;
  } catch (error) {
    console.log(error);
  }
};

const remove = async (CatId) => {
  try {
    const deletedCategory = await CategoryModule.findByIdAndDelete(CatId);
    return deletedCategory;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = { getAll, getParent, getSub, insert, update, remove };
