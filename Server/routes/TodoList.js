const express = require('express');
const router = express.Router();
const dataItem = require('../models/todolist');

router.get('/todolist', async (req, res) => {
  try {
    const { emailId } = req.query; // Use req.query to get parameters for GET requests
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

module.exports = router;
