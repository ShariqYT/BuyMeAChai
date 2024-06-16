import connectDB from "@/db/connectDb"
import User from "@/models/User"
import { notFound } from "next/navigation"
import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        const { email } = await req.json()
        await connectDB()
        const user = await User.findOne({ email }).select("_id")
        return NextResponse.json({user})
    } catch (error) {
        return NextResponse.json(error)
    }
}