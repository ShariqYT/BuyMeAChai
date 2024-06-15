import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function Home() {
  return (
    <>
      <div className="flex justify-center gap-4 items-center text-white h-[44vh] flex-col px-5 md:px-0">
        <div className="text-2xl md:text-5xl flex items-center justify-center font-bold">Buy Me a Chai <span><Image priority={true}  className="drop-shadow-[0px_0px_5px_#a1a1a1] w-20 md:w-28" width={2} height={2} src="/coffee.gif" alt="" /></span></div>
        <p className='text-center text-sm md:text-base md:text-left'>A crowd funding platform for creators. Get funded by your fans and followers. Start Now!</p>
        <div className="flex gap-4">
          <Link href={'/login'}>
            <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><span className="drop-shadow-[0px_0px_4px_#696969]">Start Here</span></button>
          </Link>
          <Link href={'/about'}>
            <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><span className="drop-shadow-[0px_0px_4px_#696969]">Read More</span></button>
          </Link>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-32 pt-14">
        <h2 className="text-2xl md:text-3xl text-center my-14 font-bold">Your Fans can buy you a Chai</h2>
        <div className="flex flex-col md:flex-row gap-5 justify-around">
          <div className="item flex flex-col justify-between items-center space-y-3 text-center">
            <Image priority={true}  width={2} height={2} unoptimized className="rounded-[100%] w-[60vw] md:w-full drop-shadow-[0px_0px_10px_#696969]" src="/fund.gif" alt="" />
            <p className="font-bold text-xl">Fans want to help</p>
          </div>
          <div className="item flex flex-col justify-between items-center space-y-3 text-center">
            <Image priority={true}  width={2} height={2} unoptimized className="rounded-[100%] w-[60vw] md:w-full drop-shadow-[0px_0px_10px_#696969]" src="/coins.gif" alt="" />
            <p className="font-bold text-xl">Fans want to contribute</p>
          </div>
          <div className="item flex flex-col justify-between items-center space-y-3 text-center">
            <Image priority={true}  width={2} height={2} unoptimized className="rounded-[100%] w-[60vw] md:w-full drop-shadow-[0px_0px_10px_#696969]" src="/group.gif" alt="" />
            <p className="font-bold text-xl">Fans want to collaborate</p>
          </div>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>

      <div className="flex flex-col justify-center items-center text-white container mx-auto pb-32 pt-14">
        <h2 className="text-3xl text-center my-14 font-bold">Learn more about us</h2>
        <div className="rounded-[2rem] overflow-hidden">
          <iframe className='w-[300px] h-[190px] md:w-[560px] md:h-[315px]' width="560" height="315" src="https://www.youtube-nocookie.com/embed/VFkUSnjHAIE?si=hRaYq6-mkqNqI8F8&amp;controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </>
  );
}
