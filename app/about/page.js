import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <div className='flex justify-center items-center'>
                        <h2 className="text-2xl font-extrabold tracking-tight md:text-4xl ">
                            About BuyMeAChai!
                        </h2>
                        <Image width={2} height={2} unoptimized className="w-[70px] md:w-100 drop-shadow-[0px_0px_5px_#a1a1a1]" src="/coffee.gif" alt="" />
                    </div>
                    <p className="max-w-2xl mx-auto text-md text-gray-300 md:mt-4">
                        Empowering creators, one chai at a time.
                    </p>
                </div>

                <div className="mt-10">
                    <div className="text-xl md:text-2xl leading-9 font-bold text-cyan-500">
                        Our Mission
                    </div>
                    <p className="mt-2 text-sm md:text-lg leading-8 text-gray-300">
                        At Buy me a chai, we are dedicated to providing a simple and meaningful way for creators and artists to receive support and appreciation from their audience. We believe in the power of small gestures to make a big impact on the lives of creators.
                    </p>
                </div>

                <div className="mt-10">
                    <div className="text-xl md:text-2xl leading-9 font-bold text-cyan-500">
                        Our Vision
                    </div>
                    <p className="mt-2 text-sm md:text-lg leading-8 text-gray-300">
                        Our vision is to create a supportive community where every creator feels valued and encouraged to continue creating. We aim to foster connections between creators and their supporters through the act of buying a chai, symbolizing gratitude and recognition.
                    </p>
                </div>

                <div className="mt-10">
                    <div className="text-xl md:text-2xl leading-9 font-bold text-cyan-500">
                        Meet the Team
                    </div>
                    <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Team member cards */}
                        <div className="bg-[rgba(161,214,255,.2)] border border-cyan-400 overflow-hidden shadow-[0px_0px_20px_#40acff] rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <h3 className="text-xl leading-6 font-medium text-cyan-500">
                                    Mohammad Shariq
                                </h3>
                                <p className="mt-2 text-sm leading-5 text-gray-300">
                                    Co-founder & CEO
                                </p>
                                <div className="mt-3">
                                    <Link href={'/shariqmohd737'} className="underline text-cyan-400 hover:text-cyan-600 transition ease-in-out duration-150">
                                        View profile
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Repeat for each team member */}
                    </div>
                </div>

                <div className="mt-10">
                    <div className="text-xl md:text-2xl leading-9 font-bold text-cyan-500">
                        Contact Us
                    </div>
                    <p className="mt-2 text-sm md:text-lg leading-8 text-gray-300">
                        Have questions or want to collaborate? Reach out to us at <a href="mailto:info@buymeachai.com" className="text-cyan-400 hover:text-cyan-600 transition ease-in-out duration-150">info@buymeachai.com</a>.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About

export const metadata = {
    title: "About - BuyMeAChai"
}