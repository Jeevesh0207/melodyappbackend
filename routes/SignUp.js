const express = require("express")
const SignUp = express.Router()
const Schema = require("../model/Schemas")
const nodemailer = require('nodemailer')
const fs = require('fs');
const Forgot = fs.readFileSync('./Forgot.html', 'utf-8');
SignUp.get('/checkfilldata', (req, res) => {
    res.send("SignUp")
})

SignUp.post('/checkfilldata', async (req, res) => {
    const Email = req.body.Email
    const UserName = req.body.UserName
    const UserData = Schema.UsersData
    const isUserNamePresent = await UserData.findOne({ UserName: UserName })
    const isEmailPresent = await UserData.findOne({ Email: Email })
    if (isUserNamePresent) {
        res.send("Username Present")
    }
    else if (isEmailPresent) {
        res.send("Email Present")
    }
    else {
        res.send("Success")
    }
})

SignUp.post('/verifyotp', async (req, res) => {
    const Email = req.body.Email
    const UserOtp = req.body.UserOtp
    const Route = req.body.Route
    const OtpData = Schema.OtpData
    const FindOtp = await OtpData.findOne({ Email: Email })
    const OriginalOtp = FindOtp.Otp
    console.log(Route)
    if (Route === "signup") {
        if (UserOtp === OriginalOtp) {
            const Name = req.body.Name
            const UserName = req.body.UserName
            const Password = req.body.Password
            const UserData = new Schema.UsersData({
                Name: Name,
                Email: Email,
                UserName: UserName,
                Password: Password
            })
            const SaveData = await UserData.save()
            if (SaveData) {
                res.send("Success")
            } else {
                res.send("Error")
            }
        } else {
            res.send("Wrong Otp")
        }
    }
    if (Route === "Forgot") {
        if (UserOtp === OriginalOtp) {
            const Email = req.body.Email
            const UserData = Schema.UsersData
            const Data = await UserData.findOne({ Email: Email })
            if (Data) {
                const Password = Data.Password
                const UserName = Data.UserName
                const ForgotEmail = Forgot
                    .replace('{UserName}', UserName)
                    .replace('{Email}', Email)
                    .replace('{Password}', Password)
                let Transport = await nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: process.env.USER_ID,
                        pass: process.env.PASS
                    }
                });
                Transport.verify((error) => {
                    if (error) {
                        res.send("Error")
                    }
                    else {
                        console.log('Mail Connected')
                    }
                });
                const mailOption = {
                    from: 'testmail002007@gmail.com',
                    to: Email,
                    subject: 'Your Password Reset Request',
                    html: ForgotEmail,
                };
                Transport.sendMail(mailOption, async (error) => {
                    if (error) {
                        res.send("Error")
                    } else {
                        res.send("Success")
                    }
                })
            }
        } else {
            res.send("Wrong Otp")
        }
    }
})


module.exports = SignUp