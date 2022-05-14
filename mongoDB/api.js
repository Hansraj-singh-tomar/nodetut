const express = require('express');
const dbConnect = require("./dbConnections");
const mongodb = require("mongodb");
const app = express();

app.use(express.json()); // ye ek middleware hai 

//! Node js GET API Method
// * Make New File for API.
// * Import and use Mongo config.
// * Make API for get Method.
//* Test With Postman  
app.get('/', async (req,res)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
    // res.send({name: 'hansraj'});
    res.send(data);
})


//! Node js Post API Method
// * Make Post method for API
// * Send data from postman 
// * Get data in node js by request
// * Write Code for insert data in MongoDB
app.post('/', async (req,res) =>{
    let data = await dbConnect();
    let result = await data.insert(req.body);  // yha postman se nodeJs ke andar data send kar rhe hai 
    // req.body = {"name":"samsung","price":15000}
    console.log(req.body); // postman se jo data send kar rhe hai usse dekhne ke liye console lgaya hai 
    res.send(result); // hamari api jo response degi hame 
})

//! Node js Put API Method
// * Make PUT method for API 
// * send data from postman 
// * Handle data in node js by request
// * Write Code for update data in MongoDB

// First Way 
// url will be - localhost:5000
// app.put('/',async (req,res)=>{
//     const data = await dbConnect();
//     // let result = data.updateOne({name:"samsung"},{$set:{price:12000}})
//     let result = data.updateOne({name:req.body.name},{$set:req.body})
//     res.send({result:"updated"});
// })

//second way
// url will be - localhost:5000/samsung
app.put('/:name',async (req,res)=>{
    const data = await dbConnect();
    let result = data.updateOne({name:req.params.name},{$set:req.body})
    res.send({result:"updated"});
})

//! Node js Delete API method
// * Make Delete method For API
// * Send data from postman
// * Handle data in node js by request
// * Write code for Delete data in MongoDB
app.delete('/:id', async (req,res)=>{
    console.log(req.params.id); // 3fsdds.... ye id hai 
    const data = await dbConnect();
    const result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)}) //yha id objectid hoti hai to, yha hame object id ka istance bnana padega or vo mongobd ke object ke sath ban sakta hai mongodb.object, iske liye hame mongodb ko import karna padega 
    res.send(result);
})


// app.listen(5000,()=>{
//     console.log('Listening at the port 5000');
// })

//! Interview Question - 
// Q. kya ham get method ke andar body pass kar sakte ho
// Ans - NO , Query param pass kar sakte hai, url  ke through data send karke 

//Q. aap log req se body get karne ke liye kya use karoge 
// Ans - body parse but now we use express.json() function  
// pehle ham body parser use karte the but now in updated version of express we use express.json() method  

