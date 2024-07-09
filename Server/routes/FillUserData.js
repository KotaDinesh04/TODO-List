const express = require('express');
const router = express.Router();
const dataItem = require('../models/signup');
const itemModel = require('../models/signup');

router.post('/getuserdata',async (req,res)=>{
    const {emailId} = req.body;
    try {
        const data = await itemModel.findOne({emailId});
        if(!data) {
            return res.status(404).json({message:'User data not found'});
        }
        return res.json(data);
    } catch(error) {
        console.log(error);
        return res.status(500).json({message:"Server Error!!!"});
    }
});

module.exports = router;