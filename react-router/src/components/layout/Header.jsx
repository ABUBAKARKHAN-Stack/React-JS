import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <nav className='max-h-72 flex justify-between items-center py-8 px-48 border-b bg-slate-50'>
            <div>
                <h1 className='font-light text-2xl text-blue-600'>MovieFlix</h1>
            </div>
            <ul className='flex gap-x-10 font-normal text-sm'>
                <li className='group relative'>
                    <NavLink
                        to='/'
                        className={({ isActive }) => isActive ? "text-yellow-700" : 'text-black' }>
                        Home
                    </NavLink>
                    <span className='absolute left-0 top-5 w-0 transition-all duration-300 ease-linear group-hover:w-[75%] h-[0.5px] bg-blue-600'></span>
                </li>
                <li className='group relative'>
                    <NavLink
                        to='/about'
                        className={({ isActive }) => isActive ? "text-yellow-700 font-bold transition-all" : 'text-black' }>
                        About
                    </NavLink>
                    <div className='absolute left-0 top-5 w-0 transition-all duration-300 ease-linear group-hover:w-[75%] h-[0.5px] bg-blue-600'></div>
                </li>
                <li className='group relative'>
                    <NavLink
                        to='/contact'
                        className={({ isActive }) => isActive ? "text-yellow-700" : 'text-black' }>
                        Contact
                    </NavLink>
                    <div className='absolute left-0 top-5 w-0 transition-all duration-300 ease-linear group-hover:w-[75%] h-[0.5px] bg-blue-600'></div>
                </li>
            </ul>
        </nav>
    )
}

export default Header
