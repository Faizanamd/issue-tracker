import mongoose from "mongoose";

export const connectToMongoose = async() =>{
    try{
        await mongoose.connect("mongodb+srv://famdizan8391:2OyYjngmY2NBBgZX@cluster0.kn9rmf3.mongodb.net/?retryWrites=true&w=majority");
        console.log("Mongodb connected using mongoose");
    }catch(err){
        console.log("Error while connecting to db ", err);
    }
}
