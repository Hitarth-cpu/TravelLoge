import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
const app = express()
dotenv.config()

const connect = async ()=>{
try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB!!")
  } catch (error) {
   throw error
  }
};

mongoose.connection.on("Disconnected", ()=>{
    console.log("MongoDB disconnected")
})
mongoose.connection.on("Connected", ()=>{
    console.log("MongoDB connected!!")
})
app.listen(9900, ()=>{
    connect()
    console.log("Server is running on port 9900!")
})