'use client';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#E6E6FA]/90 backdrop-blur-md shadow-md' : 'bg-white border-b border-[#E6E6FA]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/Pearl Logistic 2 (2).png"
              alt="Pearl Logistics Logo"
              width={200}
              height={50}
              className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'}`}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
            <Link href="/" className="hover:text-[#7F5AF0] transition-colors">Home</Link>
            <Link href="/about" className="hover:text-[#7F5AF0] transition-colors">About</Link>
            <Link href="/products" className="hover:text-[#7F5AF0] transition-colors">Products</Link>
            <Link href="/contact" className="bg-[#7F5AF0] text-white px-5 py-2.5 rounded-xl font-bold hover:bg-[#6c4be0] hover:shadow-lg hover:shadow-[#7F5AF0]/30 transition-all">
              Contact Us
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700 hover:text-[#7F5AF0] transition-colors">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-[#E6E6FA] px-4 py-6 space-y-6 absolute w-full shadow-lg">
          <Link href="/" onClick={() => setIsOpen(false)} className="block text-gray-700 text-lg font-medium hover:text-[#7F5AF0]">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block text-gray-700 text-lg font-medium hover:text-[#7F5AF0]">About</Link>
          <Link href="/products" onClick={() => setIsOpen(false)} className="block text-gray-700 text-lg font-medium hover:text-[#7F5AF0]">Products</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block bg-[#7F5AF0] text-white text-center py-3 rounded-xl text-lg font-bold hover:bg-[#6c4be0] hover:shadow-lg transition-all mt-4">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
