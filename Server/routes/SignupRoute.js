const express = require('express');
const router = express.Router();
const itemModel = require('../models/signup');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
router.post('/signup',async (req,res)=>{
    const {name, emailId, password} = req.body;
    try {
        const hashedpass = await bcrypt.hash(password,10);
        const newUser = new itemModel({
            name,
            emailId,
            password: hashedpass,
        });
        await newUser.save();
        res.status(201).json(newUser);
    }catch(error) {
        res.status(500).json({message: error.message});
    }
});

module.exports = router;