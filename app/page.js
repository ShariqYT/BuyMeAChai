"use client"
import Changelogs from '@/components/ChangeLogs';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'


export default function Home() {
  const [modal, setModal] = useState(false)
  return (
    <>
      {
        modal && (
          <Changelogs setModal={setModal} />
        )}
      <div className="flex justify-center gap-4 items-center text-white h-[52vh] flex-col px-5 md:px-0">

        <div className="flex justify-end gap-4 mt-72">
          <motion.div viewport={{once: true}} initial={{x: -100, opacity: 0}}
      animate={{ x: 0, opacity: 1}} transition={{ duration: 1 }}  className="flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-yellow-500 w-4 md:w-5 h-auto fill-current"
              viewBox="0 0 16 16">
              <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="text-yellow-500 w-4 md:w-5 h-auto fill-current "
              viewBox="0 0 16 16">
              <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="text-yellow-500 w-4 md:w-5 h-auto fill-current "
              viewBox="0 0 16 16">
              <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" className="text-yellow-500 w-4 md:w-5 h-auto fill-current "
              viewBox="0 0 16 16">
              <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" className="text-yellow-500 w-4 md:w-5 h-auto fill-current "
              viewBox="0 0 16 16">
              <path
                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
            </svg>
          </motion.div>
          <motion.p viewport={{once: true}} initial={{ x: 100, opacity: 0}}
      animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}  className='md:text-xl text-sm'>Loved by 1,000,000+ creators</motion.p>
        </div>

        <div className='flex flex-col justify-center mt-10 items-center gap-4'>
          <motion.p viewport={{once: true}} initial={ { z: 100, y: 50, opacity: 0} } animate={{ z: 0, y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className='font-extrabold text-center text-6xl md:text-8xl'>Fund your creators</motion.p>
          <div>
            <motion.p viewport={{once: true}} initial={{ y: -50, opacity: 0}} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1  }} className='text-center text-md mt-6 md:text-xl md:text-left'>Accept support. Start a membership. Setup a shop.</motion.p>
            <motion.p viewport={{once: true}} initial={{ y: -50, opacity: 0}} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1  }} className='md:text-xl text-md text-center '> It’s easier than you think.</motion.p>
          </div>
        </div>
        <Link href={'/login'} className='md:mt-10 mt-10'>
          <motion.button viewport={{once: true}} initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 , duration: 1}} type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-full p-4 md:px-6 md:py-6 text-center me-2 mb-2"><span className="drop-shadow-[0px_0px_4px_#696969] md:text-xl">Start your page</span></motion.button>
        </Link>
        <motion.p viewport={{once: true}} initial={{ y: 100, opacity: 0}} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 2 }} className='md:text-base text-sm'>It’s free and takes less than a minute!</motion.p>
      </div>

      <div className="text-white text-center container px-3 mx-auto pb-32 mt-96">
        <motion.h2 viewport={{once: true}} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="text-md md:text-xl text-center text-gray-400 tracking-widest">SUPPORT</motion.h2>
        <motion.h1 viewport={{once: true}} initial={{x: 100, opacity: 0}} whileInView={{ x:0, opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} className='text-4xl md:text-6xl font-extrabold'>Give your audience </motion.h1><motion.h1 viewport={{once: true}} initial={{x: -100, opacity: 0}} whileInView={{ x:0, opacity: 1 }} transition={{ duration: 1, delay: 1.4 }} className='mb-14 text-4xl md:text-6xl font-extrabold'> an easy way to say thanks.</motion.h1>
        <motion.p viewport={{once: true}} initial={{opacity: 0}} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 1.6 }} className='text-md md:text-2xl'>Buy Me a Chai makes supporting fun and easy. In just a couple of taps, your fans </motion.p><motion.p viewport={{once: true}} initial={{opacity: 0}} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 1.8 }} className='text-md md:text-2xl mb-16'> can make the payment (buy you a chai) and leave a message.</motion.p>
        <div className="flex flex-col md:flex-row gap-5 mt-28 justify-around">
          <motion.div viewport={{once: true}} initial={{scale: 0.5, opacity: 0}} whileInView={{scale: 1, opacity: 1}} transition={{duration: 1, delay: 2}} className="item flex flex-col justify-between items-center space-y-3 text-center">
            <Image priority={true} width={2} height={2} unoptimized className="rounded-[100%] w-[50vw] md:w-full drop-shadow-[0px_0px_10px_#696969]" src="/fund.gif" alt="" />
            <p className="font-bold md:text-xl">Fans want to help</p>
          </motion.div>
          <motion.div viewport={{once: true}} initial={{scale: 0.5, opacity: 0}} whileInView={{scale: 1, opacity: 1}} transition={{duration: 1, delay: 2}} className="item flex flex-col justify-between items-center space-y-3 text-center">
            <Image priority={true} width={2} height={2} unoptimized className="rounded-[100%] w-[50vw] md:w-full drop-shadow-[0px_0px_10px_#696969]" src="/coins.gif" alt="" />
            <p className="font-bold md:text-xl">Fans want to contribute</p>
          </motion.div>
          <motion.div viewport={{once: true}} initial={{scale: 0.5, opacity: 0}} whileInView={{scale: 1, opacity: 1}} transition={{duration: 1, delay: 2}} className="item flex flex-col justify-between items-center space-y-3 text-center">
            <Image priority={true} width={2} height={2} unoptimized className="rounded-[100%] w-[50vw] md:w-full drop-shadow-[0px_0px_10px_#696969]" src="/group.gif" alt="" />
            <p className="font-bold md:text-xl">Fans want to collaborate</p>
          </motion.div>
        </div>
      </div>


      <div className="flex flex-col justify-center items-center text-white container mx-auto mb-16 mt-16 md:p-32 px-4">
        <div className='mb-8'>
          <motion.h2 viewport={{once: true}} initial={{ x: -100, opacity: 0 }} whileInView={{ x:0, opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="md:text-6xl text-4xl text-center font-extrabold">Designed for creators,</motion.h2>
          <motion.h2 viewport={{once: true}} initial={{ x: 100, opacity: 0 }} whileInView={{ x:0, opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} className="md:text-6xl text-4xl text-center mb-14 font-extrabold">not for businesses.</motion.h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div viewport={{once: true}} initial={{ y: -100, opacity: 0 }} whileInView={{ y:0, opacity: 1 }} transition={{ duration: 1, delay: 1.4 }} className='flex items-center gap-2 md:gap-6 md:text-2xl'>
            <Image className='w-16' unoptimized priority={true} width={1} height={1} src={'/tick.gif'} alt='tick'/><p>We don't call them "customers" or transactions. They are your <span className='font-extrabold'>supporters.</span></p>
          </motion.div>
          <motion.div viewport={{once: true}} initial={{ y: -100, opacity: 0 }} whileInView={{ y:0, opacity: 1 }} transition={{ duration: 1, delay: 1.4 }} className='flex items-center gap-2 md:gap-6 md:text-2xl'>
            <Image className='w-16' unoptimized priority={true} width={1} height={1} src={'/tick.gif'} alt='tick'/><p>You have 100% ownership of your supporters. We never email them, and you can export the list any time you like.</p>
          </motion.div>
          <motion.div viewport={{once: true}} initial={{ y: 100, opacity: 0 }} whileInView={{ y:0, opacity: 1 }} transition={{ duration: 1, delay: 1.6 }} className='flex items-center gap-2 md:gap-6 md:text-2xl'>
            <Image className='w-16' unoptimized priority={true} width={1} height={1} src={'/tick.gif'} alt='tick'/><p>You get to talk to a human for help, or if you just like some advice to hit the ground running.</p>
          </motion.div>
          <motion.div viewport={{once: true}} initial={{ y: 100, opacity: 0 }} whileInView={{ y:0, opacity: 1 }} transition={{ duration: 1, delay: 1.6 }} className='flex items-center gap-2 md:gap-6 md:text-2xl'>
            <Image className='w-16' unoptimized priority={true} width={1} height={1} src={'/tick.gif'} alt='tick'/><p>You get paid instantly to your bank account. No more 30-day delays.</p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
