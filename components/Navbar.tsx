'use client';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 font-sans ${isScrolled ? 'bg-white/40 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.05)]' : 'bg-white/95'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-500 ${isScrolled ? 'h-16' : 'h-24'}`}>
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/Pearl Logistic 2 (2).png"
              alt="Pearl Logistics Logo"
              width={200}
              height={50}
              className={`w-auto object-contain transition-all duration-500 group-hover:scale-105 ${isScrolled ? 'h-10' : 'h-14'}`}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10 text-gray-800 font-semibold tracking-wide text-base">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`relative group px-1 py-2 transition-colors duration-300 ${pathname === link.href ? 'text-[#7F5AF0]' : 'hover:text-[#7F5AF0]'}`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#7F5AF0] transform origin-left transition-transform duration-300 ${pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </Link>
            ))}
            
            <Link href="/contact" className="ml-4 bg-[#7F5AF0] text-white px-7 py-3 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-[#6c4be0] hover:shadow-[0_8px_20px_rgba(127,90,240,0.3)] hover:-translate-y-0.5 transition-all duration-300">
              Contact Us
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-800 hover:text-[#7F5AF0] transition-colors p-2 bg-[#E6E6FA]/30 rounded-lg">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white/95 backdrop-blur-xl border-b border-[#E6E6FA]/50 shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out origin-top ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
        <div className="px-6 py-8 space-y-6 flex flex-col items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className={`text-xl font-bold tracking-wide transition-colors ${pathname === link.href ? 'text-[#7F5AF0]' : 'text-gray-800 hover:text-[#7F5AF0]'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setIsOpen(false)} className="w-full max-w-xs block bg-[#7F5AF0] text-white text-center py-4 rounded-full text-base font-bold uppercase tracking-wider hover:bg-[#6c4be0] hover:shadow-lg transition-all mt-4">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
