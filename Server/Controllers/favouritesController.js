import userModel from "../Model/UserModel.js";
import favouriteModel from "../Model/favouritesModel.js";


export const postFavourite = async(req, res) => {
    try {
        const {id ,alt_description, first_name, last_name, urls, username} = await req.body;

        const newFavourite = {
            id,
            alt_description,
            first_name,
            last_name,
            urls,
            username
        };
        
        let favourite =  await favouriteModel.create(newFavourite)

        res.send({
            message: "successfully added to favourite",
            favourite
        })

        console.log("successFvrt") //-------------------delete
        
        
        
    } catch (error) {
        res.send(error.message);
        console.log(error.message) //-------------------delete
    }

}


export const getFavourite = async(req, res) => {
    try {
        const favourites = await favouriteModel.find({})

        res.send({
            message: "favourites fetched succuessfully",
            favourites
        })
    } catch (error) {
        res.status(500).send(error.message)
        console.log(error.message); //-------------------delete
    }
}

export const removeFromFavourites = async(req, res) => {
    try {
        const id = req.params.id;

        const deleteItem = await favouriteModel.findByIdAndDelete(id)
        res.send(id)
        

    } catch (error) {
        res.status(500).send(error.message)
    }
}

// post favourite to a logged in user

export const postFavouriteToLoggedInUser = async(req,res) => {
    try {
        const {id ,alt_description, first_name, last_name, urls, username, userId} = await req.body;

        let fetchedData = {
            id: id,
            alt_description: alt_description,
            first_name: first_name,
            last_name: last_name,
            urls: urls,
            username: username
        }

        // console.log(`id = ${id} fname = ${first_name} lname = ${last_name} urls = ${urls} alt = ${alt_description} username = ${username}`);
        let checkUserId = await userModel.findOne({username: userId});
        // console.log("1st", checkUserId);

        // let newData = await checkUserId.likedPhotos.push({id: id, alt_description: alt_description, first_name:first_name, last_name:last_name,urls:urls, username:username});
        // await checkUserId.save();

        await checkUserId.likedPhotos.push(fetchedData);
        await checkUserId.save();   

        

        

        
        



        

            // let newFavourite =  await new userModel({id,alt_description,first_name, last_name, urls, username}).save();
            // res.send({success:true, addedFavourite: newFavourite});
            // console.log(newFavourite, "success")
        

        // console.log("done", newData);

    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
        console.log("err in update", error.message)
    }
}