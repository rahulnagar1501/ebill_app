import React from 'react'

const Navbar = () => {
    return (
        <div className='flex px-10 py-2 md:px-[8%] justify-between'>
            <div className='flex items-center'>
                <p className='font-bold text-2xl '>Block</p>
            </div>
            <div className='flex text-lg gap-8 text-gray-500 items-center'>
                <p>Landings</p>
                <p>Pages</p>
                <p>Blocks</p>
                <p>Accounts</p>
                <p>Docs</p>
            </div>
            <div className='flex gap-2 items-center'>
                <button className='bg-gray-200 px-4 py-2 rounded-lg text-gray-500 font-semibold'>Login</button>
                <button className='bg-[#8B3DFF] px-4 py-2 rounded-lg text-white font-semibold'>Create Account</button>
            </div>
        </div>
    )
}

export default Navbar
