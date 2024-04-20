import express from "express"
import cors from "cors"
import "dotenv/config"
import mongoose from "mongoose";

mongoose
    .connect(process.env.MONGO_DB_CONNECTION as string)
    .then(()=>console.log("connected to db"))
    .catch((err)=>console.log(err))

const app = express();
const port = 8800

app.use(express.json());
app.use(cors());

app.listen(port, ()=>{
    console.log(`server started on ${port}`)
})