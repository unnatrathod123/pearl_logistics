// import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E6E6FA] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/Pearl Logistic 2.png" alt="Pearl Logistics Logo" width={200} height={50} className="h-12 w-auto object-contain" />
            </Link>
            <p className="text-gray-600 mb-6 max-w-sm leading-relaxed">
              Global logistics and supply chain solutions tailored for modern businesses. We deliver reliability, efficiency, and speed.
            </p>
            <div className="flex gap-4 text-gray-400">
              {/* <a href="#" className="hover:text-[#7F5AF0] transition-colors"><Facebook size={24} /></a>
              <a href="#" className="hover:text-[#7F5AF0] transition-colors"><Twitter size={24} /></a>
              <a href="#" className="hover:text-[#7F5AF0] transition-colors"><Instagram size={24} /></a>
              <a href="#" className="hover:text-[#7F5AF0] transition-colors"><Linkedin size={24} /></a> */}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-600 hover:text-[#7F5AF0] transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-[#7F5AF0] transition-colors">About Us</Link></li>
              <li><Link href="/products" className="text-gray-600 hover:text-[#7F5AF0] transition-colors">Products</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-[#7F5AF0] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-3 text-gray-600">
              <li>123 Logistics Avenue</li>
              <li>New York, NY 10001</li>
              <li>contact@pearllogistics.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#E6E6FA] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Pearl Logistics Inc. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/" className="hover:text-[#7F5AF0] transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-[#7F5AF0] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
