import express from "express"
import cors from "cors"
import "dotenv/config"
import mongoose from "mongoose";
import PinRoutes from "./routes/pins"
import UserRoutes from "./routes/users"

mongoose
    .connect(process.env.MONGO_DB_CONNECTION as string)
    .then(()=>console.log("connected to db"))
    .catch((err)=>console.log(err))

const app = express();
const port = 8800

app.use(express.json());
app.use(cors());

app.use("/api/pins", PinRoutes)
app.use("/api/users", UserRoutes)

app.listen(port, ()=>{
    console.log(`server started on ${port}`)
})