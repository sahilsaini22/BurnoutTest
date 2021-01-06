const mongoose = require('mongoose');

const AnswerSchema = mongoose.Schema({
    aqid:{
        type: Number,
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

module.exports = mongoose.model('answer', AnswerSchema);