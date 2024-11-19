const { Schema, Types } = require("mongoose");

const userSchema = new Schema({
    Name: {types:String},
    Email: {types:String,unique:true,required:true},
    Password:{type:String,required:true},
    Contact:{type:String,unique:true},
    gender:{type:String,required:true},
    age:{type:Number}

})

const UserModel = new mongoose.model('user',userSchema)
module.exports = UserModel