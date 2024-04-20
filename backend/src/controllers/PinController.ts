import { Request, Response } from "express";
import Pin from "../models/Pin";

const createPin = async (req: Request, res: Response) => {
    const newPin = new Pin(req.body);
    try {
      const savedPin = await newPin.save();
      res.status(200).json(savedPin);
    } catch (err) {
      res.status(500).json(err);
    }
}

const getPin = async (req: Request, res: Response) => {
    try {
      const pins = await Pin.find();
      res.status(200).json(pins);
    } catch (err) {
      res.status(500).json(err);
    }
}


export default {
    createPin,
    getPin
}