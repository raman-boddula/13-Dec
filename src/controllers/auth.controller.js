const jwt = require("jsonwebtoken");

const User = require("../models/user.model");

const path = require('path')

const newToken = (user) => {
    return jwt.sign({ user: user }, "raman12");
}


const register = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email }).lean().exec();

        if (user) 
            return res.status(401).json({
                status: "failed",
                message:"please provide another email",
            })
        user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                profile_pic: req.file.path,
                roles: req.body.roles,
            });
        const token = newToken(user);
        res.status(200).json({user,token})
    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });  
    }
}
const login = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email }).lean().exec();

        if (!user)
            return res.status(401).json({
                status: "failed",
                message: "please provide another email",
            })
        let match = await user.checkPassword(req.body.password);
        if (!match) {
            return res.status(401).json({
                status: "failed",
                message: "please provide another email",
            })

        }
        const token = newToken(user);
        res.status(201).json({user,token})
    }

    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });  
    }
}    

module.exports={register,login,newToken}
