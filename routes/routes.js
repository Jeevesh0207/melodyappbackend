const express=require("express")
const router=express.Router()
const SignUp=require("./SignUp")
const OtpGenerate=require("./OtpGenerate")
const SignIn = require("./SignIn")
const SongFetch = require("./SongFetch")
const SongData = require("./SongData")
const Search = require("./Search")
const AddToFavourite = require("./AddToFavourite")

router.use('/',SignUp)
router.use('/',OtpGenerate)
router.use('/',SignIn)
router.use('/',SongFetch)
router.use('/',SongData)
router.use('/',Search)
router.use('/',AddToFavourite)

module.exports=router