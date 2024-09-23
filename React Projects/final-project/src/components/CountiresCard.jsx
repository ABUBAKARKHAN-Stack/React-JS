import React, { useRef } from 'react'
import gsap from 'gsap'
import { IoIosPeople } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';



function CountiresCard({ country }) {
    const { name, flags, population, region, capital } = country
    const divRef = useRef()
    const cardList = useRef(null)

    useGSAP(() => {
        gsap.from(cardList.current, {
            x: 400,
            opacity: 0,
            duration: 0.5,
        })
    })

    const handleEnter = () => {
        gsap.to(divRef.current, { duration: 1, left: "0px" })
    }
    const handleLeave = () => {
        gsap.to(divRef.current, { duration: 1, left: '-120%' })
    }
    return (
        <>
            <li
                ref={cardList}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                className='gradient-cards relative w-full h-[220px] flex flex-col overflow-hidden p-6 rounded-3xl'
            >
                {/* Main content (Image and Name) */}
                <div className='w-full h-full flex flex-col items-center'>
                    <div className='w-44 h-44  flex justify-center items-center'>
                        <img loading='lazy' src={flags.svg} alt={name.common} className='object-cover aspect-[3/2] w-full max-w-full' />
                    </div>
                    {/* Country name */}
                    <h4 className='font-medium text-lg text-ellipsis text-nowrap mt-auto max-w-full overflow-hidden'>
                        {name.common}
                    </h4>
                </div>

                {/* Hover overlay with country info */}
                <div
                    ref={divRef}
                    className='bg-gradient-to-br from-black/40 to-lime-700/40 backdrop-blur-xl absolute top-0 -left-[120%] w-full h-[220px] flex justify-center items-center flex-col gap-y-2 rounded-3xl text-white '
                >
                    {/* Population */}
                    <div className='flex gap-x-2 items-center'>
                        <IoIosPeople className='text-3xl' />
                        <span className='font-semibold'>{population.toLocaleString()}</span>
                    </div>
                    {/* Region */}
                    <div className='flex gap-x-2 items-center'>
                        <span>Region:</span>
                        <span className='font-semibold'>{region}</span>
                    </div>
                    {/* Capital */}
                    <div className='flex gap-x-2 items-center'>
                        <span>Capital:</span>
                        <span className='font-semibold text-ellipsis text-nowrap mt-auto max-w-[100px] overflow-hidden'>
                            {capital[0]}
                        </span>
                    </div>
                    {/* Button */}
                    <Link to={`/country/${name.common}`} className='flex w-fit mt-3 bg-zinc-800/40 hover:bg-zinc-800/60 font-light items-center tracking-wider text-[11px] gap-x-1 px-2 py-1 border rounded-xl'>
                        More Details
                    </Link>
                </div>
            </li>




        </>

    )
}
export default CountiresCard