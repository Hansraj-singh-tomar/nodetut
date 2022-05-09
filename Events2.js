//! Event By feel free code 
// 1.
const EventEmitter = require('events');
const emitter = new EventEmitter();

// register for an event 

emitter.on('count', function(...argument){   // ... three dot lgakar hame array ke form me arguments milenge   
    console.log(argument);
    /* output - 
                [ 'argument passed from emitter.emit', 1, 2, 3 ]
                [ 'argument passed' ]
                [ 'argument from emitter.emit' ]
    */
})
emitter.emit('count',"argument passed from emitter.emit",1,'yes',3)  // second parameter me ham complex object pass kar sakte hai 
emitter.emit('count',"argument passed",{name:'hansraj singh tomar'})
emitter.emit('count',"argument from emitter.emit")

//!2. Extending Event Emitter

// const Logger = require('./logg')
// const logger = new Logger();
// logger.on('messageLogged', (msg)=>{
//     console.log('messageLogged Event Raised,',msg);
// } )
// logger.logg('message coming from Event2.js file'); // yha se ham message argument pass kar rhe hai logg.js file me logg(message) function ke andar 


/*
output - 
message coming from Event2.js file
messageLogged Event Raised message coming from Event2.js file
*/