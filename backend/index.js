const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const port = 3800
// const db = require("./config/mongoose")
const app = express()
const route = require("./routes/users")
// when data is send from front end it will convert to json
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://ashishkhankari0922:tiffomemern@tiffomemern.7uiihlc.mongodb.net/tiffomemern?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
// const db = require('./config/mongoose')

// const routes = 
app.use('/', route)
// app.use('/create-recipies', require('./routes/recipies'))
// const db = require('./src/config/mongoose')
app.listen(port, function(err){
    console.log(`server succesfully running on port ${port}`)
})