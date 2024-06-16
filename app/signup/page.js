"use client"
import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import Link from 'next/link'


const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        document.title = "Signup - BuyMeAChai"
        if (session) {
            router.push('/dashboard');
        }
    }, [session, router]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Please enter all fields');
            return;
        }

        try {

            const resUserExists = await fetch('api/userExists', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const { user } = await resUserExists.json();

            if (user) {
                setError('User already exists');
                return;
            }

            const res = await fetch('api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (res.ok) {
                const form = e.target;
                form.reset();
                router.push('/login');
            } else {
                console.log("Something went wrong");
            }
        } catch (error) {
            console.log(error);
        }
    }

    if (session) {
        return null; // or a loading spinner if you prefer
    }

    return (
        <div
            className="flex items-center justify-center min-w-screen min-h-screen"
        >
            <div className="grid gap-8">
                <div
                    id="back-div"
                    className="bg-gradient-to-r from-blue-500 to-cyan-300 rounded-[26px] m-4 "
                >
                    <div
                        className="border-[20px] border-transparent rounded-[20px] bg-cyan-950 shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2"
                    >
                        <h1 className="mt-1 mb-14 font-bold text-5xl text-gray-200 text-center cursor-default">
                            Sign up
                        </h1>
                        {error && (<div className='border mb-8 dark:bg-red-200 dark:border-red-500 p-3 shadow-md  outline-none rounded-lg w-full ease-in-out duration-300'>
                            <p className="text-red-500 font-semibold">{error}</p>
                        </div>)}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="email" className="mb-2 dark:text-gray-200 text-lg">Email</label>
                                <input onChange={e => setEmail(e.target.value)}
                                    id="email"
                                    className="border dark:bg-cyan-700 dark:text-gray-300 dark:border-cyan-400 p-3 shadow-md placeholder:text-base  outline-none rounded-lg w-full focus:scale-105 focus:border-blue-300 focus:border-2 ease-in-out duration-300"
                                    type="email"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="mb-2 dark:text-gray-200 text-lg">Password</label>
                                <input onChange={e => setPassword(e.target.value)}
                                    id="password"
                                    className="border dark:bg-cyan-700 dark:text-gray-300 dark:border-cyan-400 p-3 mb-2 shadow-md placeholder:text-base outline-none rounded-lg w-full focus:scale-105 focus:border-blue-300 focus:border-2 ease-in-out duration-300"
                                    type="password"
                                    placeholder="Password"
                                    required
                                />
                            </div>
                            <button className="button w-full disabled:opacity-50 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2"
                                type="submit"
                            >
                                SIGNUP
                            </button>
                        </form>
                        <div className="flex flex-col mt-4 items-center justify-center text-sm">
                            <h3>
                                <span className="cursor-default dark:text-gray-200">Have an account?</span>
                                <Link
                                    className="group text-blue-400 transition-all duration-100 ease-in-out"
                                    href={'/login'}
                                >
                                    <span
                                        className="bg-left-bottom ml-1 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                                    >
                                        Login
                                    </span>
                                </Link>
                            </h3>
                        </div>
                        <div
                            id="third-party-auth"
                            className="flex gap-5 items-center justify-center mt-5 flex-wrap"
                        >
                            <button
                                onClick={() => signIn('google')}
                                className="hover:scale-125 shadow-cyan-400 ease-in-out duration-300 shadow-lg p-2 rounded-full m-1"
                            >
                                <img
                                    className="max-w-[25px]"
                                    src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                                    alt="Google"
                                />
                            </button>

                            <button
                                onClick={() => signIn('github')}
                                className="hover:scale-125 shadow-cyan-400 ease-in-out duration-300 shadow-lg p-2 rounded-full m-1"
                            >
                                <img
                                    className="max-w-[25px] filter dark:invert"
                                    src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/"
                                    alt="Github"
                                />
                            </button>
                        </div>
                        <div
                            className="text-gray-200 flex text-center flex-col mt-4 items-center text-sm"
                        >
                            <p className="cursor-default">
                                By signing in, you agree to our

                                <Link
                                    className="group text-blue-400 transition-all duration-100 ease-in-out"
                                    href={'/privacy-policy'}
                                ><span
                                    className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-cyan-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                                > Privacy Policy </span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
