const express = require("express")
const ConnectDB = require("./Config/db")
const app = express()

const PORT = 3000||5000

//To check server is working//
app.get("/",(req,res)=>{
    res.json({
        message:"Server is runing"
    })
})

ConnectDB()



app.listen(PORT,()=>{
    console.log(`server is runing on PORT : ${PORT}`)
})