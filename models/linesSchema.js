const mongoose = require('mongoose')


const linesSchema = new mongoose.Schema({
    text : {
        type : String , 
        required : true ,
    }
})

const linesModel = mongoose.model('lines' , linesSchema)
module.exports = linesModel