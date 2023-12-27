import mongoose from "mongoose";

export const connectToMongoose = async() =>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/issuetracker");
        console.log("Mongodb connected using mongoose");
    }catch(err){
        console.log("Error while connecting to db ", err);
    }
}
