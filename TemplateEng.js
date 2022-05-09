/*
Template Engine
. what is Dynamic page? - esa html page jisme data like name,email and all, databse se uth kar aa rha ho .to usse dynamic page bolenge.
. what is Static page? - esa html page jiska data base se koi lena dena nhi hota hai static page kehlata hai   
. what is the template engine? - ye Dynamic pages banane ke kam aate hai, ye npm package hote hai jinhe use karne ke liye install karna padta hai 
. install EJS template package. - it's used mostly. To Install EJS file  - npm i ejs
. Setup Dynamic routing
. Make Dynamic Page
Note - nodejs ke andar ham dynamic website bhut hi kam bnate hai, 95% tak ham API's hi bnate hai  

1. sabse pehle hame nodejs ko btana pdega ki ham ejs use kar rhe hai uske liye ham template engine set karte hai app.set('view engine','ejs');
*/


const express = require('express');

const app = express();


app.set('view engine','ejs'); // ye likh kar ham nodejs ko bta rhe hai ki ham ejs template engine use kar rhe hai 

app.get('/profile',(req,res)=>{
    const user = {
        name:"hansraj singh tomar",
        email:"hans@gml.com",
        city:'indore',
        skills: ['php','js','c++']
    }
    res.render('profile',{user}); // abhi hamare pass data base connectivity nhi hai 
});

app.get('/login',(req,res)=>{
    res.render('login');
})

app.listen(5000,()=>{
    console.log('listening at the port 5000');
})


// common vale folder me ham header, footer jo common hai vo sab le sakte hai 
