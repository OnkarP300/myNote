const mongoose = require('mongoose');
const mongoURI = "mongodb://0.0.0.0:27017";

async function connectToMongo() {
    try {
        await mongoose.connect(mongoURI);
        console.log("connected to mongo successfully")
    }
    catch (error) {
        console.log("Error connecting to mongoDB", error)
    }
}

module.exports = connectToMongo;