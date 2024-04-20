import { Request, Response } from "express";
import User from "../models/User";
const bcrypt = require('bcrypt');

const registerUser = async (req: Request, res: Response) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      });
      const user = await newUser.save();
      res.status(200).json(user._id);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
}

const loginUser =async (req: Request, res: Response) => {
  try {
    
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong username or password");
    const validPassword = await bcrypt.compare(
      req.body.password,
      user?.password
    );
    !validPassword && res.status(400).json("Wrong username or password");

    res.status(200).json({ _id: user?._id, username: user?.username });
  } catch (err) {
    res.status(500).json(err);
  }
}

export default {
    registerUser,
    loginUser
}