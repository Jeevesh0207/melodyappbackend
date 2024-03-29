const express = require("express")
const AddToFavourite = express.Router()
const Schema=require("../model/Schemas")

AddToFavourite.post('/addtofavorite', async (req, res) => {
    const UserName = req.body.UserName
    const Name = req.body.Name
    const Artist = req.body.Artist
    const Url = req.body.Url
    const SongUrl = req.body.SongUrl
    const YTID = req.body.YTID
    const uniqueId = req.body.uniqueId
    const UserData = Schema.UsersData
    const UserFavData = await UserData.findOne({ UserName: UserName })
    console.log(UserName, UserFavData)
    if (UserFavData) {
        const SongsArray = UserFavData.SongData || [];
        if (SongsArray.some(item => item.Name === Name)) {
            const PullData = await UserData.updateOne({ UserName: UserName }, {
                $pull: {
                    SongData: {
                        Name: Name
                    }
                }
            })
            if (PullData) {
                res.send("Data Deleted")
            }
        } else {
            const AddData = await UserData.updateOne({ UserName: UserName }, {
                $push: {
                    SongData: {
                        Name: Name,
                        Artist: Artist,
                        Url: Url,
                        SongUrl: SongUrl,
                        YTID: YTID,
                        uniqueId: uniqueId
                    }
                }
            })
            if (AddData) {
                res.send("Data Added")
            }
        }
    }
    res.end()
})

AddToFavourite.post('/addtofavorite/find', async (req, res) => {
    const UserName = req.body.UserName
    const Name = req.body.Name
    const UserData = Schema.UsersData
    const UserFavData = await UserData.findOne({ UserName: UserName })
    const SongsArray = UserFavData.SongData
    if (SongsArray !== undefined) {
        if (SongsArray.some(item => item.Name === Name)) {
            res.send("Present")
        } else {
            res.send("Not Present")
        }
    }
    //  else if(SongsArray!==undefined) {
    //     if (SongsArray.some(item => item.uniqueId === uniqueId)) {
    //         res.send("Present")
    //     } else {
    //         res.send("Not Present")
    //     }
    // }
    res.end()
})


AddToFavourite.post('/addtofavorite/data', async (req, res) => {

    const UserName = req.body.UserName
    const UsersData = Schema.UsersData
    const UserFavData = await UsersData.findOne({ UserName: UserName })
    console.log(UserName, UserFavData)
    if (UserFavData) {
        const SongsArray = UserFavData.SongData
        res.send(SongsArray)
    } else {
        res.send("Error")
    }


});


module.exports = AddToFavourite