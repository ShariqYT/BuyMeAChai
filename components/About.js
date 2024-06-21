"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'


const About = () => {
    return (
        <>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <div className='flex flex-col justify-center items-center'>
                        <motion.h2 viewport={{ once: true }} initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="text-xl text-gray-500 font-extrabold tracking-tight lg:text-3xl ">
                            About
                        </motion.h2>
                        <motion.div viewport={{ once: true }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className='flex justify-center items-center'>
                            <p className='font-Fasthand lg:text-6xl text-2xl'> Buy me a chai</p>
                            <Image priority={true} width={2} height={2} unoptimized className="w-[70px] lg:w-100 drop-shadow-[0px_0px_5px_#a1a1a1]" src="/coffee.gif" alt="" />
                        </motion.div>
                    </div>
                    <motion.p viewport={{ once: true }} initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="max-w-2xl mx-auto text-md text-gray-300 lg:mt-4">
                        Empowering creators, one chai at a time.
                    </motion.p>
                </div>

                <div className="mt-10">
                    <motion.div viewport={{ once: true }} initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="text-xl lg:text-2xl leading-9 font-bold text-cyan-500">
                        Our Mission
                    </motion.div>
                    <motion.p viewport={{ once: true }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }} className="mt-2 text-sm lg:text-lg leading-8 text-gray-300">
                        At Buy me a chai, we are dedicated to providing a simple and meaningful way for creators and artists to receive support and appreciation from their audience. We believe in the power of small gestures to make a big impact on the lives of creators.
                    </motion.p>
                </div>

                <div className="mt-10">
                    <motion.div viewport={{ once: true }} initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="text-xl lg:text-2xl leading-9 font-bold text-cyan-500">
                        Our Vision
                    </motion.div>
                    <motion.p viewport={{ once: true }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }} className="mt-2 text-sm lg:text-lg leading-8 text-gray-300">
                        Our vision is to create a supportive community where every creator feels valued and encouraged to continue creating. We aim to foster connections between creators and their supporters through the act of buying a chai, symbolizing gratitude and recognition.
                    </motion.p>
                </div>

                <div className="mt-10">
                    <motion.div viewport={{ once: true }} initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="text-xl lg:text-2xl leading-9 font-bold text-cyan-500">
                        Meet the Team
                    </motion.div>
                    <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Team member cards */}
                        <motion.div viewport={{once: true}} initial={{opacity: 0 }} animate={{opacity: 1 }} transition={{ duration: 1, delay: 2 }} className="bg-[rgba(161,214,255,.2)] border border-cyan-400 overflow-hidden shadow-[0px_0px_20px_#40acff] rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <motion.h3 viewport={{once: true}} initial={{x: -100,opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay:2 }} className="text-xl leading-6 font-medium text-cyan-500">
                                    Mohammad Shariq
                                </motion.h3>
                                <motion.p  viewport={{once: true}} initial={{x: -100,opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay:2.2 }} className="mt-2 text-sm leading-5 text-gray-300">
                                    Co-founder & CEO
                                </motion.p>
                                <motion.div viewport={{once: true}} initial={{x: -100,opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay:2.4 }} className="mt-3">
                                    <Link href={'/shariqmohd737'} className="underline text-cyan-400 hover:text-cyan-600 transition ease-in-out duration-150">
                                        View profile
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Repeat for each team member */}
                    </div>
                </div>

                <div className="mt-10">
                    <motion.div viewport={{ once: true }} initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="text-xl lg:text-2xl leading-9 font-bold text-cyan-500">
                        Contact Us
                    </motion.div>
                    <motion.p viewport={{once: true}} initial={{x: -100,opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 2.6 }} className="mt-2 text-sm lg:text-lg leading-8 text-gray-300">
                        Have questions or want to collaborate? Reach out to us at <a href="mailto:info@buymeachai.com" className="text-cyan-400 hover:text-cyan-600 transition ease-in-out duration-150">info@buymeachai.com</a>.
                    </motion.p>
                </div>
            </div>
        </>
    )
}

export default About
