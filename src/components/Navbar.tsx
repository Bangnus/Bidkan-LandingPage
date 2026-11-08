'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" onClick={scrollToTop} className="text-3xl font-bold text-primary">
              Bid<span className="text-dark">-Kan</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" onClick={scrollToTop} className="text-dark hover:text-primary font-medium transition">หน้าเเรก</Link>
            <Link href="#features" className="text-dark hover:text-primary font-medium transition">จุดเด่น</Link>
            <Link href="#how-it-works" className="text-dark hover:text-primary font-medium transition">วิธีใช้งาน</Link>
            <Link 
              href={process.env.NEXT_PUBLIC_CLIENT_APP_URL || "http://localhost:3000"}
              className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-opacity-90 transition shadow-md"
            >
              เข้าใช้งานแอป
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark hover:text-primary focus:outline-none transition"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-xl transition-all duration-300 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
          <Link href="#" onClick={scrollToTop} className="py-3 text-dark hover:text-primary font-medium border-b border-gray-100">หน้าเเรก</Link>
          <Link href="#features" onClick={() => setIsOpen(false)} className="py-3 text-dark hover:text-primary font-medium border-b border-gray-100">จุดเด่น</Link>
          <Link href="#how-it-works" onClick={() => setIsOpen(false)} className="py-3 text-dark hover:text-primary font-medium border-b border-gray-100">วิธีใช้งาน</Link>
          <Link 
            href={process.env.NEXT_PUBLIC_CLIENT_APP_URL || "http://localhost:3000"}
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition shadow-md text-center"
          >
            เข้าใช้งานแอป
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
