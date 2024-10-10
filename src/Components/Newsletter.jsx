import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
    return (
        <div className='bg-gray-200 md:py-16'>
            <div className='px-10 py-4 md:px-[8%] 2xl:px-0 flex flex-col items-center gap-10 max-w-[840px] mx-auto'>
                <svg className='envelope' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                </svg>
                <h3 className='text-5xl font-bold text-center'>Subscribe to our newsletter</h3>
                <h4 className='text-gray-500 font-semibold text-xl text-center'>
                    Enjoy using Block Template and stay tuned for the latest updates and news.
                </h4>
                <div className='flex flex-col lg:flex-row gap-2 items-center w-[70%]'>
                    <input type="text" placeholder='Email' className='border border-gray-300 w-full lg:flex-1 px-4 py-2 rounded-lg ' />
                    <button className='bg-black px-4 py-2 rounded-lg text-white w-full lg:w-fit  font-semibold'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
