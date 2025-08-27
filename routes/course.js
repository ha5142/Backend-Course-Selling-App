const express = require("express");
// const app = express();
const {Router}  = require("express");
const courseRouter = Router();
const { purchaseModel, courseModel} = require("../db");
const {userMiddleware} = require("../middleware/user");

courseRouter.post("/purchase", userMiddleware, async function(req, res) {
    const courseId = req.body.courseId;
    const userId = req.userId;
    await purchaseModel.create({
        userId,
        courseId
    })


    
    res.json({
        msg: "You have sucessfully bought the course"

    })
})
courseRouter.get('/preview', async function(req, res) {
    const courses = await courseModel.find({});  // return all the courses 
    res.json({
     msg: "preview all courses",
     courses

    })
})
module.exports = {
    courseRouter: courseRouter,
}