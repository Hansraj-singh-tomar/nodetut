//! Delete Data in MongoDB
// * Make New file for Delete Data 
// * Import MongoDB connection 
// * Delete single and multiple records


const dbConnect = require("./dbConnections");

const deleteData = async () => {
    const data = await dbConnect();
    const result = await data.deleteOne({name:'nokia'});
    console.log(result);
    if(result.acknowledged){
        console.log('record deleted');
    }
}

deleteData();