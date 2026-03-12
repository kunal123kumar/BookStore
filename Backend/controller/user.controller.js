import User from "../models/user.models.js";
import bcrypt from "bcrypt";

export const Signup = async (req, res) => {
    try{
        const {name, email, password} = req.body;
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({message: "User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({name, email, password: hashedPassword});
        await newUser.save();
        res.status(201).json({message: "User created successfully"});

    }catch(error){
        console.log("Error creating user:",error.message);
        res.status(500).json({"internal server error": error.message});
    }
}

export const Login = async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({message: "User not found"});
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(401).json({message: "Invalid credentials"});
        }
        res.status(200).json({
            message: "Login successful", 
            login: true,  // Boolean true
            name: user.name, 
            email: user.email
        });
    }catch(error){
        console.log("Error logging in:",error.message);
        res.status(500).json({"internal server error": error.message});
    }
}