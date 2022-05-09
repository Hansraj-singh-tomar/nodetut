const os = require('os');
// console.log(os.arch());
console.log(os.freemem()); // 962248704
console.log(os.freemem()/(1024*1024),"MB"); // 908.41015625 MB
console.log(os.freemem()/(1024*1024*1024),'GB'); // 0.9060 GB
console.log(os.totalmem()/(1024*1024*1024),'GB');  // 3.8943634033203125 GB
console.log(os.hostname());  // DESKTOP-6PAHOOM
console.log(os.homedir());  // c:\Users\abc
console.log(os.platform());  // win32
console.log(os.userInfo());  // {uid: -1,gid: -1,username: 'abc',homedir: 'C:\\Users\\abc',shell: null}
console.log(os.release());  // it'll show window version

console.log(os.type());
console.log(os.tmpdir());
console.log(os.uptime()); // ye btata hai aapka system kab se shutdown nhi kiya hai 