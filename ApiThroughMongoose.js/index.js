// iske andar ham API's ka code likhenge 

const express = require('express');
require('./config');
const Product = require('./products');  // isme hamara model aa rha hai and isi ke sath schema bhi aa rha hai 

const app = express();
app.use(express.json())

app.post('/create',async (req,res) => {
    // console.log(req.body);
    // res.send("Done");
    let data = new Product(req.body);
    let result = await data.save();
    res.send(result);
    console.log(result); 
});

app.get('/list',async (req,res) => {
    let data =  await Product.find();
    res.send(data);
})

app.delete('/delete/:_id', async (req,res) => {
    // console.log(req.params);
    // res.send("done");
    let data = await Product.deleteOne(req.params);
    res.send(data);
})

app.put('/update/:_id', async (req,res) => {
    let data = await Product.updateOne(
        req.params,
        {$set:req.body}
    );
    res.send(data);
})

app.listen(5000,()=>{
    console.log("Listening at the port 5000");
});

//! query params and req.body dono se ham delete & put ka use kar sakte hai 