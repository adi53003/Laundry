const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userModel = require('./models/userModel')
const cors = require('cors');
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors());

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

app.post("/createUser", (req, res) => {
    userModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.post("/getUser", (req,res) => {
    userModel.findOne(req.body)
    .then(users => {
        if(!users){
            res.json("User not found")
        }
        res.json(users);
    })
    .catch(err => res.json(err))
})