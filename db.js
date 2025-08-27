const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;
console.log("connected");
// mongoose.connect("mongodb+srv://harshpunyani24:01YdDV4YBus3C5rY@punyani-cluster.rijr3jq.mongodb.net/coursera-app");


const userSchema = new Schema ( {
    email: {type: String, unique: true},
    password: String,
    firstName: String,
    lastName : String,

})

const adminSchema = new Schema ( {
    name: String,
    email: {type: String, unique: true},
    password: String,
    firstName: String,
    lastName : String,

})

const courseSchema = new Schema ( {
    title: String,
    description: String,
    price : Number,
    imageUrl: String,
    creatorId: ObjectId,
})

const purchaseSchema = new Schema ( {
    courseId: ObjectId,
    userId: ObjectId,

})

const userModel = mongoose.model("users", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = {
    userModel: userModel,
    adminModel: adminModel,
    courseModel: courseModel,
    purchaseModel: purchaseModel,
}

