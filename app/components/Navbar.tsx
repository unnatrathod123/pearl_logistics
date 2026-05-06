"use client";

import { useState, useEffect } from "react";
import { Menu, X, Wheat } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass shadow-lg py-3"
          : "bg-linear-to-r from-bg via-bg-alt to-surface py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative">
                <Image
                  src="/Pearl Logistic 2 (2).png"
                  alt="Pearl Logistics Logo"
                  width={200}
                  height={50}
                  className={`w-auto object-contain transition-all duration-500 group-hover:scale-105 ${isScrolled ? 'h-10' : 'h-14'}`}
                  priority
                />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.filter(l => l.href !== "/contact").map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 font-medium transition-colors text-md group ${
                  pathname === link.href
                    ? "text-accent-dark"
                    : "text-text hover:text-accent-dark"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-linear-to-r from-accent to-glow rounded-full transition-all duration-300 ${
                    pathname === link.href ? "w-3/4" : "w-0 group-hover:w-3/4"
                  }`}
                />
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-3 btn-primary text-md py-2.5! px-6! inline-flex items-center gap-2"
            >
              <span className="relative z-10">Contact Us</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-10 h-10 rounded-xl bg-surface flex items-center justify-center text-text hover:bg-surface-hover transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass shadow-xl border-t border-border transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-3 pb-6 space-y-1">
          {navLinks.filter(l => l.href !== "/contact").map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                pathname === link.href
                  ? "bg-surface text-accent-dark"
                  : "text-text hover:bg-surface hover:text-accent-dark"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3">
            <Link
              href="/contact"
              className="block w-full text-center btn-primary rounded-xl!"
            >
              <span className="relative z-10">Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
