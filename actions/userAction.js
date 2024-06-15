"use server"

import Razorpay from "razorpay"
import User from "@/models/User"
import Payment from "@/models/Payment"
import connectDB from "@/db/connectDb"

export const initiate = async (amount, to_username, paymentform) => {
    await connectDB();
    let user = await User.findOne({ username: to_username });
    const secret = user.razorpaysecret;
    var instance = new Razorpay({ key_id: user.razorpayid, key_secret: secret })
    
    let options = {
        amount: amount,
        currency: "INR",
    }

    let x = await instance.orders.create(options)

    await Payment.create({ name: paymentform.name, message: paymentform.message, to_user: to_username, orderId: x.id, amount: amount/100 })

    return x;
}

export const fetchuser = async (username) => {
    await connectDB();
    let u = await User.findOne({ username: username })
    let user = u.toObject({ flattenObjectIds: true })
    return user
}

export const fetchpayment = async (username) => {
    await connectDB();
    let p = await Payment.find({ to_user: username }).sort({ amount: -1 }).lean()
    return p
}

export const updateProfile = async (data, oldusername) => {
    await connectDB();
    let ndata = data

    if (oldusername !== ndata.username) {
        let u = await User.findOne({ username: ndata.username })
        if (u) {
            return { error: "Username already taken" }
        }
        await User.updateOne({ email: ndata.email }, ndata)
        await Payment.updateMany({ to_user: oldusername }, { to_user: ndata.username })
    }
    else{
        await User.updateOne({ email: ndata.email }, ndata)
    }
    return { success: true };  
}
