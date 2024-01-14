const mongoose=require("mongoose")
const Schema=mongoose.Schema

const UserSchema=new Schema({
    Name:{type:String},
    Email:{type:String},
    UserName:{type:String},
    Password:{type:String},
    SongData:[
        {
            Name:{type:String},
            Artist:{type:String},
            YTID:{type:String},
            Url:{type:String},
            SongUrl:{type:String},
            uniqueId:{type:String}
        }
    ]
})

const OtpSchema=new Schema({
    Email:{type:String},
    Otp:{type:String},
})


const UserData=mongoose.model('Users',UserSchema,'UsersData')
const OtpData=mongoose.model('Otpdata',OtpSchema,'OtpData')
const All_Schema={'UsersData':UserData,'OtpData':OtpData}

module.exports=All_Schema