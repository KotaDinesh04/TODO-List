const express = require('express');
const itemModel = require('../models/login');
const router = express.Router();

router.get('/login',async (req,res)=> {
    try {
        const data = await itemModel.find();
        res.json(data);
    } catch {
        console.log("Error fetching Login Data",error);        
    }
});

module.exports = router;