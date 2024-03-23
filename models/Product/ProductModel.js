const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    // species: {
    //     type: String,
    //     required: false,

    // },
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
    image: [{
        type: String
    }]
});

module.exports = mongoose.model('products', ProductSchema);