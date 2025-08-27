const express = require("express");
const {Router} = require('express');
const app = express();
const userRouter  = Router();
const {userModel} =  require("../db")
app.use(express.json());

userRouter.post('/signup', async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    await userModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
    })
    res.json({
        msg: "signup succeeded"
    })


})
userRouter.post('/signin', function(req, res) {
     const email = req.body.email;
    const password = req.body.password;

})
userRouter.post('/purchases', function(req, res) {
    res.json({

    })
})

module.exports = {
    userRouter: userRouter,
}