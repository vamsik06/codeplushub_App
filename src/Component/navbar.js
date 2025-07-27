'use client';
import { useState } from 'react';
import Link from 'next/link';
import './navbar.css';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar flex justify-between text-2xl text-white items-center bg-[#1f4070] p-4 relative">
      <div className="logo ml-20">
        <h1>CODE(+)HUB</h1>
      </div>

      <div className="md:hidden mr-4">
        <button 
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <ul className="hidden md:flex gap-10 text-xl mr-10 font-semibold">
        <li>
          <Link href="/home">Home</Link>  
        </li>
        <li>
          <Link href="/jobs">Jobs</Link>
        </li>
        <li>
          <Link href="/internships">Internships</Link>
        </li>
        <li>
          <Link href="/practice">Practice</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>

      {isOpen && (
        <ul className="md:hidden absolute top-full left-0 right-0 bg-[#1f4070] mt-0 space-y-4 text-center text-lg font-semibold p-4 shadow-lg z-50">
          <li><Link href="/home" onClick={closeMenu}>Home</Link></li>
          <li><Link href="/jobs" onClick={closeMenu}>Jobs</Link></li>
          <li><Link href="/internships" onClick={closeMenu}>Internships</Link></li>
          <li><Link href="/practice" onClick={closeMenu}>Practice</Link></li>
          <li><Link href="/about" onClick={closeMenu}>About</Link></li>
        </ul>
      )}
    </nav>
  );
}
