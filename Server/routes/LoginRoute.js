const express = require('express');
const signUpModel = require('../models/signup');
const router = express.Router();
const bcrypt = require('bcryptjs');

router.post('/login', async (req, res) => {
    const { emailId, password } = req.body;

    try {
        const user = await signUpModel.findOne({ emailId });

        if (!user) {
            return res.status(401).json({ message: "Invalid Credentials" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: "Incorrect Password" });
        }

        res.status(200).json({ message: "Login Successful" });
    } catch (error) {
        console.error("Error fetching Login Data", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
