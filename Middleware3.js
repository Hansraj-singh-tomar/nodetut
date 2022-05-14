//! Route Level Middleware
//todo - yha ham routes ki grouping karna sikhenge

// ab hame routes ke kisi group me middleware ko use karna hai to ham ese ek-ek routes me ja-ja kar nhi likh sakte hai 
//! is chij ke solution ke liye ham router Middleware ko import karenge jo ek inbuilt module hai


const express = require('express');
//! ye code ham MiddlewareLogic.js file se la rhe hai 
const reqFilter = require("./MiddlewareLogic");

const route = express.Router();
const app = express();

route.use(reqFilter)

app.get('/',(req,res)=>{
    res.send('Welcome to Home Page');
})

app.get('/contact',(req,res)=>{
    res.send("Welcome to Contact Page");
})

//! inn niche ke 2 route me ham route.get() ka use karenge routes ki grouping ke liye
route.get('/about',(req,res)=>{   //! ab MiddleWare about page par kam karega baki par nhi kyonki route.get() ka use kiya hai 
    res.send("Welcome to About Page");
})

route.get('/help',(req,res)=>{   //! //! ab MiddleWare help page par kam karega baki par nhi konki route.get() ka use kiya hai
    res.send("Welcome to Help Page");
})

app.use('/',route);


// app.listen(5000,()=>{
//     console.log('Listening at the port 5000');
// })