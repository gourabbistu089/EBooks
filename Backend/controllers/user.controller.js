import { User } from "../models/user.model.js";

import bcrypt from "bcryptjs";
export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password,10)
        const createdUser = await User.create({ name, email, password:hashedPassword });
        res.status(201).json({
            success: true,
            message: "User created successfully",
            user:{
                name: createdUser.name,
                email: createdUser.email,
                id: createdUser._id
            }
        });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}   

export const signin = async (req, res) => { 
    try {
        const { email, password } = req.body;
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message: "User does not exist"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message: "Invalid credentials"});
        }
        res.status(200).json({message: "Login successful" ,user: {
                name: user.name,
                email: user.email,
                id: user._id
        }
        });
        
    } catch (error) {
        console.log(error)
    }
}