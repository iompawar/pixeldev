import userModel from "../Model/UserModel.js";


export const registerUser = async(req,res) => {
    let {email, username, password, likedPhotos, uploads} = req.body;


    try {
        let check = await userModel.findOne({email});
        if(check){
            res.send("User id already registered please login");
            console.log("user already exist")
        }
        if(!check){
            let newUser = await new userModel({email, username, password, likedPhotos, uploads}).save();

            res.send({
                success: true,
                newUser
            })

            console.log("User successfully registered");
        }

        
    } catch (error) {
        res.send(error.message);
        console.log("Error in register user --> ",error.message);
    }
}

export const loginUser = async(req, res) => {
    let {email, username, password} = await req.body;
    try {
        let checkedUser =  await userModel.findOne({email});
        if(!checkedUser)
        {
            res.send(false);
            console.log(`${email} is not registered please register before login`);
        }
        else{
            if(password === checkedUser.password && username === checkedUser.username){
                res.send({
                    success: true,
                    user: checkedUser
                })
                console.log("login success")
            }
            else{
                res.send("password doesnt match with the records")
                console.log("password doesnt match with the records")
            }
        }
    } catch (error) {
        res.send(error.message);
        console.log("loginUserError --> ", error);
    }
}