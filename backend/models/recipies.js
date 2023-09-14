const mongoose = require('mongoose')

const form = new mongoose.Schema({
    name: {
        type:String
    },
    email: {
        type: String
    },
    mobile:{
        type: Number
    },
    hotelName:{
        type: String
    },
    location:{
        type: String
    },
    district:{
        type: String
    },
    state:{
        type: String
    },
    pin:{
        type: Number
    },
    image:{
        type: String
    },
    tiffinRate:{
        type: String
    },
    tiffinperDay:{
        type: String
    },
    tiffinperMonth:{
        type: String
    },
    foodType:{
        type: String
    },
    holiday:{
        type: String
    },
    description:{
        type: String
    }
})

const formSchema = mongoose.model("formSchema", form)

module.exports = formSchema