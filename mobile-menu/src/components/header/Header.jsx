import { useState , useEffect } from 'react';
import gsap from 'gsap';
import React from 'react';
import { CgMenuRight } from 'react-icons/cg';
import { useGSAP } from '@gsap/react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const tl = gsap.timeline({ paused: true });

    // GSAP animations for the logo and desktop nav on component mount
    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(".logo", { duration: 1, y: -100, ease: "power2" });
        tl.from(".desktop li", { duration: 1, opacity: 0, stagger: 0.2, ease: "power2" });
    });

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Services", path: "/services" },
    ];

    useGSAP(() => {
        // Initialize GSAP timeline once on component mount
        tl.to(".mobile-menu", { duration: 0.5, right: "0%", ease: "power2" });
        tl.from(".mobile-menu ul li", { duration: 0.5, opacity: 0, x: 100, stagger: 0.2, ease: "power2" });
    });


    // Handle menu toggle
    const handleMenuClick = () => {
        setIsMenuOpen(true); // Open menu
     
            tl.play(); 

    };

    const handleMenuClose = () => {
        setIsMenuOpen(false); // Close menu
        tl.reverse();  // Reverse the GSAP animation when menu closes
    };
    return (
        <header className="w-full md:px-24 px-12 flex justify-between items-center h-28 border-b text-white">
            <div className="text-2xl tracking-wider font-[700] logo">
                CodeWithAbubakar
            </div>
            <nav className="desktop">
                <ul className="flex gap-x-5 font-medium">
                    {navItems.map((item, index) => (
                        <li className="text-sm hidden lg:block" key={index}>
                            {item.name}
                        </li>
                    ))}
                    <li onClick={handleMenuClick} className="text-2xl inline-block lg:hidden">
                        <CgMenuRight />
                    </li>
                </ul>
            </nav>

            {/* Mobile menu */}
            <nav className="mobile-menu absolute z-30 top-0 -right-full w-screen h-screen shadow-inner-3xl shadow-purple-700 bg-black/70 backdrop-blur-lg">
                <div className="flex justify-between px-12 w-full h-28 items-center   bg-black/40 backdrop-blur-xl text-white">
                    <h1 className="text-2xl tracking-wider font-[700]">CodeWithAbubakar</h1>
                    <div onClick={handleMenuClose} className="text-xl inline-block lg:hidden">X</div>
                </div>
                <ul className="flex flex-col justify-start items-start w-full h-full gap-y-10 p-12 mt-20 font-medium">
                    {navItems.map((item, index) => (
                        <li className="text-sm" key={index}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
