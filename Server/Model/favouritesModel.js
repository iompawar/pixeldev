import mongoose from "mongoose";

const favouritesSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    alt_description:{
        type: String,
        require: true
    },
    first_name:{
        type:String,
        required: true
    },
    last_name:{
        type: String,
    },
    urls:{
        type:String,
        required: true
    },
    username: {
        type: String,
        required: true
    }

})


const favouriteModel = new mongoose.model('favourites', favouritesSchema);

export default favouriteModel;