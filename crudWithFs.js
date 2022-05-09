// const { exec } = require('child_process');
// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname,'CRUD');
// // fs.writeFileSync(`${dirPath}/apple.txt`,'this is apple file')
// const filePath = `${dirPath}/apple.txt`;

//! Make File 
// fs.writeFileSync(filePath,'this is apple file');

//! Read File 
// fs.readFile(filePath,(err,item)=>{
//     console.log(item); // <Buffer 74 68 69 73 20 69 73 20 61 70 70 6c 65 20 66 69 6c 65>
// })
// fs.readFile(filePath,'utf-8',(err,item)=>{
//     console.log(item);  // this is apple file
// })

//! Append File
// fs.appendFile(filePath, ' and apple is fruit.',(err)=>{
//     if(!err) console.log('file is updated')
// }) 

//! Rename File 
// fs.rename(filePath,`${dirPath}/apple2.txt`,(err)=>{
//     if(!err) console.log('file name is updated');
// })


//! Delete File 
// fs.unlinkSync(`${dirPath}/apple.txt`);
// fs.unlinkSync(`${dirPath}/apple2.txt`);

//! Delete Folder 
// fs.rmdirSync(dirPath);

//! Interview Question - what is Buffer ?
// NodeJs includes an additional data type called Buffer.
// what is Buffer - ek temprary memory location, jab bhi ham file create kar rhe hai koi bhi operation perform karte hai fs ke upar to nodeJs ko todi si memory chahiye hoti hai taki vo apne opration ko kar sake  
// ye binary data ko store karne ke kam aata hai, while reading from a file or receiving packages over the network.
// Buffer data ko original data me convert karne ke liye toString() method ya utf-8 ka use karenge 
// it's not available in browserJs  


//! PHP ek synchronous language hai jabki js and node asynchronous language hai 
//! Asychronous Programming Language
// 1. 
// console.log('starts exe...')

// setTimeout(()=>{
//     console.log('logic exe...')
// },2000)

// console.log("complete exe...");

// output - 
// start exe...
// complete exec...
// logic exe...

// 2. draw back off it 

// let a = 10;
// let b = 0;

// setTimeout(()=>{
//     b=20;
// },2000)

// console.log(a+b); // 10 //! isko ham callback se handle kar sakte hai ya promises se 

//! Handle Asynchronous data in Node Js 
// 3. 
let a = 10;
let b = 0;

let waitingData = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(20)
    },2000)
})

waitingData.then((data)=>{
    b = data;
    console.log(a+b); // 30
})

//! fetch function apne aap me ek promise hota hai .then karke ham usse use karte hai 
//! jab ham hamara custom function bna rhe honge jo kafi time le rha ho tab ham promises ka use karenge 



//! How Node js Works - Event loop akshay saini ke tutorial se padna hai 
// 1. call Stack // ye hame har baar kam me aayega 
// 2. Node API
// 3. callBack Queue 
//? iss puri process ko bolte hai event loop
// 4. example
// 5. Interview Question

