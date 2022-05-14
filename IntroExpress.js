/* 
   1. php ka framwork hai laravel, js ka Angular, java ka  hybernate and spring, like that Node ka express  
       react is a js library
    2. using Express we can create API easily, routes easily mil jate hai, ye hame middleware bhi dete hai, web pages easily bna payenge, request easily handle kar payenge and css bhi integrate kar payenge  
    3. npm i express
*/

const express = require('express');
const app = express();

app.get('',(req,res)=>{
    console.log('data send by browser =>>>',req.query.name)
    res.send('welcome'+ req.query.name);
});

app.get('/about',(req,res)=>{
    res.send('hello this is about page');
})

// app.listen(5000,()=>{
//     console.log('listening the port at 5000');
// });

//! jab bhi ham kuch changes ya nya kam karte hai to nodeJs ko hame restart karna padta hai, bar bar start karne se bachne ke liye ham nodemon ka use karte hai 