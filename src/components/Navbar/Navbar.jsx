import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png";
import { FaCaretDown } from 'react-icons/fa';
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import ResponsiveMenu from "./ResponsiveMenu";

 export const navbarLinks = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "About",
        link: "/about",
    },
    {
        name: "Blogs",
        link: "/blogs",
    },
    {
        name: "Best Places",
        link: "/best-places",
    },
];

const DropdownLinks = [
    {
        name: "Our Services",
        link: "/#services",
    },
    {
        name: "Top Brands",
        link: "/#mobile_brands",
    },
    {
        name: "Location",
        link: "/#location",
    },
];

const Navbar = ({handleOrderPopup}) => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <div className='fixed top-0 right-0 w-full bg-white text-black shadow-md z-[99999]'>
                <div className="bg-gradient-to-r from-primary to-secondary text-white">
                    <div className="container ">
                   <marquee behavior="alternate" loop="">      
                        <div className="flex justify-between py-[2px] sm:blockhidden">
                           <p className='font-serif'>20% off on next booking || Mobile No - 9236541878</p>
                        </div>
                    </marquee>
                    </div>
                </div>
                <div className='container py-3 sm:py-0'>
                    <div className='flex justify-between items-center'>
                        {/* Logo section */}
                        <div>
                            <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                                <img src={logo} alt="Logo" className="h-16" />
                            </Link>
                        </div>
                        {/* Navlinks section */}
                        <div className='hidden md:block'>
                            <ul className='flex items-center gap-6 font-serif'>
                                <li className="py-4 px-4 rounded-full hover:bg-gradient-to-r from-primary to-secondary hover:text-black">
                                    <NavLink to="/" activeClassName="active" onClick={() => window.scrollTo(0, 0)}>Home</NavLink>
                                </li>
                                <li className="py-4 px-4 rounded-full hover:bg-gradient-to-r from-primary to-secondary hover:text-black">
                                    <NavLink to="/blogs" activeClassName="active" onClick={() => window.scrollTo(0, 0)}>Blogs</NavLink>
                                </li>
                                <li className="py-4 px-4 rounded-full hover:bg-gradient-to-r from-primary to-secondary hover:text-black">
                                    <NavLink to="/best-places" activeClassName="active" onClick={() => window.scrollTo(0, 0)}>Best Places</NavLink>
                                </li>
                                <li className="py-4 px-4 rounded-full hover:bg-gradient-to-r from-primary to-secondary hover:text-black">
                                    <NavLink to="/about" activeClassName="active" onClick={() => window.scrollTo(0, 0)}>About</NavLink>
                                </li>
                                <li className='py-4 px-4 relative group cursor-pointer  rounded-full hover:bg-gradient-to-r from-primary to-secondary hover:text-black'>
                                    <div className='dropdown group flex items-center'>
                                        <span>Quick Links</span>
                                        <span>
                                            <FaCaretDown className='transition-all duration-200 group-hover:rotate-180' />
                                        </span>
                                    </div>
                                    <div className='absolute -left-9 z-[9999] hidden group-hover:block shadow-md text-black w-[150px] bg-white p-2'>
                                        <ul>
                                            {DropdownLinks.map((data) => {
                                                return (
                                                    <li key={data.name}>
                                                        <a className='inline-block w-full rounded-md p-2 hover:bg-primary/20' href={data.link}>
                                                            {data.name}
                                                        </a>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* Booking now button */}
                        <div className='flex items-center gap-4'>
                            <button className='bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full'
                            onClick={()=>{
                                handleOrderPopup();
                            }}>
                                Book Now
                            </button>
                            {/* Mobile hamburger menu */}
                            <div className='md:hidden block'>
                                {showMenu ? (
                                    <HiMenuAlt1 onClick={toggleMenu} className='cursor-pointer transition-all' size={30} />
                                ) : (
                                    <HiMenuAlt3 onClick={toggleMenu} className='cursor-pointer transition-all' size={30} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {showMenu && <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />}            </div>
        </>
    );
};

export default Navbar;
