require("dotenv").config()
const jwt = require("jsonwebtoken");
const express = require("express");
const {Router} = require('express');
const {userRouter} = require("./routes/user");
const {courseRouter}  = require('./routes/course');
const {adminRouter} = require("./routes/admin");
const { default: mongoose } = require("mongoose");

const app = express();
console.log(process.env.MONGO_URL);

app.use(express.json());
app.use('/api/v1/user', userRouter);  // v1 is my current version of my application
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/course', courseRouter);


async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(3000);
}
main();