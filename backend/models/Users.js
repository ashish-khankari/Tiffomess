const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    password:{
        type: String,
    },
    SavedRecipies:[{type: mongoose.Schema.Types.ObjectId, ref: "recipiesmodels"}]
})

const User = mongoose.model('users', userSchema)

module.exports = User