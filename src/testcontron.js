const ProductModel = require('./../models/test');

//get products trong khoảng min,max
//greater than or equal to
const getProductsByPriceMinMax = async (min_price, max_price) => {
    try {
        let products = await ProductModel.find({
            price: { $gte: min_price, $lte: max_price },
            quantity: { $gt: 0 }
        }).sort({ quantity: 1 });
        console.log('products: ', products)
        if (!products || products.length === 0) {
            throw new Error('Products not found');
        }
        return products;
    } catch (error) {
        console.log('getProductsMinMax failed: ', error.message);
        throw new Error(error.message);
    }
};

//search product
const searchProduct = async (key) => {
    try {
        let product = await ProductModel.findOne({ name: key });
        if (!product) {
            throw new Error('Product not found')
        }
        return product;
    } catch (error) {
        console.log('search product failed: ', error.message);
        throw new Error(error.message)
    }
};

//getProductsByCategory
const getProductsByCategory = async (id) => {
    try {
        let products = await ProductModel.find({ category_id: id });
        console.log('products:', products);

        if (!products || products.length === 0) {
            throw new Error('Products not found')
        }
        return products;
    } catch (error) {
        console.log('getProductsByCategory failed: ', error.message);
        throw new Error(error.message)
    }
};



//get all product
const getAllProducts = async () => {
    try {
        let products = await ProductModel.find()
        if (!products) {
            throw new Error('Products is not found')
        }
        return products;
    } catch (error) {
        console.log('getAllProducts failed: ', error.message);
        throw new Error(error.message)
    }
};

//get all giảm dần theo giá
const getAllProductsSort = async () => {
    try {
        let products = await ProductModel.find().sort({ price: -1 });
        if (!products) {
            throw new Error('Products is not found')
        }
        return products;
    } catch (error) {
        console.log('getAllProducts failed: ', error.message);
        throw new Error(error.message)
    }
};
module.exports = {
    getAllProducts,
    getAllProductsSort,
    searchProduct,
    getProductsByCategory,
    getProductsByPriceMinMax,
};