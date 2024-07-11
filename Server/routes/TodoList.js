const express = require('express');
const router = express.Router();
const dataItem = require('../models/todolist');

//Get all the todo's
router.get('/todolist', async (req, res) => {
  try {
    const { emailId } = req.query; 
    const data = await dataItem.find({ emailId });
    if (!data || data.length === 0) {
      return res.status(404).json({ message: 'Data not found' });
    }
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

//Add a new todo
router.post('/todolist',async(req,res)=>{
  const {title,description,emailId} = req.body;
  if(!title || !emailId) {
    return res.status(404).json({message:"Please fill all the details"});
  }
  try {
    const data = new dataItem({
      title: title,
      description: description,
      emailId: emailId
    });
    const response = await data.save();
    res.json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({message:"Server Error!!!"});
  }
});

//Update a todo
router.put('/todolist',async(req,res)=>{
  const {title,description,completed,id} = req.body;
  if(!id) {
    res.status(404).json({message: "Please fill in all the details"});
  }
  try {
    const todo = await dataItem.findById(id);
    if(!todo) {
      return res.status(404).json({message:"Todo not found"});
    }
    todo.title = title || todo.title;
    todo.description = description || todo.description;
    todo.completed = completed !== undefined ? completed : data.completed;
    todo.updatedAt = Date.now();
    const data = await todo.save();
    return res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({message: "Server Error!!!"});
  }
});

//Delete a todo:
router.delete('/todolist',async (req,res)=>{
  const {id} = req.body;
  try {
    const data = await dataItem.findByIdAndDelete(id);
    if(!data) {
      return res.status(404).json({message:"Data not found"});
    }
    return res.json({message:"deleted todo successfully"});
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: "Server Error!!"});
  }
})

module.exports = router;
