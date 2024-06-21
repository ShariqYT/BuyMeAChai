import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Search = () => {
  const [showCreators, setShowCreators] = useState(false);
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    fetch('/api/creators')
      .then((res) => res.json())
      .then((data) => setCreators(data));
  }, []);

  return (
    <div
      className="flex items-center justify-center"
      onBlur={() => setTimeout(() => setShowCreators(false), 200)}
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setShowCreators(!showCreators)}
        className="flex items-center justify-center p-0.5 text-[10px] md:text-[14px] mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
      >
        <span className="px-6 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
          Creators
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
        animate={showCreators ? 'open' : 'closed'}
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
        style={{ pointerEvents: showCreators ? 'auto' : 'none' }}
        className="border-2 overflow-y-scroll text-white border-sky-600 bg-[rgba(0,0,0,1)] absolute right-7 top-16 md:right-48 md:top-14 h-80 z-10 mt-2 w-80 rounded-xl shadow-lg"
      >
        {creators.map((creator) => (
          <motion.div key={creator.username} variants={itemVariants}>
            <Link href={`/${creator.username}`} className="flex gap-4 items-center px-6 py-3 text-sm hover:bg-sky-600">
              <Image
                alt="profile pic"
                className="rounded-full"
                width={40}
                height={40}
                unoptimized
                priority={true}
                src={creator.profilePic || '/user.png'}
              />
              <p className="text-white">{creator.username}</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Search;
