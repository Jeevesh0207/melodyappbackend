const express = require("express")
const SongFetch= express.Router()
const axios=require("axios")

SongFetch.post('/songfetch',async(req,res)=>{
    const ID=req.body.ID
    await axios.get('https://yt-data-jeevesh-rais-projects.vercel.app/ytdata/'+ID).then((result)=>{
        res.send(result.data)
    }).catch((error)=>{
        res.send("Error")
    }) 

})

module.exports=SongFetch