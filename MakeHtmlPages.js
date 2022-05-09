//! Static html pages ko render karvayennge
/* Make html pages - 
     . Make folder for html file and access it 
     . Make HTML files 
     . Load html files 
     . Interview Question
     
    Q. why we need of it ? 
    -> agar hame ek 6 to 7  pages ki static website banani hai jiske andar home page,about,contct page etc. ho to hame unhe bnane ke liye 
       different-different pages chahiye or un pages ko ham yha load karenge   
*/

const express = require('express');
const path = require('path');

const app = express(); // executive function  

console.log(__dirname); // E:\node-tut
const publicPath = path.join(__dirname,'public');
console.log(publicPath);  // E:\node-tut\public

app.use(express.static(publicPath)); // yhe ham fir se express. kyo use kar rhe hai yha hamne express ka static function nikala jaise hamne app ke liye nikala tha 
// ab ham Public folder ke andar ki sari file ko url ke through run kar sakte hai like that in Browser URl - localhost:5000/about.html
//! remember express.static() method inside app.use() method for rendering static pages.


app.listen(5000,()=>{
    console.log("Listening at the port 5000");
})



