"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useSession, signOut } from "next-auth/react";
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import Search from './Search';

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Navbar = () => {
  const { data: session } = useSession();
  const [showDropDown, setShowDropDown] = useState(false);
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    fetch('/api/creators')
      .then((res) => res.json())
      .then((data) => setCreators(data));
  }, []);

  return (
    <nav className='flex sticky py-2 lg:py-0 top-0 z-50 bg-[rgba(0,0,0,0.5)] backdrop-filter  backdrop-blur-lg justify-between items-center text-white px-4 lg:h-16'>
      <Link href={'/'} className='flex justify-center items-center'>
        <span className='font-bold text-3xl hover:text-cyan-400 font-Fasthand lg:block hidden'>
          Buy me a chai
        </span>
        <Image
          priority={true}
          width={50}
          height={50}
          unoptimized
          className="drop-shadow-[0px_0px_5px_#a1a1a1]"
          src="/coffee.gif"
          alt="Coffee Gif"
        />
      </Link>

      <div className='flex items-center lg:gap-8 justify-center'>
        <Search />
        <div>
          {session ? (
            <div className="relative" onBlur={() => setTimeout(() => setShowDropDown(false), 200)}>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => setShowDropDown(!showDropDown)}
                className="flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden font-medium text-gray-900 rounded-full group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
              >
                <span className='relative text-[12px] truncate w-[16vh] lg:w-fit lg:text-[14px] px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0'>
                  {session.user.name}
                </span>
                <motion.div
                  variants={{
                    open: { rotate: 180 },
                    closed: { rotate: 0 },
                  }}
                  transition={{ duration: 0.2 }}
                  style={{ originY: 0.55 }}
                >
                  <svg className='fill-white m-1' width="10" height="10" viewBox="0 0 20 20">
                    <path d="M0 7 L 20 7 L 10 16" />
                  </svg>
                </motion.div>
              </motion.button>
              <motion.div
                initial={false}
                animate={showDropDown ? 'open' : 'closed'}
                variants={{
                  open: {
                    clipPath: 'inset(0% 0% 0% 0% round 10px)',
                    transition: {
                      type: 'spring',
                      bounce: 0,
                      duration: 0.7,
                      delayChildren: 0.3,
                      staggerChildren: 0.05,
                    },
                  },
                  closed: {
                    clipPath: 'inset(10% 50% 90% 50% round 10px)',
                    transition: {
                      type: 'spring',
                      bounce: 0,
                      duration: 0.3,
                    },
                  },
                }}
                style={{ pointerEvents: showDropDown ? 'auto' : 'none' }}
                className="border-2 overflow-y-scroll text-white border-sky-600 bg-[rgba(0,0,0,1)] absolute right-4 lg:right-0 z-10 mt-2 w-80 rounded-xl shadow-lg"
              >
                <div className="rounded-lg bg-base-300 p-3 drop-shadow-xl divide-y divide-neutral">
                  <motion.div className="flex space-x-4 items-center truncate p-4" variants={itemVariants}>
                    <div className="flex mr-auto items-center space-x-4">
                      <Image
                        priority={true}
                        width={64}
                        height={64}
                        unoptimized
                        src={creators.filter((creator) => creator.username === session.user.name)[0]?.profilePic || '/user.png'}
                        alt={session.user.name}
                        className="w-16 h-16 shrink-0 rounded-full"
                      />
                      <div className="space-y-2 flex overflow-hidden flex-col flex-1 truncate">
                        <div className="relative leading-tight text-gray-900">
                          <span className="flex">
                            <span className="truncate relative pr-8 text-white">
                              @{session.user.name}
                            </span>
                          </span>
                        </div>
                        <p className="font-normal text-base leading-tight truncate">
                          {session.user.email}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  <div aria-label="navigation" className="py-2">
                    <nav className="grid gap-1">
                      <Link className='flex items-center gap-2' href={'/dashboard'}>
                        <motion.button
                          className="w-full flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                          variants={itemVariants}
                        >
                          <svg className="w-7 mx-2 h-7" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3 5C3 3.89543 3.89543 3 5 3H9C10.1046 3 11 3.89543 11 5V9C11 10.1046 10.1046 11 9 11H5C3.89543 11 3 10.1046 3 9V5ZM9 5H5V9H9V5Z" />
                            <path d="M3 15C3 13.8954 3.89543 13 5 13H9C10.1046 13 11 13.8954 11 15V19C11 20.1046 10.1046 21 9 21H5C3.89543 21 3 20.1046 3 19V15ZM9 15H5V19H9V15Z" />
                            <path d="M13 5C13 3.89543 13.8954 3 15 3H19C20.1046 3 21 3.89543 21 5V9C21 10.1046 20.1046 11 19 11H15C13.8954 11 13 10.1046 13 9V5ZM19 5H15V9H19V5Z" />
                            <path d="M13 15C13 13.8954 13.8954 13 15 13H19C20.1046 13 21 13.8954 21 15V19C21 20.1046 20.1046 21 19 21H15C13.8954 21 13 20.1046 13 19V15ZM19 15H15V19H19V15Z" />
                          </svg>
                          <span className="relative w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Dashboard
                          </span>
                        </motion.button>
                      </Link>
                      <Link className='flex items-center gap-2' href={`/${session.user.name}`}>
                        <motion.button
                          className="w-full flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                          variants={itemVariants}
                        >
                          <svg
                            className='w-7 mx-2'
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            color="#ffffff"
                            fill="none"
                          >
                            <path d="M18 15V9C18 6.17157 18 4.75736 17.1213 3.87868C16.2426 3 14.8284 3 12 3H8C5.17157 3 3.75736 3 2.87868 3.87868C2 4.75736 2 6.17157 2 9V15C2 17.8284 2 19.2426 2.87868 20.1213C3.75736 21 5.17157 21 8 21H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 8L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 12L14 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 16L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M18 8H19C20.4142 8 21.1213 8 21.5607 8.43934C22 8.87868 22 9.58579 22 11V19C22 20.1046 21.1046 21 20 21C18.8954 21 18 20.1046 18 19V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="relative w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Your Page
                          </span>
                        </motion.button>
                      </Link>
                    </nav>
                  </div>
                  <div className="pt-2">
                    <motion.div
                      onClick={() => signOut()}
                      className='flex items-center gap-2'
                      variants={itemVariants}
                    >
                      <button
                        type="button"
                        className="w-full flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-500 to-red-700 group-hover:from-red-500 group-hover:to-red-700 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800"
                      >
                        <svg
                          className="w-7 mx-2 h-7"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                          <path d="M9 12h12l-3 -3"></path>
                          <path d="M18 15l3 -3"></path>
                        </svg>
                        <span className='relative w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-red-900 rounded-md group-hover:bg-opacity-0'>
                          Log out
                        </span>
                      </button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : (
            <Link href={'/login'}>
              <motion.button
                whileTap={{ scale: 0.97 }}
                className=" flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-[12px] lg:text-[16px] font-medium text-gray-900 rounded-full group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
              >
                <span className="relative px-6 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                  Login
                </span>
              </motion.button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
