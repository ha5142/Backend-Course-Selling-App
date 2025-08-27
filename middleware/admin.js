const jwt = require("jsonwebtoken");
const {JWT_ADMIN_PASSWORD} = require("../config");
const { model } = require("mongoose");

function adminMiddleware(req, res, next) {
    const token = req.headers.token;
    const decodedAdmin = jwt.verify(token, JWT_ADMIN_PASSWORD);

    if(decodedAdmin) {
        req.adminId = decodedAdmin.id; // update the req object
        next();
         
    } else {
        res.status(403).json({
          msg: "u are not signed in"
        })
    }

}
module.exports = {
    adminMiddleware,
}