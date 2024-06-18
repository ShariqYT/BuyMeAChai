import connectDB from "@/db/connectDb";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        await connectDB();
        return NextResponse.json(await User.find({}))
    }catch(error){
        console.log(error)
    }
}