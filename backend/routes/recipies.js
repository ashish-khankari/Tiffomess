const express = require('express')
const mongoose = require('mongoose')
const RecipeModel = require("../models/recipies");
const User = require('../models/Users');

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const response = await (RecipeModel.findOne({}))
        res.json(response)
    } catch (error) {
        res.json(error)
    }
})

router.post('/', async (req, res) => {
    const recipe = new RecipeModel(req.body)
    try {
        if (recipe) {
            return res.json("recipe already added")
        } else {
            await recipe.save()
            res.json(recipe)
        }
    } catch (error) {
        res.json(error)
    }
})

// router.put('/', async (req, res) => {
//     const recipe = await RecipeModel.findById(req.body.recipeID)
//     const user = await User.findById(req.body.userID)

//     user.SavedRecipies.push(recipe);
//     await user.save()
//     res.json({ SavedRecipies: user.SavedRecipies })
//     try {
//         if (recipe) {
//             return res.json("recipe already added")
//         } else {
//             await recipe.save()
//             res.json(recipe)
//         }
//     } catch (error) {
//         res.json(error)
//     }
// })

// router.get('/savedRecipies/ids', async (req, res) => {
//     try {
//         const user = await UserModel.findById(req.body.userID)
//         res.json({ SavedRecipies: user?.SavedRecipies })
//     } catch (error) {
//         res.json(error)
//     }
// })

// router.get('/savedRecipies', async (req, res) => {
//     try {
//         const user = await UserModel.findById(req.body.userID)
//         const savedRecipies = await RecipeModel.find({
//             _id: { $in: user.SavedRecipies }
//         })
        
//         res.json({ SavedRecipies: user?.SavedRecipies })
//     } catch (error) {
//         res.json(error)
//     }
// })
module.exports = router