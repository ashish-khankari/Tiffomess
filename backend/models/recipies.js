const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ingridients: 
        [{type: String,
        required: true}]
    ,
    instructions:{
        type: String,
        required: true
    },
    imageUrl:{
        type: String,
        required: true
    },
    cookingTime:{
        type: Number,
        required: true
    },
    userOwner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    }

})

const RecipeModel = mongoose.model("recipiesModel", recipeSchema)

module.exports = RecipeModel