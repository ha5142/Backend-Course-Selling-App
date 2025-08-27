const express = require("express");
const {Router} = require('express');
const jwt = require("jsonwebtoken");
const {JWT_USER_PASSWORD} = require("../config");
const bcrypt = require("bcrypt");
const app = express();
const userRouter  = Router();
const {userModel} =  require("../db");
const { userMiddleware } = require("../middleware/user");
app.use(express.json());

userRouter.post('/signup', async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    const hashPassword = await bcrypt.hash(password, 5);

    await userModel.create({
        email: email,
        password: hashPassword,
        firstName: firstName,
        lastName: lastName,
    })
    res.json({
        msg: "signup succeeded"
    })


})

userRouter.post('/signin', async function(req, res) {
     const email = req.body.email;
    const password = req.body.password;

     const validUser =  await userModel.findOne ({
        email: email,
    
    })
    if(!validUser) {
        res.json({
            msg: "user not found",
        })
        return
    }
    const userMatch = await bcrypt.compare(password, validUser.password);

    if(userMatch) {
        const token = jwt.sign({
            id: validUser._id,
        }, JWT_USER_PASSWORD)
        res.json({
            token: token,
        })
    } else {
        res.status.json({
            msg: "Inavalid details"
        })
    }


})

userRouter.get('/purchases', userMiddleware, async function(req, res) {
    const userId =  req.userId;

    const purchases = await userModel.find({
        userId,
    })

    res.json({
        purchases: purchases,

    })
})

module.exports = {
    userRouter: userRouter,
    JWT_USER_PASSWORD: JWT_USER_PASSWORD,
}