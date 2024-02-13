import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import Search from './Search'

const Navbar = () => {
    const [isScrolled,setIsScrolled]=useState(false)
    
    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          if (scrollPosition > 30) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    
  return (
    <header className={`flex items-center justify-between py-4 border-b z-[10001] transition-all duration-300 ease-in ${
        isScrolled ? "fixed bg-white shadow-md md:px-32 top-0 left-0 right-0" : ""
      }`}>
        <a className='px-2 lg:px-0 font-bold uppercase text-purple-800' href="">Xblog</a>
        
        <div className='hidden sm:block'>
            <Search/>
        </div>
        <ul className='hidden md:inline-flex items-center '>
            <li className='px-2 md:px-4'>
                <Link className='text-purple-600 font-semibold hover:text-purple-500' >
                   
                   Home 
                </Link>
            </li>
            <li className='px-2 md:px-4'>
                <a className="text-gray-500 font-semibold hover:text-purple-500"
 href="">About</a>
            </li>
            <li className='px-2 md:px-4'>
                <a className="text-gray-500 font-semibold hover:text-purple-500" href="">Press</a>
            </li>
            <li className='px-2 md:px-4'>
                <a className="text-gray-500 font-semibold hover:text-purple-500" href="">Contact</a>
            </li>
            <li className='px-2 md:px-4 hidden md:block'>
                <a className="text-gray-500 font-semibold hover:text-purple-500" href="">Login</a>
            </li>
        </ul>
        <ul className='sm:hidden'>
            <li>
                <Link className="text-purple-600 font-semibold hover:text-purple-500" >
                  <FaBars/>
                </Link>
            </li>
        </ul>


    </header>
  )
}

export default Navbar
