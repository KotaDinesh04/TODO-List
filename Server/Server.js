const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//MongoDB Connection->
mongoose.connect('mongodb+srv://admin:admin@todolist.xkgge0r.mongodb.net/?retryWrites=true&w=majority&appName=TODOList', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> {
    console.log("Connected to Database");
}).catch(err => {
    console.log("Error connecting to Database :",err);
});

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });