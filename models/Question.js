const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
    qqid:{
        type: Number,
        required: true
    },
    qtext:{
        type: String,
        required: true
    },
   
    aid:{
        type: Number,
        required: true
    },
    atext:{
        type: String,
        required: true
    },
    value:{
        type: Number,
        required: true
    },
    


})

module.exports = mongoose.model('Question', QuestionSchema);