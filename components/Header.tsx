'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaTools, FaIndustry, FaRobot, FaShieldAlt, FaMicrochip, FaHammer, FaFireExtinguisher } from 'react-icons/fa';

const categories = [
  { name: 'Industrial Tools', icon: <FaTools /> },
  { name: 'Fabrication', icon: <FaIndustry /> },
  { name: 'Automation', icon: <FaRobot /> },
  { name: 'Safety', icon: <FaShieldAlt /> },
  { name: 'Electronics', icon: <FaMicrochip /> },
  { name: 'Hardware', icon: <FaHammer /> },
  { name: 'Welding', icon: <FaFireExtinguisher /> },
  
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
    <header className="w-full bg-white relative z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:px-6">
        {/* Logo */}
        <Link href="/" className="text-xl sm:text-2xl font-extrabold text-black tracking-tight">
          <span className="text-sky-700">JKSKY</span> GROUP
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 xl:space-x-10 text-[15px] xl:text-[16px] font-medium text-black">
          <Link className='hover:text-blue-700 transition-colors' href="/">Home</Link>
          <Link className='hover:text-blue-700 transition-colors' href="#about">About</Link>
          <Link className='hover:text-blue-700 transition-colors' href="#categories">Categories</Link>
          <Link className='hover:text-blue-700 transition-colors' href="#products">Products</Link>
          <Link className='hover:text-blue-700 transition-colors' href="#services">Services</Link>
          <Link className='hover:text-blue-700 transition-colors' href="#contact">Contact</Link>
        </nav>

        {/* Desktop CTA Button */}
        <Link
          href="#quote"
          className="hidden sm:block rounded-md bg-blue-700 px-3 py-2 lg:px-4 text-white text-sm font-medium hover:bg-black transition-colors"
        >
          Request Quote
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          aria-label="Toggle mobile menu"
        >
          <span className={`h-0.5 w-6 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`h-0.5 w-6 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-0.5 w-6 bg-black transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-lg z-40 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <nav className="bg-white border-t border-gray-100 px-4 py-4">
          <div className="flex flex-col space-y-4">
            <Link 
              className='text-black hover:text-blue-700 transition-colors py-2 border-b border-gray-100' 
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              className='text-black hover:text-blue-700 transition-colors py-2 border-b border-gray-100' 
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              className='text-black hover:text-blue-700 transition-colors py-2 border-b border-gray-100' 
              href="#categories"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Categories
            </Link>
            <Link 
              className='text-black hover:text-blue-700 transition-colors py-2 border-b border-gray-100' 
              href="#products"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              className='text-black hover:text-blue-700 transition-colors py-2 border-b border-gray-100' 
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              className='text-black hover:text-blue-700 transition-colors py-2 border-b border-gray-100' 
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="#quote"
              className="mt-4 rounded-md bg-blue-700 px-4 py-3 text-white text-sm font-medium hover:bg-black transition-colors text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Request Quote
            </Link>
          </div>
        </nav>
        
      </div>
    </header>
    {/* Scrollable Categories Bar */}
<div className="w-full bg-white mt-3 mb-5">
  <div className="overflow-x-auto no-scrollbar">
    <div className="flex justify-center sm:justify-start gap-5 sm:gap-10 px-4 py-3 w-max mx-auto">
      {categories.map((item, idx) => (
        <Link key={idx} href={`#`}>
          <div className="flex-shrink-0 w-40 sm:w-40 bg-white p-2 sm:p-2 rounded-xl border-1 border-sky-700 shadow-lg  text-center cursor-pointer hover:bg-gray-100 transition">
            <div className="mx-auto mb-2 sm:mb-3 h-10 w-10 sm:h-12 sm:w-12 rounded-full  bg-blue-100 flex items-center justify-center text-blue-700 text-lg sm:text-xl">
              {item.icon}
            </div>
            <p className="text-xs sm:text-sm font-semibold text-gray-800">
              {item.name}
            </p>
          </div>
        </Link>
      ))}
    </div>
  </div>
</div>
    </>
  );
}