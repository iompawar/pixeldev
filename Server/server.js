import express from 'express';
import dotenv from 'dotenv';
import 'colors';
import connectDB from './Config/connectDb.js';
import favouriteRouter from './Routes/favouritesRoute.js';
import cors from 'cors'
import loginRegisterRouter from './Routes/loginRegister.js';
// creating express application
const app = express();

// extracting environment varibles
dotenv.config();

// DB connection
connectDB();

// database connection allowing application to parse json
app.use(express.json());


// middlewares
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'], // Add 'Content-Type' to the allowed headers
  }));


// Routes
app.use('/backend', [favouriteRouter, loginRegisterRouter])



// listening to the server
app.listen(process.env.PORT, ()=>{
    console.log(`--> Server listening to the http://localhost:${process.env.PORT} <--`.italic.blue);
})
