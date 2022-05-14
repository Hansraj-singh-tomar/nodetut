//! Search API in Node js with MongoDB
// * Make simple GET Route for API
// * Search with Sigle field
// * Search with multiple fields 
// * Test API 

const express = require('express');
require('./config');
const Product = require('./products');  // isme hamra model aa rha hai and isi ke sath schema bhi aa rha hai 
const app = express();

app.use(express.json());


app.get('/search/:key', async (req,res) => {
    // res.send('search done');
    // console.log(req.params.key);  // samsung // mila kyonki postman me url me key pass kari thi samsung 
    let data = await Product.find(
        {
            "$or":[
                    {"name" : { $regex: req.params.key}},
                    {"price" : { $regex: req.params.key}} // ab ye price pass karne par bhi output dega
                  ]
        }
    );
    res.send(data);

})

app.listen(5000,()=>{
    console.log("Listening at the port 5000");
});


// localhost:5000/search/rea pass karne par fir realme vala ovject hi dikhega
// localhost:5000/search/r
// output - 
/* 
[
  {
    "_id": "62794bf0805a4ba54df17492",
    "name": "redmi",
    "price": 7000
  },
  {
    "_id": "627b4b393377a3166ef4353f",
    "name": "realme",
    "price": 2000,
    "__v": 0
  }
]
*/

//! Q. Instead of get using delete and put / patch can we use search operation ?
// Ans is - YES.







