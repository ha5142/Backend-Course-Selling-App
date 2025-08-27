const {Router} = require('express');
const adminRouter = Router();
const {adminModel}  = require("../db");

adminRouter.post('/signup', function(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

})
adminRouter.post('/signin', function(req, res) {
     const email = req.body.email;
    const password = req.body.password;
    res.json({
        msg : "admin signin enpoint"
    })

})
adminRouter.post('/create', function(req, res) {
    res.json({
        msg : "course create endpoint"
    })

adminRouter.put('/change', function(req, res) {
        res.json({
            msg: " change in course endpoint"
        })
    })
})

adminRouter.get('/courses', function(req, res) {
    res.json({
        msg:  "preview all courses"
    })
})

module.exports = {
    adminRouter: adminRouter,
}