import express from 'express';
import { loginUser, registerUser } from '../Controllers/loginRegister.js';

const loginRegisterRouter = express.Router();

// Register user
loginRegisterRouter.post('/register', registerUser);

// Login user
loginRegisterRouter.post('/login', loginUser);


export default loginRegisterRouter;