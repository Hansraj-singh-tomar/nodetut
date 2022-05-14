//! Read Data from MongoDB 
// * Read data from MongoDB
// * Make File for db connection 
// * Handle Promise

const dbConnect = require("../dbConnections");
// First Way 
// dbConnect().then((req,res)=>{
//     res.find({}).toArray().then((data)=>{    // Here, toArray bhi promise return karta hai
//         console.log(data);
//     })  
// })

// Second Way - Latest/Modern way 
const main = async () => {
    let data = await dbConnect();
    data = await data.find({}).toArray();
    console.log(data);
}
main();



