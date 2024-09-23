import React from 'react'
import { MdArrowRightAlt } from "react-icons/md";


function HeroSection() {
    return (

        <div className='flex gap-y-10 sm:gap-y-0 flex-col-reverse sm:flex-row justify-between items-center w-full my-20'>
            <div className='sm:w-1/2 w-full flex flex-col gap-y-4'>
                <h1 className='text-3xl font-[600]'>Explore the World, One Country at a Time.</h1>
                <p className='text-[10px] w-[90%] text-gray-300  leading-4 tracking-wide font-light'>Discover the history, culture, and beauty of every nation. Sort, search, and filter through countires to fine the details you need.</p>
                <button className='flex w-fit bg-zinc-800 font-[200] items-center tracking-wider text-[11px] gap-x-1 px-3 py-1.5 border-[1.5px] rounded-xl'>Start Exploring <MdArrowRightAlt className='text-base' /></button>
            </div>
            <div className='sm:w-1/2 w-full '>
                <img src="/imgs/world.webp" alt="earthstats" className='w-full' />
            </div>
        </div>


    )
}

export default HeroSection