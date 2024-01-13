const express = require('express')
const OtpGenerate = express.Router()
const nodemailer = require('nodemailer')
const Schema = require("../model/Schemas")

OtpGenerate.post('/generateotp', async (req, res) => {
    const Email = req.body.Email
    const Name = req.body.Name
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let OTP = '';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        OTP += characters.charAt(randomIndex);
    }
    
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
        subject: 'One Time Password',
        html: `
        <div style="text-align: start;">
            <h3>Account Verification Code</h3>
            <p>Hi ${Name},</p>
            <p>Thank you for signing up for Melody Music! To verify your account, please enter the following code:</p>
            <h4>${OTP}</h4>
            <p>This code is valid for 10 minutes. If you don't verify your account within this time, you will need to request a
                new code.</p>
            <p>If you did not request this code, please ignore this email.</p>
            <p>Sincerely,</p>
            <p>Melody Music</p>
        </div>
        `,
    };
    Transport.sendMail(mailOption, async (error) => {
        if (error) {
            res.send("Error")
        }
        else {
            const OtpData = Schema.OtpData
            const isEmailPresent = await OtpData.findOne({ Email: Email })
            if (isEmailPresent) {
                await OtpData.updateOne({ Email: Email }, {
                    $set: {
                        Otp: OTP
                    }
                })
                res.send("Success")
            }
            else {
                const newOtpData = new Schema.OtpData({
                    Email: Email,
                    Otp: OTP
                })
                const SaveOtp = await newOtpData.save()
                if (SaveOtp) {
                    res.send("Success")
                }
                else {
                    res.send('Error')
                }

            }
        }
    })
})

module.exports = OtpGenerate