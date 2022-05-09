//  const data = 
//     [
//         {name:'hansraj1',email:'hans1@gmail.com'},
//         {name:'hansraj2',email:'hans2@gmail.com'},
//         {name:'hansraj3',email:'hans3@gmail.com'},
//         {name:'hansraj4',email:'hans4@gmail.com'},
//         {name:'hansraj5',email:'hans5@gmail.com'},
//     ]

// 1.
//  var obj1 = {
//      name:'hansraj',
//      batch: function(){
//          console.log(this.name);
//      }
//  }

//  var obj2 = {
//      name: 'hansraj singh',
//      batch: obj1.batch
//  }

//  var name = 'ninja';
//  var batch = obj1.batch;  // undefined //! undefined kyonki ham yha nodeJs par run kar rhe hai isliye undefined aa rha hai actual ans is ninjna
//  batch();

//  obj1.batch(); // hansraj 
//  obj2.batch(); // hansraj singh 

//2. 
function batch(){
    console.log(this.name);
}
var name = 'ninja';
var obj = {name:"ninja1"};
batch();  //! undefined kyonki ham yha nodeJs par run kar rhe hai isliye undefined aa rha hai actual ans is ninjna
batch.call(obj); // ninja1  // ye batch function ab obj ke liye call hoga 
