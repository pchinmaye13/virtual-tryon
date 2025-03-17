require("dotenv").config(); // This should be at the top
const express = require("express");
const connectDB = require("./db");
const app = express();
const PORT = process.env.PORT || 5001;
const userRoutes = require("./routes/userRoutes"); // Add this
app.use("/api/users", userRoutes); // Use user routes


console.log("🔍 MONGO_URI:", process.env.MONGO_URI); // Debugging

connectDB();
app.use(express.json());

app.get("/", (req, res) => res.send("✅ API is running..."));

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
