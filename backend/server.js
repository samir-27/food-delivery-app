import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import {connectDB} from  './config/db.js';
import foodRouter from './routes/foodRoute.js';

//app config 
const app = express()
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();

//api routes
app.use("/api/food", foodRouter);

app.get("/", (req, res) => {
    res.send("Hello from backend server");

})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// mongodb+srv://samir:samir123@cluster0.avqbv8y.mongodb.net/?appName=Cluster0