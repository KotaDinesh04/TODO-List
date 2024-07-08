const express = require('express');
const router = express.Router();
const itemModel = require('../models/signup');
const mongoose = require('mongoose');

router.post('/signup',async (req,res)=>{
    const {name, emailId, password} = req.body;
    try {
        const newUser = new itemModel({
            name,
            emailId,
            password
        });
        await newUser.save();
        res.status(201).json(newUser);
    }catch(error) {
        res.status(500).json({message: error.message});
    }
});

module.exports = router;