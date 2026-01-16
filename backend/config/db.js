import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://samir:samir123@cluster0.avqbv8y.mongodb.net/food-del').then(() => console.log("MongoDB connected successfully"));
}
