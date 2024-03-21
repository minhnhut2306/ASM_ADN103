const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    url:{type: Number, require : true},
    alt:{type: Number, require : true}
});

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
    species: {
        type: String,
        required: false,

    },
    size: {
        type: String,
        required: true,
    },
    origin: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    image: [ImageSchema]
});

module.exports = mongoose.model('products', ProductSchema);