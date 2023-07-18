import User from "../models/user.js";

export const signup = async (req, res)=>{
    try{
        const {name, email, password} = req.body;
        if(!name) return res.status(400).send("Name is must be provided");
        if(!password || password.length < 8) {
        return res.status(400).send("Password is required and must be of 8 character");
        }
    let userExists= await User.findOne({email}).exec();
    if (userExists) return res.status(200).send("Email is taken");

    const user= new User({
        name,
        email,
        password
    });
    await user.save();
    }
    catch(err){
        console.log(err);
        return res.status(400).send("error. try again later")
    }
}