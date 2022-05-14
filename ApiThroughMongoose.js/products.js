//! iske andar ham model and schema create karenge
// schema and model collection ke hisab se banenge, db ke andar ek se jyada colletion ho sakte hai 
// man lo ek product collection hai ek user collection hai 
// .. har ek collection ki alag file banegi model or schema ki 


const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: String,
    price: Number
});

module.exports = mongoose.model('products',productSchema);

