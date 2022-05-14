//! Upload File in Node js
// * Install Multer npm package
// * Make Route for upload file 
// * write code for upload file

const express = require('express');
const multer = require('multer');
const app = express();

// iss upload function ko hame as a middleware use karna hai 
const upload = multer({
    storage: multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,"uploads"); // uploads folder ke andar file ko bhejna hai 
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+"-"+Date.now()+".jpg"); // second parameter me jo file ham bhej rhe hai vo 
        }
    })
}).single("user_file2"); // ye function puchta hai ki kis parameter se upload karoge 

app.post("/upload", upload, (req,res) => {
    res.send("file uploaded");
});

// app.listen(5000, () => {
//     console.log("Listening at the port 5000");
// })

//! bina multer package ke bhi ham file upload kar sakte hai 
