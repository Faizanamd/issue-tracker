// Importing the mongoose library for MongoDB interactions
import mongoose from "mongoose";

// Function to connect to MongoDB using mongoose
export const connectToMongoose = async () => {
    try {
        // Connecting to MongoDB using the provided connection string
        await mongoose.connect("mongodb+srv://famdizan8391:2OyYjngmY2NBBgZX@cluster0.kn9rmf3.mongodb.net/?retryWrites=true&w=majority");

        // Logging a success message if the connection is successful
        console.log("Mongodb connected using mongoose");
    } catch (err) {
        // Logging an error message if there is an issue connecting to the database
        console.log("Error while connecting to db ", err);
    }
}
