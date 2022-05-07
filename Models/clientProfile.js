//schema
//A mongoose schema defines the structure of the document
//default values,validators, etc..
//A mongoose model provides an interface to the database
//for  creating,updating,querying,deleting records etc
const mongoose=require('mongoose');
//define a object for schema
let clientSchema=new mongoose.Schema({
    //_id:mongoose.Schema.Types.objectId,
    name:{
        type:String,
        required:true,
    },
    password:{
type:String,
required:true,
min: [6, 'Must be at least 6, got {VALUE}'],
//validation
    },
speciality:{
type:String,
required:true,
},
Address:{
type:String,
required:true,
}
})
//define a class:pascal case
module.exports=mongoose.model("client_Profile",clientSchema);