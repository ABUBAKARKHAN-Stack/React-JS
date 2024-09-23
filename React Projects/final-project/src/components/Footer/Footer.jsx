import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-white py-8 mt-10 px-8 lg:px-0">
      <div className="max-w-screen-2md  w-full tracking-wider mx-auto px-4 md:px-0 gap-10 md:gap-0 grid grid-cols-2 md:grid-cols-3 place-items-center place-content-between">
        {/* About Section */}
        <div className='col-span-2 md:col-span-1'>
          <h3 className="text-lg font-semibold mb-4 ">About EarthStats</h3>
          <p className="text-xs text-white/50  leading-6">
            EarthStats provides insights and statistics about countries, their flags, populations, and other essential information.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="text-xs space-y-2 text-white/50">
            <li>
              <NavLink to="/" className="hover:text-gray-300">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-gray-300">About</NavLink>
            </li>
            <li>
              <NavLink to="/country" className="hover:text-gray-300">Countries</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-gray-300">Contact</NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className='w-full grid md:justify-end'>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="text-xs space-y-2 text-white/50">
            <li>Email: info@earthstats.com</li>
            <li>Phone: +123 456 7890</li>
            <li>Location: Karachi, Pakistan</li>
          </ul>
        </div>
      </div>

      <div className="border-t space-y-2 pt-5 border-gray-800/50 text-center text-sm text-white/50">
        <p>&copy; {new Date().getFullYear()} EarthStats. All Rights Reserved.</p>
        <p>Created By <Link to="https://codewithabubakar.netlify.app" target='_black' className="font-light ">Abubakar Aijaz</Link></p>
      </div>
    </footer>

  )
}

export default Footer