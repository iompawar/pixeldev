import mongoose from "mongoose";
import 'colors'

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("--> DB connection successfull <--".italic.blue);
    }
    catch(err){
        console.log(err.message);
    }   
}

export default connectDB;