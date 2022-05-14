//! connect MongoDB with Nodejs.
const {MongoClient} =require('mongodb');
// dono me se ek use kar sakte hai
// const mongoClient =require('mongodb').mongoClient;

// const url = 'mongodb://localhost:27017';  // har ek pc ke andar same rehta hai agar ham local mongobd se connect kar rhe to  
// iss url ko hame mongoClient ke andar pass karna hai taki mongodb vale package ko samjh me aa jaye ki hame iss url se data ko fetch karke lana hai 

const client = new MongoClient(url);

const database = 'e-com';

async function getData(){
    let result = await client.connect();  // it will return promise
    let db = result.db(database); 
    let collecton = db.collection('products');
    let data = await collecton.find({}).toArray();
    // let data = await collecton.find({name:'Nokia'}).toArray();
    console.log(data);
}
getData();











