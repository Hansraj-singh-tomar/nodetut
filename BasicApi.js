//! Simple and Basic API
const http = require('http');
const data = require('./data');

// first example  
// http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'application\json'});
//     res.write(JSON.stringify({name:'hansraj',email:'hans@gmail.com'}));
//     res.end();
// }).listen(5000);

// second example
http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'application\json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(5000);
