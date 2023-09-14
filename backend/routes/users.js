const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/Users')
const formSchema = require("../models/recipies")
const router = express.Router()

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username })

    const hashPassword = await bcrypt.hash(password, 10)

    if (user) {
        return res.json({ message: "User already registered" })
    }
    const newUser = new User({ username, password: hashPassword })
    newUser.save()

    res.json({ message: "User Registered Succesfully" })

    // console.log(user)
})

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    if(!username || !password ){
        return res.json({message:'All fields are required'})
      }
    const user = await User.findOne({ username })

    if (!user) {
        return res.json("User dosen't Exist")
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
        return res.json("Username or password is invalid")
    }

    const token = jwt.sign({ id: user._id }, "secret")
    res.json({ token, userID: user._id })
})

// Form Routes
router.get('/', async (req, res) => {
    formSchema.find({})
        .then(users => res.json(users))
        // .then(users=>console.log(users))

        .catch(err => res.json(err))
})

router.post('/hotelForm', async (req, res) => {
    try {
        let data = await formSchema.create(req.body)

        if(usedData){
            return res.json({message: "Already Registered with this Email/Mobile Number"})
        }
        let usedData = await formSchema.findOne({email, hotelName, mobile})

        res.json(data)
    } catch (error) {
        res.json(err)
    }
})
module.exports = router