import mongoose from "mongoose";
const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
        });
        console.log("DB Connected!")
    } catch (error) {
        console.error("DB Connection failed!");
        console.error(error);
    }
}

export default connectDB