
import PaymentPage from '@/components/PaymentPage'
import React from 'react'
import { notFound } from 'next/navigation'
import connectDB from '@/db/connectDb'
import User from '@/models/User'

const username = async ({ params }) => {
  const checkUser = async () => {
    await connectDB()
    let u = await User.findOne({ username: params.username })
    if (!u){ return notFound()}
  }
  await checkUser()

  return (
    <>
      <PaymentPage params={params} />
    </>
  )
}

export default username

export async function generateMetadata({ params }) {
  return {
    title:`@${params.username} - BuyMeAChai`
  }
}