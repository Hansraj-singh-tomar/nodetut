//! Display file list from folder 
// what we gonna do - 
// 1. Make files in a folder 
// 2. Use Path Module
// 3. Get file names and print 

// I'll create a folder which name will Files and inside that folder i'll create some files through loop using NodeJS code 

const fs = require('fs');

// iss technic se me files folder ke andar apple.txt file nhi create kar pa rha hu and iske through me keval ek ek hi file create kar pa rha hu loop ke through ek sath kai files nhi create kar pa rha hu  
// fs.writeFileSync('apple.txt','This is a apple file');
// upar vali line ko me path module ke sath use karunga and loop ke andar isko use karunga

const path = require('path');
// const dirPath = path.join(__dirname);
// console.log(dirPath);  // E:\node-tut

const dirPath = path.join(__dirname,"files");
console.log(dirPath);  // E:\node-tut\files

for(i=0;i<5;i++){
   fs.writeFileSync(dirPath+"\Hello"+i+".txt", "simple text files"); 
// fs.writeFileSync(`${dirPath}/Hello${i}.txt`, "a simple text files"); 
// fs.writeFileSync( 'E:/node-tut/files/hello6.txt', 'hello shivani') ;
}


// readdir ki help se ham files folder vali directory ko read karenge taki iske andar jitna bhi content hai sara ka sara hame dikh jaye 
// fs.readdir(dirPath); // iska mtlb iss vali path ke andar ki sari ki sari files hame nikal ke de do, but it takes another argument which is callbacak function 

// fs.readdir(dirPath,(err,files)=>{
//     console.log(files); // ['Hello0.txt','Hello1.txt','Hello2.txt','Hello3.txt','Hello4.txt']
// })

// ab ham forEach loop ka use kar ke values ko array se bahar nikal lenge
fs.readdir(dirPath,(err,files)=>{
    files.forEach((item)=>{
        console.log("file name is", item); // Hello0.txt Hello1.txt Hello2.txt Hello3.txt Hello4.txt
    })
})

//! Interview Question -
// Q. kya ham D Drive ke andar ki files and folders ko read kar sakte hai 
// Ans - NO 
// Because - jab ham kisi bhi folder ke andar NOdeJs run karte hai to vo ek webserver ki tarah ban jata hai or vo folder ek tarah se webserver ki tarah kam karne lagta hai 
// Web server means - ye apne aap me ek environment hai iske bahar kuch bhi ho rha hai iss chij ko nhi pta hai 
// agar ham D-Drive ke folder and files ko read kar sake to security/privacy khatam ho jati hai
// hamara code sirf server se hi data utha pata hai exp:- hamare pass ek folder hai ek server bna hua iska to ham sirf usi folder se data utha sakte hai, iske bahar ke folder accessable nhi hote hai
// there are some modules and technic by using them we can access , html se bhi kar sakte hai but vo user apni marzi se karta hai jabardasti cmd ke through nhi kar sakte hai         



// a/b/c/d ye folder ek ke baad ek bante jaye me ye chata hu to ham kya karenge

// const fs = require('fs');
// fs.mkdirSync('a/b/c', {recursive : true}) // ByDefault ye false rehta hai  
// esa karne se ye folder create honge recursively
// recursive kya karega agar folder nhi hai to bnayega or nhi hai to or bnayega