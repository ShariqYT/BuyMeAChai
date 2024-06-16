import connectDB from "@/db/connectDb";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User"; // Ensure this import is correct and the User model is defined

export async function POST(req) {
    try {
        const { email, password } = await req.json();
        
        // Check if email and password are provided
        if (!email || !password) {
            return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Connect to the database
        await connectDB();
        
        // Create the user
        const newUser = await User.create({ email, password: hashedPassword, username: email.split("@")[0] });

        return NextResponse.json({ message: "User signed up successfully", user: newUser }, { status: 200 });
    } catch (error) {
        console.error("Error occurred while signing up the user:", error);
        return NextResponse.json({ message: "An error occurred while signing up the user" }, { status: 500 });
    }
}
