const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    emailId : String,
    password : String
});

const itemModel = mongoose.model('Login',itemSchema);
module.exports = itemModel;