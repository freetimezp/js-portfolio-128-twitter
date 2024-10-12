import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

//import routes
import authRoutes from "./routes/auth.routes.js";

//import mongo db connection
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//endpoints
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log("Server running on PORT: 5000");
    connectMongoDB();
});