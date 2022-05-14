// const mongoose = require('mongoose');

// const main() = async () => {
//     await mongoose.connect('mongodb://localhost:27017/e-com'); // e-com mere DataBase ka name hai
//     //! schema - schema hamare dataBase ki fields ko validate karti hai 
//     // hamare db ke andar jitni bhi fields hai unhe ham schema ke andar define karte hai, taki validation apply ho paye
//     const productSchema = new mongoose.Schema({
//         name:String,
//         price:Number
//     });
    
//     //! Model -  Model basically hamare NodeJS ko MongoDB se connect karta hai 
//     // model un schema ko use karke nodejs and mongodb ko connect karta hai
//     // const ProductsModel = mongoose.model('collectionName',SchemaName)  
//     const ProductsModel = mongoose.model('products',productSchema);  //! here ProductsModel, P should be capital 
    
//     //! We are Creating instance - agar ham kuch insert, update, delete karte hai to uska hame ek new instace banana hota hai
//     //! abhi ham static data bhej rhe hai 
//     let data = new ProductsModel({name:'realme',price:2000}); //! yha ProductsModel class ka use karke data name ka object create kiya hai hamne 
//     let result = await data.save();
//     console.log(result);
// }
// main();

//!-------------------------------------------------------------------------------------
// In Proper Way 
const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/e-com');

const productSchema = new mongoose.Schema({
    name:String,
    price:Number
});

const saveInDB = async () => {
    const Product = mongoose.model('products',productSchema);
    let data = new Product({
        name:"mi",
        price:3000
    })
    let result = await data.save();
    console.log(result);
}
// saveInDB();


const updateInDB = async () => {
    const Product = mongoose.model('products',productSchema);
    let data = await Product.updateOne({name:'mi'},{$set:{price:3500}})
    console.log(data);
}
// updateInDB();

const deleteInDB = async () => {
    const Product = mongoose.model('products',productSchema);
    let data = await Product.deleteOne({name:'mi'});
    console.log(data);
}
// deleteInDB();

const findInDB = async () => {
    const Product = mongoose.model('products',productSchema);
    // let data = await Product.find(); // to find all 
    let data = await Product.find({name:'mi'}); // to find a specific document 
    console.log(data);
}
findInDB();




