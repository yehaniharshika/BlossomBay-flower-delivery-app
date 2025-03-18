import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://yehani:pavi1998@cluster0.ieob0.mongodb.net/flower-delivery').then(
        ()=>console.log("DB Connected"));
}