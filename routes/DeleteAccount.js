const express = require("express")
const DeleteAccount = express.Router()
const Schema = require('../model/Schemas')

DeleteAccount.post('/deleteaccount',async(req,res)=>{
    const UserName=req.body.UserName
    const UserData=Schema.UsersData
    const Delete=await UserData.deleteOne({UserName:UserName})
    if(Delete){
        res.send("Account Deleted")
    }else{
        res.send("Error")
    }
})

module.exports=DeleteAccount