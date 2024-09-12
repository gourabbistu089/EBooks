import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI; // Make sure this variable is set
    if (!uri) {
      throw new Error("MongoDB URI is not defined");
    }
    await mongoose.connect(uri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit the process if the connection fails
  }
};

export default connectDB;
