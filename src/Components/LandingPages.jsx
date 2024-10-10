import React from 'react'
import './LandingPages.css';
import image1 from './Assets/image1.jpg'
import image3 from './Assets/image3.jpg'
import image4 from './Assets/image4.jpg'
import image5 from './Assets/image5.jpg'
import image6 from './Assets/image6.jpg'
import image7 from './Assets/image7.jpg'
import image8 from './Assets/image8.png'
import image9 from './Assets/image9.jpg'

const LandingPages = () => {
    return (
        <div className='bg-gray-100'>
            <div className='md:py-16 md:px-[8%] xl:px-0 px-10 max-w-[1200px] m-auto'>
                <div className='py-4  flex flex-col items-center gap-8 max-w-[730px] mx-auto mb-6'>
                    <h3 className='text-4xl font-bold text-center'>Stunning Landing Pages</h3>
                    <h4 className='text-gray-500 font-semibold text-xl text-center'>
                        Blocks bootstrap 5 template comes with everything you need to get your website off the ground.
                    </h4>
                </div>
                <div className='grid grid-cols-auto gap-8 lg:px-8'>
                    <div className='flex flex-col gap-2'><img src={image1} alt="" className='rounded-lg border border-gray-300' /><p className='font-semibold text-lg text-gray-600'>Sass v1</p></div>
                    <div className='flex flex-col gap-2'><img src={image9} alt="" className='rounded-lg border border-gray-300' /><p className='font-semibold text-lg text-gray-600'>Sass v2</p></div>
                    <div className='flex flex-col gap-2'><img src={image3} alt="" className='rounded-lg border border-gray-300' /><p className='font-semibold text-lg text-gray-600'>Accounting</p></div>
                    <div className='flex flex-col gap-2'><img src={image4} alt="" className='rounded-lg border border-gray-300' /><p className='font-semibold text-lg text-gray-600'>Finance</p></div>
                    <div className='flex flex-col gap-2'><img src={image5} alt="" className='rounded-lg border border-gray-300' /><p className='font-semibold text-lg text-gray-600'>Conference</p></div>
                    <div className='flex flex-col gap-2'><img src={image6} alt="" className='rounded-lg border border-gray-300' /><p className='font-semibold text-lg text-gray-600'>Agency</p></div>
                    <div className='flex flex-col gap-2'><img src={image7} alt="" className='rounded-lg border border-gray-300' /><p className='font-semibold text-lg text-gray-600'>Personal</p></div>
                    <div className='flex flex-col gap-2'><img src={image8} alt="" className='rounded-lg border border-gray-300' /><p className='font-semibold text-lg text-gray-600'>IT Company</p></div>
                </div>
            </div>
        </div>
    )
}

export default LandingPages
