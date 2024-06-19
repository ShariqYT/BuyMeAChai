"use client"
import React, { useCallback, useEffect, useState } from 'react'
import Script from 'next/script'
import { fetchuser, fetchpayment, initiate } from '@/actions/userAction'
import { useSession } from 'next-auth/react'
import { ToastContainer, toast } from 'react-toastify'
import { Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams, useRouter } from 'next/navigation'
import Image from 'next/image'

const PaymentPage = ({ params }) => {
    const [paymentform, setPaymentform] = useState({
        name: "",
        message: "",
        amount: 0,
        contact: 0
    })
    const [currentUser, setCurrentUser] = useState(null)
    const [payments, setPayments] = useState([])
    const { data: session } = useSession();
    const searchParams = useSearchParams();
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    const getData = useCallback(async () => {
        setLoading(true);
        try {
            let u = await fetchuser(params.username)
            setCurrentUser(u)
            let dbpayments = await fetchpayment(params.username)
            setPayments(dbpayments)
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    }, [params.username]);

    useEffect(() => {
        getData()
    }, [getData]);

    useEffect(() => {
        if (searchParams.get("paymentdone") == "true") {
            toast('❣️ Thank you for your appreciation', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
        router.push(`/${params.username}`)
    }, [params.username, router, searchParams]);

    const handleChange = (e) => {
        setPaymentform({
            ...paymentform,
            [e.target.name]: e.target.value
        })
    }

    const pay = async (amount) => {
        if (!paymentform.contact) {
            toast.error('Enter Mobile Number', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        try {
            let a = await initiate(amount, params.username, paymentform)
            let orderId = a.id
            var options = {
                "key": currentUser.razorpayid,
                "amount": amount,
                "currency": "INR",
                "name": "Buy Me A Chai",
                "description": "Test Transaction",
                "image": "https://example.com/your_logo",
                "order_id": orderId,
                "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
                "prefill": {
                    "name": paymentform.name,
                    "email": session?.user?.email || "",
                    "contact": paymentform.contact
                },
                "notes": {
                    "address": "Razorpay Corporate Office"
                },
                "theme": {
                    "color": "#3399cc"
                }
            }

            var rzp1 = new Razorpay(options);
            rzp1.open();
        } catch (error) {
            console.error('Payment initiation error:', error);
            toast.error('Error initiating payment', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    const completedPayments = payments.filter(payment => payment.done === true);
    const totalRaised = payments
        .filter(payment => payment.done)
        .reduce((total, payment) => total + payment.amount, 0);
    const formatAmount = totalRaised.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 });

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="rounded-full h-20 w-20 bg-cyan-600 animate-ping"></div>
            </div>
        )
    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <div className='cover w-full relative'>
                <Image width={2} priority={true} height={2} unoptimized className='md:object-cover object-cover w-full md:h-[340px] h-[200px]' src={`${currentUser.coverPic}`} alt="cover pic" />
                <div className='absolute -bottom-12 md:right-[47.5%] right-[39%]'>
                    <Image width={2} priority={true} height={2} unoptimized className='rounded-xl shadow-[0px_0px_10px_rgba(0,150,209,.5)] w-24 md:w-[150] md:h-[150]' src={`${currentUser.profilePic}`} alt="profile pic" />
                </div>
            </div>
            <div className='info flex flex-col justify-center md:items-center my-20'>
                <p className=' text-center font-bold text-3xl mb-4'>@{currentUser.username}</p>
                <div className='text-lg text-center text-gray-300'>
                    Show some supports for {currentUser.name}
                </div>
                <div className='text-md mt-5 text-center text-gray-400'>
                    {/* show only those whose payment is done */}
                    <p><span className='font-bold'>{completedPayments.length}</span> Supporters</p>
                    <p><span className='font-bold'>{formatAmount}</span> Raised</p>
                </div>
                <div className="payment flex m-5 flex-col md:flex-row gap-6 md:w-[70%] my-20">
                    <div className="suppoters md:w-1/2 w-full bg-zinc-950 border border-cyan-500 rounded-xl p-5 md:p-10">
                        <div>
                            <p className='text-xl font-semibold mb-10'>About <span className='capitalize'>{currentUser.name}</span></p>
                            <p className='mb-4'>Hi! I am {currentUser.name}, and we're a group of volunteers working on a new social media and portfolio platform for artists and art enthusiasts.</p>
                            <p>You can support us on this page by buying the team a coffee, or reach out if you're interested in joining our team! ❤️</p>
                        </div>
                        <div className='border border-white mt-10 opacity-30'></div>
                        <h2 className='text-2xl font-bold my-5'>Top Supporters</h2>
                        {/* Show list of all the supporters as a leaderboard */}
                        <ul className='overflow-y-scroll h-72'>
                            {payments.length == 0 && <p className='p-5'>No supporters yet</p>}
                            {payments.map((p, i) => {
                                const formatAmount = (amount) => {
                                    return amount.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 });
                                }
                                if (p.done) {
                                    return (
                                        <li key={i} className='my-4 flex items-center gap-4 md:mx-4'>
                                            <Image width={2} height={2} unoptimized className='md:w-[40] w-8' src="/user.png" alt="" />
                                            <p><span className='font-bold text-cyan-400'>{p.name}</span> donated <span className='font-bold text-yellow-400'> {formatAmount(p.amount)} </span>. <span className='text-gray-400 italic'>"{(p.message)}"</span></p>
                                        </li>
                                    )
                                }
                            })}

                        </ul>
                    </div>
                    <div className="suppoters md:w-1/2 w-full bg-zinc-950 border border-cyan-500 rounded-xl p-5 md:p-10">
                        <div className='flex gap-2 items-center'>
                            <h2 className='font-bold text-3xl'>Buy <span className='capitalize'>{currentUser.name}</span> a Chai </h2><span className='ring-1 text-xs ring-white rounded-full px-2 p-0.5'>?</span>
                        </div>
                        <div className='make payment font-semibold'>
                            <div className='w-full flex flex-col gap-4'>
                                <div className='mt-10 flex flex-col gap-2'>
                                    <div className='flex gap-2'>
                                        <svg className='w-10 fill-white ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M192 128c0-17.7 14.3-32 32-32s32 14.3 32 32v7.8c0 27.7-2.4 55.3-7.1 82.5l-84.4 25.3c-40.6 12.2-68.4 49.6-68.4 92v71.9c0 40 32.5 72.5 72.5 72.5c26 0 50-13.9 62.9-36.5l13.9-24.3c26.8-47 46.5-97.7 58.4-150.5l94.4-28.3-12.5 37.5c-3.3 9.8-1.6 20.5 4.4 28.8s15.7 13.3 26 13.3H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H460.4l18-53.9c3.8-11.3 .9-23.8-7.4-32.4s-20.7-11.8-32.2-8.4L316.4 198.1c2.4-20.7 3.6-41.4 3.6-62.3V128c0-53-43-96-96-96s-96 43-96 96v32c0 17.7 14.3 32 32 32s32-14.3 32-32V128zm-9.2 177l49-14.7c-10.4 33.8-24.5 66.4-42.1 97.2l-13.9 24.3c-1.5 2.6-4.3 4.3-7.4 4.3c-4.7 0-8.5-3.8-8.5-8.5V335.6c0-14.1 9.3-26.6 22.8-30.7zM24 368c-13.3 0-24 10.7-24 24s10.7 24 24 24H64.3c-.2-2.8-.3-5.6-.3-8.5V368H24zm592 48c13.3 0 24-10.7 24-24s-10.7-24-24-24H305.9c-6.7 16.3-14.2 32.3-22.3 48H616z" />
                                        </svg>
                                        <input onChange={handleChange} value={paymentform.name || ''} placeholder='Enter Name' className='p-2 border-2 outline-none focus:border-2 focus:border-sky-600 bg-[#4b6970] border-sky-400 w-full rounded-xl' type="text" name="name" id="name" />
                                    </div>
                                    <div className='flex gap-2'>
                                        <svg className='w-10 fill-white p-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z" /></svg>
                                        <input onChange={handleChange} value={paymentform.message || ''} placeholder='Enter Message' className='p-2 border-2 outline-none 
                                    focus:border-2 focus:border-sky-600 bg-[#4b6970] border-sky-400 w-full rounded-xl' type="text" name="message" id="message" />
                                    </div>
                                    <div className='flex gap-2'>
                                        <svg className='w-10 fill-white p-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M0 64C0 46.3 14.3 32 32 32H96h16H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H231.8c9.6 14.4 16.7 30.6 20.7 48H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H252.4c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256h80c32.8 0 61-19.7 73.3-48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H185.3C173 115.7 144.8 96 112 96H96 32C14.3 96 0 81.7 0 64z" /></svg>
                                        <input onChange={handleChange} value={paymentform.amount || ''} placeholder='Enter Amount' className='p-2 border-2 outline-none 
                                    focus:border-2 focus:border-sky-600 bg-[#4b6970] border-sky-400 w-full rounded-xl' type="number" name="amount" id="amount" />
                                    </div>
                                    <div className='flex gap-2'>
                                        <svg className='w-10 fill-white p-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z" /></svg>
                                        <input onChange={handleChange} value={paymentform.contact || ''} placeholder='Enter Mobile Number' className='p-2 border-2 outline-none focus:border-2 focus:border-sky-600 bg-[#4b6970] border-sky-400 w-full rounded-xl' type="number" name="contact" id="contact" />
                                    </div>
                                </div>
                                <button
                                    disabled={
                                        !(paymentform.name.length >= 3 && paymentform.amount >= 1 && paymentform.contact.length === 10)
                                    }
                                    type="button"
                                    className="disabled:opacity-50 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2"
                                    onClick={() => pay((paymentform.amount) * 100 || 0)}
                                >
                                    <span className="drop-shadow-[0px_0px_4px_#696969]">PAY</span>
                                </button>
                            </div>
                            {/* Or choose from these amounts */}
                            <div className='w-full font-semibold mt-5 flex gap-4'>
                                <button className='bg-[#4b6970] border-2 hover:bg-sky-700 border-sky-400 p-3 rounded-xl' onClick={() => pay(1000)}>Pay ₹10</button>
                                <button className='bg-[#4b6970] border-2 hover:bg-sky-700 border-sky-400 p-3 rounded-xl' onClick={() => pay(5000)}>Pay ₹50</button>
                                <button className='bg-[#4b6970] border-2 hover:bg-sky-700 border-sky-400 p-3 rounded-xl' onClick={() => pay(10000)}>Pay ₹100</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage