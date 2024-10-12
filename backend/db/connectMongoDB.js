import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connection SUCCESS: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error connection to Mongo db: ${error.message}`);
        process.exit(1);
    }
};

export default connectMongoDB;