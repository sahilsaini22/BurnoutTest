const mongoose = require('mongoose');

const PlantSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: false
    },
    type:{
        type: String,
        required: false
    },
    new:{
        type: Boolean,
        required: false
    },
    edible:{
        type: Boolean,
        required: false
    },
    danger:{
        type: Boolean,
        required: false
    },
    dangertext:{
        type: String,
        required: false
    },
    description:{
        type: String,
        required: false
    },
    img_source:{
        type: String,
        required: false
    },


})

module.exports = mongoose.model('plant', PlantSchema);