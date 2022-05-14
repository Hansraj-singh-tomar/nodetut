//! Route Level Middleware 
//! to use middleware on a particular route
const express = require('express');
const app = express();
 
const reqFilter = (req,res,next) => {
    if(!req.query.age){
        res.send('Please Provide the Age');
    }else if(req.query.age<18){
        res.send("This page is not available for this age person");
    }else{
        next();
    }
}

// app.use(reqFilter); // ye isliye hta rhe hai kyonki ye puri application ke liye work hoga and we don't want that
// isliiye ham reqFilter ko particular route me use karenge

app.get('/',(req,res)=>{
    res.send('Welcome to Home Page');
})

app.get('/about',reqFilter,(req,res)=>{   //! ab MiddleWare about page par kam karega baki par nhi 
    res.send("Welcome to About Page");
})

app.get('/help',reqFilter,(req,res)=>{   //! //! ab MiddleWare help page par kam karega baki par nhi 
    res.send("Welcome to Help Page");
})

app.get('/contact',(req,res)=>{
    res.send("Welcome to Contact Page");
})

// app.listen(5000,()=>{
//     console.log('Listening at the port 5000');
// })