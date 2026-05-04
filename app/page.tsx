import { Menu, Truck, } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-indigo-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2 text-[#7F5AF0] font-bold text-xl">
            <Truck size={28} /> <span>LOGISTRO</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
            <a href="/" className="hover:text-[#7F5AF0]">Home</a>
            <a href="/about" className="hover:text-[#7F5AF0]">About</a>
            <a href="/products" className="hover:text-[#7F5AF0]">Products</a>
            <a href="/contact" className="hover:text-[#7F5AF0]">Contact</a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-600">
            <Menu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-indigo-50 p-4 space-y-4">
          <a href="/" className="block text-gray-600">Home</a>
          <a href="/about" className="block text-gray-600">About</a>
          <a href="/products" className="block text-gray-600">Products</a>
          <a href="/contact" className="block text-gray-600">Contact</a>
        </div>
      )}
    </nav>
  );
};