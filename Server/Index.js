const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const makeConnection = require('./MongoDB');
makeConnection();

const loginModel = require('./models/login');
const loginRoute = require('./routes/LoginRoute');

const signupModel = require('./models/signup');
const signupRoute = require('./routes/SignupRoute');

const todoListRoute = require('./routes/TodoList');
app.use('/api',loginRoute);
app.use('/api',signupRoute);
app.use('/api',todoListRoute);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});