import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-black shadow-[5px_0px_200px_cyan] flex-col-reverse lg:flex-row text-white flex justify-between lg:gap-0 gap-4 pt-6 pb-6 lg:px-4 h-fit lg:h-16 items-center'>
      <p className='flex items-center justify-center text-sm lg:text-base gap-4'>Copyright &copy; {currentYear} <span className='font-Fasthand text-xl lg:text-2xl flex items-center justify-center'> Buy me a chai<Image priority={true} width={50} height={50} unoptimized className="drop-shadow-[0px_0px_5px_#a1a1a1] w-[40px] lg:w-[50px]" src="/coffee.gif" alt="Coffee Gif" /></span></p>
      <div className='flex gap-8'>
        <Link className='hover:text-cyan-400' href={'/about'}>About</Link>
        <Link className='hover:text-cyan-400' href={'/privacy-policy'}>Privacy Policy</Link>
      </div>
    </footer>
  )
}

export default Footer
