import React from 'react'

const BuyBlock = () => {
    return (
        <div className='bg-[#0F172A]'>
            <div className='px-4 md:px-16 py-8 grid md:grid-cols-4 grid-cols-2  max-w-[1320px] mx-auto gap-4'>
                <div className='col-span-2 p-2 flex flex-col gap-6'>
                    <p className='text-3xl font-bold text-white'>Consists of 80+ blocks from 15 categories to cover the most frequent use cases.</p>
                    <div className='flex gap-2 items-center'>
                        <button className='bg-[#8B3DFF] px-4 py-2 rounded-lg text-white font-semibold'>Buy Block Now</button>
                        <div className=' px-4 py-2 rounded-lg text-gray-400 font-semibold'> Initial Release - More coming soon</div>
                    </div>
                </div>
                <div className='text-gray-400 flex flex-col gap-4 p-2'>
                    <div className='flex justify-between'>
                        <p>Navbar</p>
                        <p>4</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Hero</p>
                        <p>6</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Features</p>
                        <p>5</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Pricing</p>
                        <p>3</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Contact</p>
                        <p>2</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Footer</p>
                        <p>3</p>
                    </div>



                </div>
                <div className='text-gray-400 flex flex-col gap-4 p-2'>
                    <div className='flex justify-between'>
                        <p>Testimonials</p>
                        <p>4</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Team</p>
                        <p>6</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>FAQ</p>
                        <p>5</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>CTA</p>
                        <p>3</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyBlock
