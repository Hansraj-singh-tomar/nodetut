//! Getting Input from Command Line
// console.log(process); // ye ek object hota hai jiske andar sab kuch hota hai NodeJS ka  

//! console.log(process.argv); // argv means argument vector 
// cmd me node gettingInputFromCmd.js and enter press karne par 
// output = [ 'C:\\Program Files\\nodejs\\node.exe', 'E:\\node-tut\\index.js' ]
// isne mujhe do file ki location di hai pehla jha nodejs ki file save hai vo and second jha se ham isko run kar rhe hai vo  
// cmd me node gettingInputFromCmd.js hello and enter press karne par 
// output = [ 'C:\\Program Files\\nodejs\\node.exe', 'E:\\node-tut\\index.js', 'hello' ] 

//! console.log(process.argv[2]); // hello
// cmd me node indx.js hello hansraj and enter press karne par

//! ab iss concept ki help se kuch meaning banate - me chata hu me 3 input du pehla ho ki file ko add kar rha hu ya remove kar rha hu, second file ka name and third uss file ka text   
// file create karne ke liye ham fileSystem module ka use karenge jo ki nodeJs ke andar in-built hota hai
const fs = require('fs');
const input = process.argv;
// simple example 
// fs.writeFileSync(input[2],input[3]);

// ab me file ko create bhi kar pau or delete bhi kar pau
if(input[2] == 'add'){
    fs.writeFileSync(input[3],input[4]);
}else if(input[2] == 'remove'){
    fs.unlinkSync(input[3]);
}else{
    console.log("invalid output");
}
