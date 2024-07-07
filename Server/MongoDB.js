const mongoose = require('mongoose');

const makeConnection = async ()=>{
    try {
        const connection = await mongoose.connect(process.env.MONGO_IP);
        console.log("Connected to MongoDB successfully");
    } catch(error){
        console("Failed to connect to MongoDB",error);
        process.exit(1);
    }
}

module.exports = makeConnection;