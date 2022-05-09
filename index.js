// const http = require('http');
// http.createServer((req,res)=>{
//     res.write("<h1>hello this is hansraj</h1>");
//     res.end();
// }).listen(4500);


// Object Methods
// const obj = {
//     a:1,
//     b:2
// }

//! Object.entries(obj)
// console.log(Object.entries(obj));  // [ [ 'a', 1 ], [ 'b', 2 ] ]
// Object.entries(obj).forEach((key,values)=>{
//  console.log(values);  // 0 1
// })
// Object.entries(obj).forEach(([key,values])=>{
//  console.log(values); // 1 2
// })

//! Object.keys(obj)
// console.log(Object.keys(obj)); // ['a','b']
// console.log(Object.keys(obj).toString()); // a,b

//! Object.values(obj)
// console.log(Object.values(obj));  // [1,2]
// console.log(Object.values(obj).toString());  // 1,2

//! problem statement - 
// const obj = {
//     a:1,
//     b:2,
//     getA(){
//         console.log(this.b);
//         return this;
//     },
//     getB(){
//         console.log(this.b);
//     },
// };

// obj.getA(); // 2
// obj.getB(); // 2 
// obj.getA().getB(); // it's showing error while i am not returning this from getA() function 
// output - [2,2] 

//! Problem Statement 
// [1,2].print(); //1,2
// Array.prototype.print = () => {
//     console.log([1,2].toString());
// }

//! Problem Statement
// const a = function(x){
//     this.x = x;
// }
// a.prototype = {
//     getX(){
//         return this.x;
//     }
// }

// const b = function(x,y){
//     this.y = y;
//     // this.x = a.x;
//     a.call(this,x);
//     getY () {
//         return this.y;
//     }
// }

// const newB = new b('x','y');

// newB.getX();
// newB.getY();


//! Problem Statement
// const obj = {
//     a: {
//         b: {
//             c:1
//         }
//     }
// };
// it's Deep copy Example
// const clone = 

// clone.a.b.c = 1;
// console.log(obj.a.b.c);

// Interview Question
const x = 10;
console.log(x++); // const use karne par error de rha hai jabki var & let use karne par 10 output de rha hai 