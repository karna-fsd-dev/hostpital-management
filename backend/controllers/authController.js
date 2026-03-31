const user=require("../models/user")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")

exports.signup =async(req,res)=>{
    try {
        const {email,password,role}=req.body
        const userExists=await user.find({email})
        if(userExists){
            return res.status(400).json({message:"user already exit"})
        }
        const hashedpassword=await bcrypt.hash(password,10)
        const userSignup=await user.create({
            email,
            password:hashedpassword,
            role
        })
        res.status(201).json(userSignup)
    } catch (error) {
        res.status(500).json(error)
    }
}
exports.login=async(req,res)=>{
    try {
        const {email,password}=req.body
        const login=await user.findOne({email})
        if(user){
            return res.status(400).json({message:"user not found"})
        }
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({message:"Invalid password"})
        }
        const token=jwt.sign(
            {id:user._id,
                role:user.role},
                process.env.JWT_SECRET,
                {expiresIn:"1d"}
        )
        res.json({token,user})
    } catch (error) {
        return res.status(500).json(error)
    }
}