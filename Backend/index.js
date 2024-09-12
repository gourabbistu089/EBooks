import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import bookRoutes from './routes/bookRoutes.js';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';    
dotenv.config();
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use('/book', bookRoutes); // Use the book routes

app.use('/user', userRoutes); // Use the user routes


// connect to mongodb
app.get("/", (req, res) => {
    res.send("Hello World!");
}); 

app.listen(process.env.PORT, () => {
    connectDB();
    console.log("Server started on port " + process.env.PORT); 
});
