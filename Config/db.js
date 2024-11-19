const { default: mongoose } = require("mongoose")

const ConnectDB = async()=>{

    await mongoose.connect("monodb:mongodb://localhost:27017/Ecommerce")
    .then(()=>{console.log("Mongo DB Connected..")})
    .catch(()=>{console.log("Mongo DBConnection failed")})
}

module.exports = ConnectDB