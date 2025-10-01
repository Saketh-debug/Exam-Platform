import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import route from "./routes/userRoute.js";

const app = express();
app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

mongoose
        .connect(MONGOURL)
        .then(() => {
                console.log("DB connected succesfully.")
                app.listen(PORT,()=>{
                        console.log(`Server is running on the port: ${PORT} `)
                })
        })
        .catch((eror) => console.log(error));

app.use("/api",route);