import React, { useRef, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { RiMenuFold2Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';



function Header() {
  const navItems = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'About',
      path: '/about'
    },
    {
      name: 'Country',
      path: '/country'
    },
    {
      name: 'Contact',
      path: '/contact'
    },
  ]

  const [show, setShow] = useState(false)
  const menuRef = useRef()
  const brandingRef = useRef()
  let tl = useRef(
    gsap.timeline({
      paused: true,
      reversed: true
    })
  ).current


  useGSAP(() => {
    tl.to(menuRef.current, { duration: 0.5, left: '0px' })
    tl.from(brandingRef.current, { duration: 1, opacity: 0, x: -1000 })
    tl.from(".menu-list li", { duration: 0.5, opacity: 0, x: -100, stagger: 0.3 });
  })
  const handleMenuOpen = () => {
    setShow(true)
    tl.play()
  }

  const handleMenuClose = () => {
    setShow(false)
    tl.eventCallback('onReverseComplete', () => {
      menuRef.current.style.left = '120%'
    })
    tl.reverse()
  }
  const handlePageChange = () => {
    tl.eventCallback('onReverseComplete', () => {
      menuRef.current.style.left = '120%'
    })
    tl.reverse()
  }
  return (
    <>
      <header className='w-full relative h-20 bg-[#1f1f1f] shadow-sm shadow-white/5 px-8 lg:px-0'>

        {/* Desktop Navbar */}
        <section className='w-full max-w-screen-2md mx-auto h-full flex justify-between items-center'>
          <div className='text-2xl font-[600] tracking-widest'>
            <Link to='/'>
              <img src="/imgs/earthstats-logo.webp" alt="logo" className='w-44 xsm:w-52 drop-shadow-custom' />
            </Link>
          </div>
          <ul className='flex gap-x-6 text-sm'>
            {
              navItems.map(item => (
                <>
                  <li key={item.name} className=" hidden lg:block tracking-wider font-medium">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? 'text-[#6365e4] drop-shadow-custom ' : 'drop-shadow-normal'
                      }
                      to={item.path}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                </>

              ))
            }
            <li onClick={handleMenuOpen} className='text-3xl xsm:text-4xl block lg:hidden cursor-pointer'>
              <RiMenuFold2Fill className='text-[#6365e4] drop-shadow-custom' />
            </li>
          </ul>
        </section>

        {/* Mobile Navbar */}
        <div ref={menuRef} className={`fixed inset-0 z-50 overflow-hidden left-[120%]  bg-gradient-to-br from-black/40 to-[#6365e4]/10 backdrop-blur-xl shadow-sm shadow-white/5`}>

          <div ref={brandingRef} className='mt-8 rounded-2xl font-[600] bg-black/10 shadow-2xl shadow-black backdrop-blur-md w-[90%] mx-auto flex justify-between items-center tracking-widest p-8'>
            <Link to='/'>
              <img src="/imgs/earthstats-logo.webp" alt="logo" className='w-44 xsm:w-52 drop-shadow-custom' />
            </Link>
            <IoClose className='text-[#6365e4] drop-shadow-custom text-4xl xsm:text-5xl cursor-pointer' onClick={handleMenuClose} />
          </div>

          <ul className='flex menu-list flex-col w-[90%]  mx-auto py-20   h-full  gap-y-10 text-sm'>
            {
              navItems.map(item => (
                <li key={item.name} className="block text-lg tracking-widest font-semibold transition-colors duration-300 hover:text-[#6365e4]">
                  <NavLink
                    onClick={handlePageChange}
                    className={({ isActive }) =>
                      isActive ? 'text-[#6365e4] drop-shadow-custom' : 'drop-shadow-normal'
                    }
                    to={item.path}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </div>



      </header>



    </>


  )
}

export default Header