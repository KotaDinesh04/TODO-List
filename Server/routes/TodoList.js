const express = require('express');
const router = express.Router();
const itemModel = require('../models/todolist');
const id = 0;
router.get('/todolist', async (req,res)=>{
    try {
        const data = await itemModel.find().populate('userId', 'name emailId');
        res.json(data);
    } catch(error) {
        console.log("Error fetching lists",error);
    }
});

router.post('/todolist', async(req,res)=>{
    const {title,description,userId} = req.body;
    if(!title) {
        return res.status(400).json({message: "Invalid Title"});
    }
    // console.log(req.body);
    try {
        const newData = new itemModel({
            title: title,
            description: description,
            userId: userId
        });
        const savedData = await newData.save();
        res.status(201).json(savedData);
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
});

router.put('/todolist/:id', async (req, res) => {
    const id = req.params.id;
    const { title, description, completed } = req.body;
    console.log(id);
    try {
        // Find the todo item by id
        const data = await itemModel.findById(id);
        if (!data) {
            return res.status(404).json({ message: "Todo not found" });
        }
        
        // Update the fields if they exist in the request body
        data.title = title || data.title;
        data.description = description || data.description;
        data.completed = completed !== undefined ? completed : data.completed;
        data.updatedAt = Date.now();

        // Save the updated data
        const updatedData = await data.save();
        res.json(updatedData);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Error updating todo item" });
    }
});

//Delete the todo 
router.delete('/todolist/:id', async (req,res) =>{
    const id = req.params.id;
    try {
        const data = await itemModel.findByIdAndDelete(id);
        if(!data) {
            console.log(id);
            return res.status(404).json({message: "Todo not found"});
        }
        res.json({message: "Successfully deleted the todo"});
    } catch(error) {
        console.log("Error deleting the todo",error);
        res.status(500).json({message: "Server Error!!!"});
    }
})

module.exports = router;