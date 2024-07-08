const mongoose = require('mongoose');

const itemSchema = new  mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    emailId :{
        type: String,
        unique: true,
        required: true
    },
    password : {
        type: String,
        required: true
    }
});

const itemModel = mongoose.model('signup',itemSchema);

module.exports = itemModel;