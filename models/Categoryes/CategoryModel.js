const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CategorySchema = new Schema({
    // id: {type: Number, require : true}, // id của cây
    // name: {type: String, require: true}, // tên của cây
    // price: {type: String, require: true}, //giá của cây
    // properties: {type: String, require: true}, // tính chất của cây 
    // image: {type:String, require: true}, // hình ảnh cây 
    // status: {type: String, require: true}, // trạng thái số lượng của cây
    // sizetree: {type: String, require: true}, // Độ lớn của cây   
    // origin: {type: String, require: true} // xuất xứ của cây

    name: {type: String, required: true},
    parentId:{type : ObjectId, ref:'categoryes'}
});
// module.exports = mongoose.model('user', UserSchema);
module.exports = mongoose.model('categoryes', CategorySchema);