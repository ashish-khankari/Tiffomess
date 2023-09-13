const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/tiffome_mern')

const db = mongoose.connection

db.on('error',console.error.bind(console, 'Error Connecting to Database'))

db.once('open', function(){
    console.log('Connected to Database')
})

module.exports =db;