const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    url:{type: Number, require : true},
    alt:{type: Number, require : true}
});

const ProductSchema = new Schema({
    id: {type: Number, require : true}, // id của cây
    name: {type: String, require: true}, // tên của cây
    price: {type: String, require: true}, //giá của cây
    properties: {type: String, require: true}, // tính chất của cây 
    status: {type: String, require: true}, // trạng thái số lượng của cây
    sizetree: {type: String, require: true}, // Độ lớn của cây   
    origin: {type: String, require: true}, // xuất xứ của cây
    image: [ImageSchema] // hình ảnh cây 
});

module.exports = mongoose.model('products', ProductSchema);