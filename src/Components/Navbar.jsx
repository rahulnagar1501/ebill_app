import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='flex px-10 py-2 md:px-[8%] justify-between'>
            <div className='flex items-center'>
                <p className='font-bold text-2xl '>Block</p>
            </div>
            <div className='flex text-md gap-8 text-gray-500 items-center font-semibold'>
                <div className='flex gap-2 items-center relative group'>
                    <p>Landings</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                    <div className='absolute top-0 pt-12 group-hover:block z-10 hidden text-nowrap text-black ml-[-35px]'>
                        <div className='flex flex-col gap-3 bg-white p-4 rounded-lg'>
                            <p>Landing Overview</p>
                            <p>Saas v.1</p>
                            <p>Sass v.2</p>
                            <p>IT Company</p>
                            <p>Seo Agency</p>
                            <p>Accounting</p>
                            <p>Finance</p>
                            <p>Jamstack Agency</p>
                            <p>Conference</p>
                            <p>Personal </p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-2 items-center relative group'>
                    <p>Pages</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                    <div className='absolute top-12 group-hover:flex p-4 z-10 flex-col gap-3 bg-white text-nowrap rounded-lg hidden text-black'>
                        <p>Landing Overview</p>
                        <p>Saas v.1</p>
                        <p>Sass v.2</p>
                        <p>IT Company</p>
                        <p>Seo Agency</p>
                        <p>Accounting</p>
                        <p>Finance</p>
                        <p>Jamstack Agency</p>
                        <p>Conference</p>
                        <p>Personal </p>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <p>Blocks</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <div className='flex gap-2 items-center relative group'>
                    <p>Accounts</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                    <div className='absolute top-0 pt-12 group-hover:block z-10 hidden text-nowrap text-black ml-[-35px]'>
                        <div className='flex flex-col gap-3 bg-white p-4 rounded-lg'>
                            <p>Profile</p>
                            <p>Security</p>
                            <p>Billing</p>
                            <p>Team</p>
                            <p>Notifications</p>
                            <p>Integration</p>
                            <p>Session</p>
                            <p>Social</p>
                            <p>Appearance</p>
                            <p>Authentication</p>
                            <p>Utility</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <p>Docs</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <button className='bg-gray-200 px-4 py-2 rounded-lg text-gray-500 font-semibold'>Login</button>
                <button className='bg-[#8B3DFF] px-4 py-2 rounded-lg text-white font-semibold'>Create Account</button>
            </div>
        </div>
    )
}

export default Navbar
