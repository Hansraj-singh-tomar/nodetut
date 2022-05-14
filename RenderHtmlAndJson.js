const express = require('express');
const app = express();

app.get('',(req,res) => {
    res.send(`
        <h1> Welcome, to Home Page</h1>
        <a href="/about"> GO to About Page</a>
    `);
});

app.get('/about',(req,res)=>{
    res.send(`
        <input type="text" placeholder="User name" value="${req.query.name}"/>
        <button> Click Me </button>
        <a href="/"> GO to Home Page</a>
    `);
});

app.get('/help',(req,res)=>{
    res.send([
        {
            name:'hansraj',
            email:"hans@gml.com"
        },
        {
            name:'shiv',
            email:"shiv@gml.com"
        }
    ]);
});

// app.listen(5000,()=>{
//     console.log('listening at the port 5000');
// })


