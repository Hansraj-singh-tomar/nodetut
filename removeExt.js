const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname,'public');

app.get('',(req,res)=>{
   res.sendFile(`${publicPath}/index.html`); 
})
app.get('/about',(req,res)=>{
   res.sendFile(`${publicPath}/about.html`); 
})
app.get('*',(req,res)=>{ //! remember star* sign 
   res.sendFile(`${publicPath}/404.html`); 
})


app.listen(5000,()=>{
    console.log("Listening at the port 5000");
})


//Q. How we will remove extension from URL ?  -  using sendFile() Method 
// now we can write direct - localhost:5000/about don't need to write localhost:5000/about.html 


