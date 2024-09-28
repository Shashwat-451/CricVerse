import { User } from "../models/userSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
class AuthController{
    async login(req,res){
        try{
           const {email,password}=req.body;
           if(!email || !password){
            return res.status(400).json({
              success:false,
              message:"All Fields are required"
            })
           }
           //use findone becz find return an array and you need single user
           const user=await User.findOne({email});

           if(!user){
            return res.status(400).json({
              success:false,
              message:"User Not Registered. Please Signup first"
            })
           }

           if(await bcrypt.compare(password,user.password)){
              
            //should be an object
            const token=await jwt.sign({email:user.email,id:user._id},process.env.JWT_SECRET,{expiresIn:"48h"});

            const options={
              httpOnly:true,
              expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
            }
            
            user.password=undefined;

            res.cookie("token",token,options).status(200).json({
              success:true,
              message:"LOGIN Successfull",
              token,
              user
            })
           } 
           else{
            //use 401 for invalid credentials
            return res.status(401).json({
              success:false,
              message:"Password is incorrect"
            })
           }
        }
        catch(error){
          console.log(error);
          return res.status(500).json({
            success:false,
            error:error,
            message:"Internal Server Error"
          })
        }
    }

    async signup(req, res) {
      try {
          const { firstName, lastName, email, password, confirmPassword } = req.body;
  
          // Check if all fields are provided
          if (!firstName || !lastName || !email || !password || !confirmPassword) {
              return res.status(400).json({
                  success: false,
                  message: "All fields are required"
              });
          }
  
          // Check if passwords match
          if (password !== confirmPassword) {
              return res.status(400).json({
                  success: false,
                  message: "Passwords do not match"
              });
          }
  
          // Check if user already exists
          const user = await User.findOne({ email: email });
          if (user) {
              return res.status(400).json({
                  success: false,
                  message: "User already exists. Please log in."
              });
          }
  
          // Hash the password
          const hashedPassword = await bcrypt.hash(password, 10);
  
          // Create new user (exclude confirmPassword from database)
          const newUser = await User.create({ 
              firstName, 
              lastName, 
              email, 
              password: hashedPassword 
          });
  
          // Success response
          return res.status(201).json({
              success: true,
              message: "User registered successfully"
          });
  
      } catch (error) {
          return res.status(500).json({
              success: false,
              message: "Internal Server Error",
              error: error.message // Send the error message to the client
          });
      }
  }
  
}

export default new AuthController();