const EventEmitter = require('events');

class Logger extends EventEmitter {
    logg(message){
        console.log(message);
        // mujhe yha se event rais karna hai 
        // mera jo Logger class hai vo EventEmitter hai kyonki yha mene extend kiya hua hai 
        // ab ham yha se event ko emmit kar sakte hai bina EventEmitter ka object create kiye
        this.emit('messageLogged', message)  
    }
}

module.exports = Logger;