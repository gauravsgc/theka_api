const mongoose=require('mongoose');
//my database connection name is test...

 const connectDB=async()=>{
     await mongoose.connect('mongodb://localhost/Theka_database');
     console.log('connection has been done');
 }
module.exports=connectDB;