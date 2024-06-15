import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-black shadow-2xl shadow-cyan-300 text-white flex justify-center px-4 h-16 items-center'>
      <p>Copyright &copy; {currentYear} BuyMeAChai - All rights reserved!</p>
    </footer>
  )
}

export default Footer
