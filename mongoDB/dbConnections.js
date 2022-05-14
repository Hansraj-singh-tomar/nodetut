//! common file to all read,insert,update and delete.
//! we are connecting mongoDB to over local server which is localhost:27017
const {MongoClient} =require('mongodb');
// const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const database = 'e-com';

// ab ye code sab ke liye same rhega 
async function dbConnect(){
    let result = await client.connect();  // it will return promise
    let db = result.db(database); 
    // let collecton = db.collection('products');
    // let data = await collecton.find({}).toArray();
    // console.log(data);
    return db.collection('products');
}
module.exports = dbConnect;