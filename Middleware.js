//! Application level Middleware
const express = require('express');
const app = express();

const reqFilter = (req,res,next)=>{
    console.log('reqFilter');
    if(!req.query.age){
        res.send('Please provide age');
    }else if(req.query.age<18){
        res.send('Page is not available for this age person');
    }else{
        next();
    }
}

// next() kya karega ki jis bhi routes ko call kiya hai usko aage proceed kar dega, agar next() function call nhi kiya to vo routes bufferr hota rhega run nhi hoga  

app.use(reqFilter); // yha ham hamare middleware ko use kar rhe hai 


app.get('/',(req,res)=>{
    res.send('welcome to Home Page');
})

app.get('/users',(req,res)=>{
    res.send('Welcome to Users Page');
})

// app.listen(5000,()=>{
//     console.log("listening at the port 5000");
// })