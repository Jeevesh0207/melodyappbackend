const express=require("express")
const SignIn=express.Router()
const Schema=require("../model/Schemas")

SignIn.post('/verifysignin',async(req,res)=>{
    const UserName=req.body.UserName
    const Password=req.body.Password
    const UserData=Schema.UsersData
    const isUsernamePresent=await UserData.findOne({UserName:UserName})
    if(isUsernamePresent!=null){
        const OriginalPassword=isUsernamePresent.Password
        if(Password===OriginalPassword){
            res.send("Success")
        }else{
            res.send("Wrong")
        }
    }
    else{
        res.send("Invalid Username")
    }
    res.end()
})

SignIn.post('/forgotcheckemail',async(req,res)=>{
    const Email=req.body.Email
    const UserData=Schema.UsersData
    const isEmailPresent=await UserData.findOne({Email:Email})
    if(isEmailPresent){
        res.send("Success")
    }else{
        res.send("Invalid")
    }
    res.end()
})

module.exports=SignIn