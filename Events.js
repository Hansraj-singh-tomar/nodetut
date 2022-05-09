//! Events and Event Emitter in NodeJS
//! Q. What is Events and Event Emitter
// Event is a signal that indicates somethings happend.
// Node js ke andar har ek chij event base hoti hai or har ek programing lag. ke andar events hote hai
// sabse jyada event use js or html(onclick and all) ke andar hote hai
// Event simple meaning is send signal
// vo chij jo event ko generate karti hai vo Event Emitter hoti hai
// Emitt means generate something or produce something 
// if someone ask you how will you make a button click in NodeJs? - ans is through API   
// html and js ke jo button hote hai vo browser ke part hote hai

// abhi ham ek simple code likhte hai API call karne ka 
const express = require('express');
const EventEmitter = require("events"); //! yha EventEmitter me E capital hai because it's a class not an object 
const app = express();
// ab me chahta hu ki total kitni API hit gai meri website ke uppar
// ham chahte hai ki jitni bhi API call ho hamare pass count ho jaye as a database
// uske liye me ek event create karta hu, vo jo ki ek esa function hoga jo ki mere jitne bhi click ho rhe hai na unko basically count karta rhega   

//! Q. Make an event and call it. 
// now i'll create an object of event using EventEmitter class. 
const event = new EventEmitter();

let count = 0;
event.on("countApi",()=>{    // event.on() takes two parameter first is event name and second callback function 
    count++;
    console.log("event called from event.on()",count);
})  //! yha hamne event ko capture kar liya, jo event hamne emit karvaya tha 

// event.once se ye ek bar hi call hoga 


app.get('/',(req,res)=>{
    res.send('Home API called');
    event.emit('countApi'); // yha ye vali line event ko generate kar degi, jaise button click hota hai uss tarah se , or ye event handle event.on() me hoga 
});
app.get('/search',(req,res)=>{
    res.send('Search API called');
    event.emit('countApi');  
});
app.get('/update',(req,res)=>{
    res.send('Update API called');
    event.emit('countApi');
});

app.listen(5000,()=>{
    console.log('listening at the port 5000');
})






