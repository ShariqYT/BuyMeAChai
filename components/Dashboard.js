"use client"
import React, { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { updateProfile, fetchuser } from '@/actions/userAction';
import { ToastContainer, toast } from 'react-toastify'
import { Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
    const { data: session, update } = useSession();
    const router = useRouter();
    const [form, setForm] = useState({
        name: '',
        email: '',
        username: '',
        profilePic: '',
        coverPic: '',
        razorpayid: '',
        razorpaysecret: '',
    });

    useEffect(() => {
        if (session) {
            getData();
        } else {
            router.push('/login');
        }
    }, [router, session]);

    const getData = async () => {
        let u = await fetchuser(session.user.name);
        setForm({
            name: u.name || '',
            email: u.email || '',
            username: u.username || '',
            profilePic: u.profilePic || '',
            coverPic: u.coverPic || '',
            razorpayid: u.razorpayid || '',
            razorpaysecret: u.razorpaysecret || ''
        });
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let response = await updateProfile(form, session.user.name);
        if (response.error) {
            alert(response.error);
        } else {
            toast('Profile Updated', {
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
            update(); // This updates the session
        }
    };

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
            <div className='flex items-center gap-2 justify-center flex-col py-10'>
                <h1 className='font-bold mb-12 text-2xl md:text-4xl'>Welcome to your Dashboard</h1>
                <form onSubmit={handleSubmit}>
                    <div className='md:w-[30vw] w-[85vw] flex flex-col gap-2'>
                        <label htmlFor='name'>Name</label>
                        <input value={form.name} onChange={handleChange} placeholder='eg: John' className='p-2 border-2 outline-none focus:border-2 focus:border-sky-600 bg-[#4b6970] border-sky-400 w-full rounded-xl' type="text" name="name" id="name" />
                    </div>
                    <div className='md:w-[30vw] w-[85vw] flex flex-col gap-2'>
                        <label htmlFor='email'>Email</label>
                        <input value={form.email} onChange={handleChange} placeholder='your@email.com' className='p-2 border-2 outline-none focus:border-2 focus:border-sky-600 bg-[#4b6970] border-sky-400 w-full rounded-xl' type="email" name="email" id="email" />
                    </div>
                    <div className='md:w-[30vw] w-[85vw] flex flex-col gap-2'>
                        <label htmlFor='username'>Username</label>
                        <input value={form.username} onChange={handleChange} placeholder='eg: john001' className='p-2 border-2 outline-none focus:border-2 focus:border-sky-600 bg-[#4b6970] border-sky-400 w-full rounded-xl' type="text" name="username" id="username" />
                    </div>
                    <div className='md:w-[30vw] w-[85vw] flex flex-col gap-2'>
                        <label htmlFor='profilePic'>Profile Picture</label>
                        <input value={form.profilePic} onChange={handleChange} placeholder='upload profile picture' className='p-2 border-2 outline-none focus:border-2 focus:border-sky-600 bg-[#4b6970] border-sky-400 w-full rounded-xl' type="text" name="profilePic" id="profilePic" />
                    </div>
                    <div className='md:w-[30vw] w-[85vw] flex flex-col gap-2'>
                        <label htmlFor='coverPic'>Cover Picture</label>
                        <input value={form.coverPic} onChange={handleChange} placeholder='upload cover picture' className='p-2 border-2 outline-none focus:border-2 focus:border-sky-600 bg-[#4b6970] border-sky-400 w-full rounded-xl' type="text" name="coverPic" id="coverPic" />
                    </div>
                    <div className='md:w-[30vw] w-[85vw] flex flex-col gap-2'>
                        <label htmlFor='razorpayid'>Razorpay ID:</label>
                        <input value={form.razorpayid} onChange={handleChange} placeholder='Razorpay ID' className='p-2 border-2 outline-none focus:border-2 focus:border-sky-600 bg-[#4b6970] border-sky-400 w-full rounded-xl' type="password" name="razorpayid" id="razorpayid" />
                    </div>
                    <div className='md:w-[30vw] w-[85vw] flex flex-col gap-2'>
                        <label htmlFor='razorpaysecret'>Razorpay Secret:</label>
                        <input value={form.razorpaysecret} onChange={handleChange} placeholder='Razorpay Secret' className='p-2 border-2 outline-none focus:border-2 focus:border-sky-600 bg-[#4b6970] border-sky-400 w-full rounded-xl' type="password" name="razorpaysecret" id="razorpaysecret" />
                    </div>
                    <button type="submit" className="md:w-[30vw] w-[85vw] text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-xl text-lg px-5 py-2.5 text-center mt-10"><span className="drop-shadow-[0px_0px_4px_#696969]">Save</span></button>
                </form>
            </div>
        </>
    );
}

export default Dashboard;
