const express = require("express");
// const app = express();
const {Router}  = require("express");
const courseRouter = Router();

courseRouter.post("/purchase", function(req, res) {
    res.json({

    })
})
courseRouter.get('/preview', function(req, res) {
    res.json({
     msg: "preview all courses"
    })
})
module.exports = {
    courseRouter: courseRouter,
}