const path = require('path');

const pathObject = path.parse(__filename);  // ye hame ek object return karega 
console.log(pathObject);
/*
output - 
{
    root: 'E:\\',
    dir: 'E:\\node-tut',
    base: 'path.js',
    ext: '.js',
    name: 'path'
}
*/
console.log(pathObject.dir);   //  E:\node-tut
console.log(pathObject.ext);   // .js
console.log(pathObject.base);  // path.js