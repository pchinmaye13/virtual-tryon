const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("✅ MongoDB Connected!");
    } catch (error) {
        console.error("❌ MongoDB Connection Failed:", error);
        process.exit(1); // Stop server if DB connection fails
    }
};

module.exports = connectDB;
