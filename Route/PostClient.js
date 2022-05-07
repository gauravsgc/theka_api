const express=require('express');
const router=express();
const user=require('../Models/clientProfile');
const bodyParser=require('body-parser');
const jsonParser=bodyParser.json();
const jwt=require('jsonwebtoken');
/*const crypto=require('crypto');
const key='pass';
const algo='aes256';*/
const bcrypt=require('bcrypt');
//get api:--
router.get('/',(req,res,next)=>{
res.send("hello api ji");
})


router.post('/',jsonParser,function(req,res,next){
    /*const cipher=crypto.createCipher(algo,key);
    const encypass=cipher.update(req.body.password,'utf-8','hex')
    +cipher.final('hex'); 
    console.log(encypass);*/
    bcrypt.hash(req.body.password,10,(err,hash)=>{
        if(err){
return res.status(500).json({
    error:err
})

        }
        else{
    const data=new user({
        name:req.body.name,
        password:hash,
        speciality:req.body.speciality,
        Address:req.body.Address,
    })
    data.save().then((result)=>{
        res.status(201).json(result)
    }).catch((err)=>{
        console.warn(err);
    })
 
    res.send("radhe radhe");
}
 })

})
 //.......login...................//
router.post('/clientlogin',jsonParser,function(req,res,next){
    //res.send("login code");
    user.findOne
    ({name:req.body.name}).
    then(user=>{
        //res.json(user)
        
            bcrypt.compare(req.body.password,user.password,(err,result)=>{
                if(!result){
                    res.status(401).json({
                        msg:"password not match"
                    })
                }
                if(result){
                    //res.json(result)
                //res.json(user);
             token=jwt.sign({
                name:user.name,
                speciality:user.speciality
            },"this is data",
            {expiresIn:"24h"})
                        
                    }
                    res.status(200).json({
                        name:user.name,
                        token:token
                    })
    
    
    
                }     )              
            })
        })
        
     
 module.exports=router;