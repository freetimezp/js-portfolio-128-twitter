import express from "express";
import dotenv from "dotenv";

//import routes
import authRoutes from "./routes/auth.routes.js";

//import mongo db connection
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

//endpoints
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log("Server running on PORT: 5000");
    connectMongoDB();
});