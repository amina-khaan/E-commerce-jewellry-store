"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaUser, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white">
      <div className="container mx-auto px-6 py-0 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src="/SAS.png" 
              alt="Logo"
              width={70}
              height={20}
            />
          </Link>
        </div>

        {/* Navigation Links - Centered */}
        <div className="hidden md:flex flex-grow justify-center space-x-6">
          <Link href="/" className="text-orange-950 hover:underline underline-offset-4 ">Home</Link>
          <Link href="/products" className="text-orange-950 hover:underline underline-offset-4 ">Products</Link>
          <Link href="/about" className="text-orange-950 hover:underline underline-offset-4 ">About Us</Link>
          <Link href="/contact" className="text-orange-950 hover:underline underline-offset-4 ">Contact</Link>
        </div>

        {/* Search Bar, Profile, and Cart Icons - Right Side */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-md py-1 px-3"
            />
          </div>
          <Link href="/login">
            <span className="h-6 w-6 text-orange-950 hover:text-orange-900">
              <FaUser />
            </span>
          </Link>

          {/* Cart Icon */}
          <Link href="/cart">
            <span className="h-6 w-6 text-orange-950 hover:text-orange-900">
              <FaShoppingCart />
            </span>
          </Link>
        </div>

        {/* Hamburger Menu - Mobile View */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-orange-950 focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-3 space-y-1 sm:px-3">
          <div className="mt-4 py-2">
            <input
              type="text"
              placeholder="Search"
              className="w-full border rounded-md py-1 px-3"
            />
          </div>
          <Link href="/" className="block text-orange-950 hover:underline underline-offset-4 ">Home</Link>
          <Link href="/products" className="block text-orange-950 hover:underline underline-offset-4 ">Products</Link>
          <Link href="/about" className="block text-orange-950 hover:underline underline-offset-4 ">About Us</Link>
          <Link href="/contact" className="block text-orange-950 hover:underline underline-offset-4 ">Contact</Link>
          <Link href="/login">
              <span className="h-8 w-8 text-orange-950 hover:text-orange-900">
                <FaUser />
              </span>
            </Link>
          <Link href="/cart">
              <span className="h-8 w-8  text-orange-950 hover:text-orange-900">
                <FaShoppingCart />
              </span>
            </Link>
        </div>
        
      )}
    </nav>
  );
};

export default Navbar;
