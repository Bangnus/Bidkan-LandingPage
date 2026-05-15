import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-16 bg-gray-50 text-gray-600 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link href="/" className="text-3xl font-bold text-primary">
            Bid<span className="text-dark">-Kan</span>
          </Link>
          <p className="text-sm font-medium">เปลี่ยนทุกการเดินทางให้เป็นเรื่องง่าย</p>
        </div>
        
        <p className="order-3 md:order-2 text-sm">&copy; {new Date().getFullYear()} Bidkan Project. All rights reserved.</p>
        
        <div className="order-2 md:order-3 flex space-x-8">
          <Link href="#" className="hover:text-primary transition font-semibold">Facebook</Link>
          <Link href="#" className="hover:text-primary transition font-semibold">Contact</Link>
          <Link href="#" className="hover:text-primary transition font-semibold">Terms</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
