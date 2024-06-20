import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Search = () => {
    const [showCreators, setShowCreators] = useState(false)
    const [Creators, setCreators] = useState([])

    useEffect(() => {
        fetch('/api/creators')
            .then(res => res.json())
            .then(data => setCreators(data))
    }, [])
    return (
        <>
            <div className="flex items-center justify-center" onBlur={() => setTimeout(() => setShowCreators(false), 200)}>
                <button onClick={() => setShowCreators(!showCreators)} className="flex items-center justify-center p-0.5 text-[12px] md:text-[16px] mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                    <span className='px-6 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0'>Creators</span>
                </button>
                
                {showCreators && (
                    <div className="border-2 overflow-y-scroll text-white border-sky-600  bg-[rgba(0,0,0,1)] absolute right-7 top-16 md:right-48 md:top-14 h-80 z-10 mt-2 w-80 rounded-xl shadow-lg">
                        {Creators.map((creator) => (
                            <Link href={`/${creator.username}`} key={creator.username} className="flex gap-4 items-center px-6 py-3 text-sm hover:bg-sky-600">
                                <Image alt='profile pic' className='rounded-full' width={40} height={40} unoptimized priority={true} src={creator.profilePic || '/user.png'} />
                                <p className='text-white'>{creator.username}</p>
                            </Link>
                        ))}
                    </div>

                )}
            </div>
        </>
    )
}

export default Search
