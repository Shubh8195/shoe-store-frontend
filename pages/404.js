import Wrapper from '@/components/layout/Wrapper'
import Link from 'next/link'
import React from 'react'

const error = () => {
    return (
        <div className="min-h-[650px] flex items-center">
            <Wrapper>
                <div className="max-w-[600px] rounded-lg p-5 mx-auto flex flex-col items-center">
                    <div className="relative flex items-center justify-center">
                        <div className=' rotate-45 p-[80px] border-dashed border-black bg-[#ffa200] border-[6px] mx-auto rounded-md'>
                        </div>
                        <div className='absolute text-6xl font-extrabold'>404</div>
                    </div>
                    <div className="text-2xl md:text-4xl font-bold mt-16 ">
                        PAGE NOT FOUND
                    </div>
                    <div className="text-base mt-8 text-center">
                        The page you are looking for might have been removed had its name changed or is temporarily unavailable.
                    </div>

                    <Link className='py-4 px-6 md:py-4 md:px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8' href="/" >Home Page</Link>
                </div>
            </Wrapper>
        </div>
    )
}

export default error