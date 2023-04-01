

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { type: String, required: true, minLength: 3, maxLength: 30},
    price: { type: Number, required: true, minlength: 0, maxlength:500000},
    description: String
});



               //coleccion producss
module.exports = mongoose.model('Product', productSchema);