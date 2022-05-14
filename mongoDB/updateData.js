//! Update Data in MongoDB
// * Make new file for Update data
// * Import MongoDB connection
// * Update single and multiple records

const dbConnect = require("./dbConnections")

const updateData = async () => {
    const data = await dbConnect();
    let result = await data.update(
        {name:'Nokia'},{$set:{name:'nokia'}}
    );
    console.log(result);
}
updateData();