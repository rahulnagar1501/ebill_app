import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='flex px-10 py-2 md:px-[8%] justify-between'>
            <div className='flex items-center'>
                <p className='font-bold text-2xl '>Block</p>
            </div>
            <div className='flex text-md gap-8 text-gray-500 items-center font-semibold options'>
                {/* Landings Dropdown */}
                <div className='flex gap-2 items-center relative group '>
                    <p>Landings</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25L12 15.75 4.5 8.25" />
                    </svg>
                    <div className='absolute top-0 pt-12 group-hover:block z-10 hidden text-black translate-x-[-50%] left-[50%]'>
                        <div className='flex flex-col gap-3 bg-white p-4 rounded-lg whitespace-nowrap'>
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

                {/* Pages Dropdown */}
                <div className='flex gap-2 items-center relative group'>
                    <p>Pages</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25L12 15.75 4.5 8.25" />
                    </svg>
                    <div className='absolute top-0 pt-12 group-hover:block z-10 hidden text-black translate-x-[-50%] left-[50%]'>
                        <div className='gap-8 bg-white p-4 rounded-lg whitespace-nowrap grid grid-cols-4 w-max options-menu'>
                            <div>
                                <h2>BLOG</h2>
                                <p>List View</p>
                                <p>Grid View</p>
                                <p>Grid View v.2</p>
                                <p>Sidebar</p>
                                <p>Category</p>
                                <p>Single Post</p>
                            </div>
                            <div>
                                <h2>SERVICE</h2>
                                <p>Service v.1</p>
                                <p>Service v.2</p>
                                <p>Service v.3</p>
                            </div>
                            <div>
                                <h2>Portfolio</h2>
                                <p>Grid View</p>
                                <p>3 Columns</p>
                                <p>Single View</p>
                            </div>
                            <div>
                                <h2>Integration</h2>
                                <p>Grid View</p>
                                <p>Single</p>
                            </div>
                            <div>
                                <h2>ABOUT</h2>
                                <p>About v.1</p>
                                <p>About v.2</p>
                            </div>
                            <div>
                                <h2>EVENTS</h2>
                                <p>List</p>
                                <p>Single</p>
                            </div>
                            <div>
                                <h2>Contact</h2>
                                <p>Contact Us</p>
                                <p>Contact Sales</p>
                            </div>
                            <div>
                                <h2>Pricing</h2>
                                <p>Pricing v.1</p>
                                <p>Pricing v.2</p>
                            </div>
                            <div>
                                <h2>Career</h2>
                                <p>Career</p>
                            </div>
                            <div>
                                <h2>Case Study</h2>
                                <p>Grid View</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blocks */}
                <div className='flex gap-2 items-center'>
                    <p>Blocks</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25L12 15.75 4.5 8.25" />
                    </svg>
                </div>

                {/* Accounts Dropdown */}
                <div className='flex gap-2 items-center relative group'>
                    <p>Accounts</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25L12 15.75 4.5 8.25" />
                    </svg>
                    <div className='absolute top-0 pt-12 group-hover:block z-10 hidden text-black translate-x-[-50%] left-[50%]'>
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

                {/* Docs */}
                <div className='flex gap-2 items-center'>
                    <p>Docs</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25L12 15.75 4.5 8.25" />
                    </svg>
                </div>
            </div>

            {/* Login and Create Account Buttons */}
            <div className='flex gap-2 items-center'>
                <button className='bg-gray-200 px-4 py-2 rounded-lg text-gray-500 font-semibold'>Login</button>
                <button className='bg-[#8B3DFF] px-4 py-2 rounded-lg text-white font-semibold'>Create Account</button>
            </div>
        </div>
    )
}

export default Navbar;
