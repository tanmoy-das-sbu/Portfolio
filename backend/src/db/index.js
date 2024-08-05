import mongoose from "mongoose";

import { app } from "../app.js";

const connectDB = async ()=>{
    try {
      const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}`)
      console.log(`MongoDB connected !! DB HOST: ${connectionInstance.connection.host }`);
      app.on("Error:",(error)=>{
        console.log("Error", error);
        throw error
      })
    } catch (error) {
        console.log("\n\n MONGODB connection FAILED \n\n\n", error);
        process.exit(1)
    }
}
export default connectDB;