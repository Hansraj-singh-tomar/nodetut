//! Insert Data from MongoDB
// * Make New File for Insert data
// * Import MongoDB connection 
// * Insert single and multiple records

const dbConnect = require("./dbConnections");

const insert = async () => {
    const db = await dbConnect();
    console.log(db);
    const result = await db.insert(
        [
            {name:'redmi', price:7000},
            {name:'infinix', price:11000}
        ]
    )
    if(result.acknowledged){
        console.log("data inserted",result); // ye hame again promise return kar rha hai to hame isse bhi await me convert karna padega 
    }
}
insert();

