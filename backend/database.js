const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/myNotebookDB";



// const connectToMongo= async()=>{
//    await mongoose.connect(mongoURI).catch(err=>{
//     console.log("err is : " + err)
//    });

// }
const connectToMongo= async()=>{
   await mongoose.connect('mongodb://127.0.0.1:27017/myNotebookDB');
}

 

module.exports = connectToMongo;