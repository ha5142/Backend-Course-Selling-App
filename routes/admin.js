const {Router} = require('express');
const adminRouter = Router();
const {adminModel}  = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {JWT_ADMIN_PASSWORD} = require("../config");
const {adminMiddleware} = require("../middleware/admin");
const {courseModel} = require("../db")

adminRouter.post('/signup', async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    const hashAdminPassword = await bcrypt.hash(password, 5);


    await adminModel.create({
        email: email,
        password: hashAdminPassword,
        firstName: firstName,
        lastName: lastName,
        
        
    })
    res.json({
        msg : "signup succeedd",
    })


})

adminRouter.post('/signin', async function(req, res) {
     const email = req.body.email;
    const password = req.body.password;

    const validAdmin = await adminModel.findOne({
        email: email,
    })
    if(!validAdmin) {
        res.json({
            msg: "admin not found",
        })
        return
    }
    const adminMatch = await bcrypt.compare(password, validAdmin.password);

    if(adminMatch) {
        const token = jwt.sign({
            id: validAdmin._id,

        }, JWT_ADMIN_PASSWORD);
        res.json({
            token: token
        })
    }
    else {
        res.status.json({
            msg: "inavid details"
        })
    }
    res.json({
        msg : "admin signin enpoint"
    })

})

adminRouter.post('/course', adminMiddleware, async function(req, res) {
    const adminId = req.adminId;
   const {title, description, price, imageUrl} = req.body;

  const course =  await courseModel.create({
      title: title,
      description: description,
      price: price,
      imageUrl: imageUrl,
      creatorId: adminId
   })

    
    res.json({
        msg : "course created",
        courseId:  course._id,
    })

adminRouter.put('/course', function(req, res) {
    const {title} = req.body;
    const {courseId} = req.body;
    if(courseId) {
        title: title
    } else {
        res.status(403).json({
            msg: "id required",
        })
    }
        res.json({
            msg: "update course"
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
    JWT_ADMIN_PASSWORD: JWT_ADMIN_PASSWORD,
}