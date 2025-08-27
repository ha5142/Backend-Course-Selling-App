const jwt = require("jsonwebtoken");
const {JWT_USER_PASSWORD} = require("../config")

function userMiddleware(req, res, next) {
    const token = req.headers.token;
    const decodedUser = jwt.verify(token, JWT_USER_PASSWORD);
    if(decodedUser) {
        req.userId = decodedUser.id;
        next();
    }
    else {
        res.status(403).json({
            msg: "u are not signed in"
        })
    }

}
module.exports= {
    userMiddleware,
}