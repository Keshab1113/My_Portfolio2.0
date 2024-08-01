import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`w-full h-[10vh] flex justify-center items-center px-4 fixed top-0 z-50 ${isScrolled ? ' hidden' : ''}`}>
            <ul className='hidden sm:flex justify-around w-[40%] h-full items-center'>
                <NavLink
                    to="/"
                    style={({ isActive }) => ({
                        color: isActive ? "greenyellow" : "white",
                    })}
                    className='font-bold px-2 cursor-pointer'
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    style={({ isActive }) => ({
                        color: isActive ? "greenyellow" : "white",
                    })}
                    className='font-bold px-2 cursor-pointer'
                >
                    About
                </NavLink>
                <NavLink
                    to="/projects"
                    style={({ isActive }) => ({
                        color: isActive ? "greenyellow" : "white",
                    })}
                    className='font-bold px-2 cursor-pointer'
                >
                    Projects
                </NavLink>
                <NavLink
                    to="/contact"
                    style={({ isActive }) => ({
                        color: isActive ? "greenyellow" : "white",
                    })}
                    className='font-bold px-2 cursor-pointer'
                >
                    Contact
                </NavLink>
            </ul>
            <div className='sm:hidden absolute right-4'>
                <button onClick={toggleSidebar} className='text-white text-2xl'>
                    {sidebarOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>
            <div className={`fixed top-0 right-0 h-full w-[75%] bg-black transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out sm:hidden z-50`}>
                <div className='flex justify-end p-4'>
                    <button onClick={toggleSidebar} className='text-white text-2xl'>
                        <FiX />
                    </button>
                </div>
                <ul className='flex flex-col justify-center items-center h-full'>
                    <NavLink
                        to="/"
                        onClick={toggleSidebar}
                        style={({ isActive }) => ({
                            color: isActive ? "greenyellow" : "white",
                        })}
                        className='font-bold px-2 py-4 cursor-pointer'
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        onClick={toggleSidebar}
                        style={({ isActive }) => ({
                            color: isActive ? "greenyellow" : "white",
                        })}
                        className='font-bold px-2 py-4 cursor-pointer'
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/projects"
                        onClick={toggleSidebar}
                        style={({ isActive }) => ({
                            color: isActive ? "greenyellow" : "white",
                        })}
                        className='font-bold px-2 py-4 cursor-pointer'
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/contact"
                        onClick={toggleSidebar}
                        style={({ isActive }) => ({
                            color: isActive ? "greenyellow" : "white",
                        })}
                        className='font-bold px-2 py-4 cursor-pointer'
                    >
                        Contact
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Header;
