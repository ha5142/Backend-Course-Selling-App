const jwt = require("jsonwebtoken");
const express = require("express");
const {Router} = require('express');
const {userRouter} = require("./routes/user");
const {courseRouter}  = require('./routes/course');
const {adminRouter} = require("./routes/admin");
const { default: mongoose } = require("mongoose");

const app = express();

app.use(express.json());
app.use('/api/v1/user', userRouter);  // v1 is my current version of my application
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/course', courseRouter);

// createUserRoutes(app);
// createCourseRoutes(app);
async function main() {
    await mongoose.connect("mongodb+srv://harshpunyani24:01YdDV4YBus3C5rY@punyani-cluster.rijr3jq.mongodb.net/coursera-app");
    app.listen(3000);
}
main();