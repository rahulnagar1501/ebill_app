import React from 'react';
import image from './Assets/image.png'

const Hero = () => {
    return (

        <div className='md:py-16' style={{ backgroundImage: `url(${image})`, boxShadow: 'inset 0px 1px 4px rgba(0, 0, 0, 0.3)', }}>
            <div className='px-10 py-4 md:px-[8%] flex flex-col items-center gap-10 max-w-[840px] mx-auto'>
                <p className='border table py-1 px-2 rounded-full text-purple-600 border-purple-600 bg-purple-100 '>Modern design</p>
                <h3 className='text-5xl font-bold text-center'>Kickstart your project with Block</h3>
                <h4 className='text-gray-500 font-semibold text-xl text-center'>
                    Block built with a modular web design concept will easily kickstart your project, and build website & marketing sites faster.
                </h4>
                <div className='flex gap-2 items-center'>
                    <button className='bg-[#8B3DFF] px-4 py-2 rounded-lg text-white font-semibold'>Purchase Template</button>
                    <button className='bg-gray-200 px-4 py-2 rounded-lg text-gray-500 font-semibold'>Demos</button>
                </div>
            </div>
        </div>

    );
};

export default Hero;
