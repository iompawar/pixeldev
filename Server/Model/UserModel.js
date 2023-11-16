import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
    },
    username:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    active: {
        type: Boolean,
        default: false
    },
    likedPhotos:[
        {
            id: String,
            urls: String,
            username: String
        }
    ],
    uploads:[
        {
            id: String,
            urls: String,
            username: String
        }
    ]
},{timestamps: true})


const userModel = new mongoose.model('user', userSchema);


export default userModel;