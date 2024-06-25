const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
app.use(express.json())

app.listen(3000, () => {
    console.log("Server Running")
})

mongoose.connect("mongodb+srv://aditya53003:laundry@cluster0.6s2qd3s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("Connected to MongoDB")
})
.catch((err) => {
    console.log(err)
})

