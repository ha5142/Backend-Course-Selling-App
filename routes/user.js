const express = require("express");
const {Router} = require('express');
const userRouter  = Router();

userRouter.post('/signup', function(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

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